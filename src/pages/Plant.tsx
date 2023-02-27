import React, { useRef, useState, useEffect } from "react";
import MenuContainer from "../components/MenuContainer";
import PmtDashboard from "./PlantPage/PmtDashboard";
import AlertSatistics from "./PlantPage/AlertSatistics";


const PLANT_MENU_DATA = [
    { id: 1, value: "PMT" },
    { id: 2, value: "ALERT SATISTICS" },
    { id: 3, value: "MODEL PERFORMNACE" },
    { id: 4, value: "ALERT MANAGEMENT PAGE" },
];
const Plant = () => {

    // const [elements, setElements] = useState(PLANT_MENU_DATA);
    const [selectedID, setSelectedID] = useState(1);

    const handleMenuClick = (id: any) => {
        setSelectedID(id);
        console.log(id)
    }

    const getSelectedclassName = (id: any) => selectedID === id ? "selected" : "notselected";


    const renderStep = () => {
        switch (selectedID) {
            case 1:
                return (
                    <PmtDashboard
                    />
                )
            case 2:
                return (
                    <AlertSatistics
                    />
                )

            default:
                return <div>{"INFO_NO_STEP_AVAILABLE"}</div>
        }
    }

    return (
        <>
            <div>
                <MenuContainer
                    data={PLANT_MENU_DATA}
                    handleMenuClick={handleMenuClick}
                    getSelectedclassName={getSelectedclassName}
                />
                {renderStep()}
            </div>
        </>
    );
};



export default Plant;