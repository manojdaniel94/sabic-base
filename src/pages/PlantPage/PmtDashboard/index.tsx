import React, { useRef, useEffect, useState } from "react";
import AssetCard from "../../../components/PmtComponent/AssetCard";
import PlantAlertList from "../../../components/PmtComponent/PlantAlertList";
import '../../../assets/common/PmtDashboard.scss'
import ReliablityHeatMap from "../../../components/PmtComponent/ReliablityHeatMap";
import { useDispatch, useSelector } from "react-redux";
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

    const { regions, assetListByPlant,plantAlertSpmt,assetCardPmtByplantId,assetCardPmtByAssetId,assetStatusPmtByPlantId,statusAssetPmtByPlantId} = useSelector((state: any) => ({
        regions: state.Common.regions,
        assetListByPlant: state.Common.assetListByPlant,
        plantAlertSpmt: state.Common.plantAlertSpmt,
        assetCardPmtByplantId: state.Common.assetCardPmtByplantId,
        assetCardPmtByAssetId: state.Common.assetCardPmtByAssetId,
        assetStatusPmtByPlantId: state.Common.assetStatusPmtByPlantId,
        statusAssetPmtByPlantId: state.Common.statusAssetPmtByPlantId,
    }));


    useEffect(() => {
        dispatch(getRegions("1"));
        dispatch(getAssetListByPlantId("1"));    //selectedPlant.value
        dispatch(getPlantAlertSpmt("1"));        //selectedPlant.value
        dispatch(getAssetCardPmtByPlantId("1")); //selectedPlant.value
        dispatch(getAssetCardPmtByAssetId("1")); //selectedAssetId.value
        dispatch(getAssetStatusPmtByPlantId("1")); //selectedPlant.value
        dispatch(getStatusAssetPmtByPlantId("1")); //selectedPlant.value
    }, []);

    useEffect(() => {
        console.log("region details" + JSON.stringify(regions))
    }, [regions]);

    console.log("assetListByPlant details" , assetListByPlant );
    console.log("plantAlertSpmt details" , plantAlertSpmt);
    console.log("assetCardPmtByplantId details" , assetCardPmtByplantId);
    console.log("assetCardPmtByAssetId details" , assetCardPmtByAssetId);
    console.log("Heatchart details" , assetStatusPmtByPlantId);
    console.log("getTopStatusByPlantId" , statusAssetPmtByPlantId);
   


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
