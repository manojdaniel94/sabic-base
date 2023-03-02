import React, { useRef } from "react";
import "./Status.scss"

import iconAffiliates from "../../assets/images/icon_Affiliates.svg";
import iconAssets from "../../assets/images/icon_Assets.svg";
import iconHealthIndex from "../../assets/images/icon_Health_Index.svg";
import iconProfile from "../../assets/images/icon_PM_Compliance.svg";
import imagePMCompliance from "../../assets/images/icon_Spares_Availability.svg";
import imageActive from "../../assets/images/icon_Active.svg";
import imageOverdue from "../../assets/images/icon_Overdue.svg";
import imageUnderInvestigate from "../../assets/images/icon_Under_Investigate.svg";

interface Props {
    data: any[];
    page: string;
    healthIndex: any[];
}

const Status = ({ data, page, healthIndex }: Props) => {
    // console.log("healthIndex for PLANT", healthIndex)
    return (
        <>
            {page === "PLANT" ?
                <>
                    {data && data.length > 0 ?
                        <div id="status">
                            <div className="common">
                                <div><div><img src={iconAffiliates} title="Affiliates" /></div><div><span id="value">{data[0].affiliateCount}</span><span>AFFILIATES</span></div></div>
                                <div><div><img src={iconAssets} title="Assets" /></div><div><span id="value2">{data[0].assetCount}</span><span>ASSETS</span></div></div>
                                <div><div><img src={iconHealthIndex} title="Health_Index" /></div><div><span>{data[0].healthIndex}%</span><span>HEALTH INDEX</span></div></div>
                                <div><div><img src={iconProfile} title="PM_Compliance" /></div><div><span id="value4">{data[0].pmCompliance}</span><span>PM COMPLIANCE</span></div></div>
                                <div><div><img src={imagePMCompliance} title="Spares_Availability" /></div><div><span id="value4">{data[0].spare}</span><span>SPARES AVAILABILITY</span></div></div>
                                <div><div><img src={imageActive} title="Active" /></div><div><span id="value2">{data[0].active}</span><span>ACTIVE</span></div></div>
                                <div><div><img src={imageOverdue} title="Overdue_Investigate" /></div><div><span id="value2">{data[0].underInvestigation}</span><span>UNDER INVESTIGATION</span></div></div>
                                <div><div><img src={imageUnderInvestigate} title="Under_Investigate" /></div><div><span id="value2">{data[0].overdueInvestigation}</span><span>OVERDUE INVESTIGATION</span></div></div>
                            </div>
                        </div>
                        : null
                    }
                </>
                : null
            }
        </>
    );
};

export default Status;