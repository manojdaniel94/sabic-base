import React, { useRef, useEffect, useState } from "react";
import AssetCard from "../../../components/PmtComponent/AssetCard";
import PlantAlertList from "../../../components/PmtComponent/PlantAlertList";
import '../../../assets/common/PmtDashboard.scss'
import ReliablityHeatMap from "../../../components/PmtComponent/ReliablityHeatMap";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../../components/Dropdown/Dropdown";
import {
    getRegions,
    getAssetListByPlantId,
    getPlantAlertSpmt,
    getAssetCardPmtByPlantId,
    getAssetCardPmtByAssetId,
    getAssetStatusPmtByPlantId,
    getStatusAssetPmtByPlantId,
} from '../../../redux/reducers/CommonReducer';



const PmtDashboard = () => {

    let dispatch = useDispatch();

    const { regions, assetListByPlant, plantAlertSpmt, assetCardPmtByplantId, assetCardPmtByAssetId, assetStatusPmtByPlantId, statusAssetPmtByPlantId } = useSelector((state: any) => ({
        regions: state.Common.regions,
        assetListByPlant: state.Common.assetListByPlant,
        plantAlertSpmt: state.Common.plantAlertSpmt,
        assetCardPmtByplantId: state.Common.assetCardPmtByplantId,
        assetCardPmtByAssetId: state.Common.assetCardPmtByAssetId,
        assetStatusPmtByPlantId: state.Common.assetStatusPmtByPlantId,
        statusAssetPmtByPlantId: state.Common.statusAssetPmtByPlantId,
    }));

    const [assetIdDropList, setAssetIdDropList] = useState<any>();
    const [selectedAssetId, setSelectedAssetId] = useState<any>("")
    const [heatMapData, setheatMapData] = useState({
        assetOff: "",
        warning: "",
        normal: "",
    })


    useEffect(() => {
        dispatch(getRegions("1"));
        dispatch(getAssetListByPlantId("1"));    //selectedPlant.value
        dispatch(getPlantAlertSpmt("1"));        //selectedPlant.value
        dispatch(getAssetCardPmtByPlantId("1")); //selectedPlant.value

        dispatch(getAssetStatusPmtByPlantId("1")); //selectedPlant.value
        dispatch(getStatusAssetPmtByPlantId("1")); //selectedPlant.value
    }, []);

    useEffect(() => {
        let data = assetListByPlant.map(function (item: any) {
            return { value: item.assetId, label: item.assetId };
        });
        setAssetIdDropList(data);
    }, [assetListByPlant]);

    useEffect(() => {
        if (assetStatusPmtByPlantId.length > 0)
            setheatMapData({
                ...heatMapData,
                assetOff: assetStatusPmtByPlantId[0].value,
                warning: assetStatusPmtByPlantId[1].value,
                normal: assetStatusPmtByPlantId[2].value,

            })
    }, [assetStatusPmtByPlantId]);

    console.log("assetListByPlant details dropdown", assetListByPlant);
    console.log("plantAlertSpmt details", plantAlertSpmt);
    console.log("assetCardPmtByplantId details", assetCardPmtByplantId);
    console.log("assetCardPmtByAssetId details", assetCardPmtByAssetId);
    console.log("Heatchart details", assetStatusPmtByPlantId);
    console.log("getTopStatusByPlantId", statusAssetPmtByPlantId);


    const handleAssetIdDropChange = (e: any) => {
        //  console.log(e.value)
        setSelectedAssetId(e.value)
        // setValue({ ...value, localRegion: e, })
        //dispatch(getAffiliatesByRegion(e.value));
        dispatch(getAssetCardPmtByAssetId(e.value)); //selectedAssetId.value
    };


    return (
        <div id="pmt">
            <div id="pmt-left">
                <div id="pmt-asset-card">
                    <div className="pmt-filter">
                        <div className="pmt-title">ASSET CARD</div>
                        <div className="pmt-time">Go to Asset Page</div>
                        <div className="pmt-time"><span>Asset ID</span><input type="text" /></div>

                        <Dropdown
                            options={assetIdDropList}
                            // defaultValue={selectedRegion}
                            handleChange={handleAssetIdDropChange}
                        />
                    </div>
                    <div className="pmt-asset-name">LC-01 - CGC</div>
                    <AssetCard
                        data={selectedAssetId === "" ?
                            assetCardPmtByplantId : assetCardPmtByAssetId} />
                </div>
                <PlantAlertList
                    data={plantAlertSpmt} />
            </div>
            <div id="pmt-right">
                <>
                    <div className="pmt-right-title">RELIABILITY HEAT MAP</div>
                    <div>Click on the map to get more details</div>
                    <ReliablityHeatMap statusData={heatMapData} />
                </>
            </div>
        </div>
    );
};
export default PmtDashboard;
