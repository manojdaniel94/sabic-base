import React, { useRef, useEffect, useState } from "react";
import AssetCard from "../../../components/PmtComponent/AssetCard";
import PlantAlertList from "../../../components/PmtComponent/PlantAlertList";
import '../../../assets/common/PmtDashboard.scss'
import ReliablityHeatMap from "../../../components/PmtComponent/ReliablityHeatMap";
import { useDispatch, useSelector } from "react-redux";
import { getRegions } from "../../../redux/reducers/CommonReducer";
import Dropdown from "../../../components/Dropdown/Dropdown";


const PmtDashboard = () => {

    let dispatch = useDispatch();

    const { regions } = useSelector((state: any) => ({
        regions: state.Common.regions,
    }));


    useEffect(() => {
        dispatch(getRegions("1"));
    }, []);

    useEffect(() => {
        console.log("region details" + JSON.stringify(regions))
    }, [regions]);


    return (
        <div id="pmt">
            <div id="pmt-left">
                <div id="pmt-asset-card">
                    <div className="pmt-filter">
                        <div className="pmt-title">ASSET CARD</div>
                        <div className="pmt-time">Go to Asset Page</div>
                        <div className="pmt-time"><span>Asset ID</span><input type="text" /></div>
                        {/* <div className="pmt-options"><select><option>All Assets</option></select></div> */}
                        <Dropdown
                        // options={regionsOptions}
                        // defaultValue={selectedRegion}
                        // handleChange={handleRegionChange}
                        />
                    </div>
                    <div className="pmt-asset-name">LC-01 - CGC</div>
                    <AssetCard />
                </div>
                <PlantAlertList />
            </div>
            <div id="pmt-right">
                <ReliablityHeatMap />
            </div>
        </div>
    );
};
export default PmtDashboard;
