import React, { useRef, useState } from "react";
import '../../../assets/common/PmtDashboard.scss'
import imageHeatmap from "../../../assets/images/image_Heatmap.svg";


interface Props {
    statusData: any,
    toolTipData: any[],
    selectedHeatStatus: any
}
const ReliablityHeatMap = ({ statusData, toolTipData, selectedHeatStatus }: Props) => {

    const [mouseHoverValue, setMouseHoverValue] = useState<any>("")
    return (
        <div className="pmt-health-index">
            <div className="pmt-heatmap">
                <img src={imageHeatmap} />
            </div>
            <div className="pmt-heatmapvalues">
                <div className="hi-value1">
                    <span className="hi-numbers"
                        onMouseOver={() => { setMouseHoverValue("Asset-off"); console.log("hii") }}
                    // onMouseOut={() => setMouseHoverValue("")}
                    >
                        <div className={`hi-popup hi-pos-off ${mouseHoverValue && selectedHeatStatus === "ASSET OFF" ? 'show' : 'hidden'}`}>
                            <h3>HEALTH INDEX <a href="#" className="hi-pop-close" onClick={() => setMouseHoverValue("")}> X</a></h3>
                            <div className="hi-popbox">
                                {toolTipData.map((item) => (
                                    <div className="hi-popuprow"><span>{item.assetId}</span><span><i></i>{item.assetHealthIndex}%</span></div>
                                ))}
                            </div>
                        </div>
                        {statusData && statusData.assetOff.value}</span><span className="hi-name">Asset-Off</span><span className="hi-status">Off</span></div>
                <div className="hi-value2">
                    <span className="hi-numbers"
                        onMouseOver={() => { setMouseHoverValue("Normal"); console.log("hii") }}
                    >
                        <div className={`hi-popup hi-pos-normal ${mouseHoverValue && selectedHeatStatus === "Normal" ? 'show' : 'hidden'}`}>
                            <h3>HEALTH INDEX <a href="#" className="hi-pop-close" onClick={() => setMouseHoverValue("")}> X</a></h3>
                            <div className="hi-popbox">
                                {toolTipData.map((item) => (
                                    <div className="hi-popuprow"><span>{item.assetId}</span><span><i></i>{item.assetHealthIndex}%</span></div>
                                ))}
                            </div>
                        </div> {statusData && statusData.warning.value}</span><span className="hi-name">Normal</span><span className="hi-status">Health Index &gt; 70%</span></div>


                <div className="hi-value3"><span className="hi-numbers"
                    onMouseOver={() => { setMouseHoverValue("Warning"); console.log("hii") }}
                >
                    <div className={`hi-popup hi-pos-warning ${mouseHoverValue && selectedHeatStatus === "Warning" ? 'show' : 'hidden'}`}>
                        <h3>HEALTH INDEX <a href="#" className="hi-pop-close" onClick={() => setMouseHoverValue("")}> X</a></h3>
                        <div className="hi-popbox">
                            {toolTipData.map((item) => (
                                <div className="hi-popuprow"><span>{item.assetId}</span><span><i></i>{item.assetHealthIndex}%</span></div>
                            ))}
                        </div>
                    </div>  {statusData && statusData.normal.value}</span><span className="hi-name">Warning</span><span className="hi-status">Health Index &lt; 70%</span></div>


                <div className="hi-value4"><span className="hi-numbers"
                    onMouseOver={() => { setMouseHoverValue("Risk"); console.log("hii") }}
                >
                    <div className={`hi-popup hi-pos-risk ${mouseHoverValue && selectedHeatStatus === "Asset Under Risk" ? 'show' : 'hidden'}`}>
                        <h3>HEALTH INDEX <a href="#" className="hi-pop-close" onClick={() => setMouseHoverValue("")}> X</a></h3>
                        <div className="hi-popbox">
                            {toolTipData.map((item) => (
                                <div className="hi-popuprow"><span>{item.assetId}</span><span><i></i>{item.assetHealthIndex}%</span></div>
                            ))}
                        </div>
                    </div>  {statusData && statusData.assetUnderRisk.value}</span><span className="hi-name">Asset Under Risk</span><span className="hi-status">Health Index Under Risk</span></div>
            </div>

        </div >
    );
};

export default ReliablityHeatMap;