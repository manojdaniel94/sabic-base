import React, { useRef, useEffect, useState } from "react";


interface Props {
    data: any[];
    handleMenuClick: any;
    getSelectedclassName: any;

}

const MenuContainer = ({ data, handleMenuClick, getSelectedclassName }: Props) => {

    return (
        <div className="top-container-wrapper">
            {data.map((item) => (
                <div
                    key={item.id}
                    className={`top-container-conten ${getSelectedclassName(item.id)}`}
                    onClick={() => handleMenuClick(item.id)}
                >
                    {item.value}
                </div>
            ))}
        </div>
    );
}

export default MenuContainer;