import React, { useRef } from "react";
import '../../../assets/common/PmtDashboard.scss'


const AssetCard = () => {
    return (
        <div id="pmt-asset-card">
            <div className="pmt-filter">
                <div className="pmt-title">ASSET CARD</div>
                <div className="pmt-time">Go to Asset Page</div>
                <div className="pmt-time"><span>Asset ID</span><input type="text" /></div>
                <div className="pmt-options"><select><option>All Assets</option></select></div>
            </div>
            <div className="pmt-asset-name">LC-01 - CGC</div>
        </div>
    );
};

export default AssetCard;