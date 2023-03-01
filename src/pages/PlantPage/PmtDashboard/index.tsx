import React, { useRef, useEffect, useState } from "react";
import AssetCard from "../../../components/PmtComponent/AssetCard";
import PlantAlertList from "../../../components/PmtComponent/PlantAlertList";
import '../../../assets/common/PmtDashboard.scss'
import ReliablityHeatMap from "../../../components/PmtComponent/ReliablityHeatMap";
import { useDispatch, useSelector } from "react-redux";
import { getRegions } from "../../../redux/reducers/CommonReducer";



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
                <AssetCard />
                <PlantAlertList />
            </div>
            <div id="pmt-right">
                <ReliablityHeatMap />
            </div>
        </div>
    );
};
export default PmtDashboard;
