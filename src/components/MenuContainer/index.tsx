import React, { useRef, useEffect, useState } from "react";
import "./MenuContainer.scss"

interface Props {
    data: any[];
    handleMenuClick: any;
    getSelectedclassNameName: any;

}

const MenuContainer = () => {

    return (
        // <div classNameName="top-container-wrapper">
        //     {data.map((item) => (
        //         <div
        //             key={item.id}
        //             classNameName={`top-container-conten ${getSelectedclassNameName(item.id)}`}
        //             onClick={() => handleMenuClick(item.id)}
        //         >
        //             {item.value}
        //         </div>
        //     ))}
        // </div>
        <div id="pmt-menu"><a href="#" className="active">PMT</a><a href="#">ALERT STATISTICS</a><a href="#">MODEL PERFORMANCE</a><a href="#">ALERT MANAGEMENT PAGE</a><a href="#">PM COMPLIANCE</a></div>
    );
}

export default MenuContainer;