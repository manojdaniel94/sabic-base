import React, { useRef } from "react";
import '../../../assets/common/PmtDashboard.scss'
import imageHeatmap from "../../../assets/images/image_Heatmap.svg";

const ReliablityHeatMap = () => {
    return (
        <div>
            <div className="pmt-right-title">RELIABILITY HEAT MAP</div>
            <div>Click on the map to get more details</div>
            <div className="pmt-health-index">
                <div className="pmt-heatmap">
                    <img src={imageHeatmap} />
                </div>
                <div className="pmt-heatmapvalues">
                    <div className="hi-value1">
                        <span className="hi-numbers">
                            <div className="hi-popup hi-pos-off">
                                <h3>HEALTH INDEX</h3>
                                <div className="hi-popbox">
                                    <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                    <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                    <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                    <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                    <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                    <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                    <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                    <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                    <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                </div>
                            </div>
                            43</span><span className="hi-name">Asset-Off</span><span className="hi-status">Off</span></div>
                    <div className="hi-value2">
                        <span className="hi-numbers">
                            <div className="hi-popup hi-pos-normal">
                                <h3>HEALTH INDEX</h3>
                                <div className="hi-popbox">
                                    <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                    <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                    <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                    <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                    <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                    <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                    <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                    <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                    <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                    <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                </div>
                            </div> 49</span><span className="hi-name">Normal</span><span className="hi-status">Health Index &gt; 70%</span></div>
                    <div className="hi-value3"><span className="hi-numbers">


                        <div className="hi-popup hi-pos-warning">
                            <h3>HEALTH INDEX</h3>
                            <div className="hi-popbox">
                                <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                            </div>
                        </div> 889</span><span className="hi-name">Warning</span><span className="hi-status">Health Index &lt; 70%</span></div>
                    <div className="hi-value4"><span className="hi-numbers">


                        <div className="hi-popup hi-pos-risk">
                            <h3>HEALTH INDEX</h3>
                            <div className="hi-popbox">
                                <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-16040</span><span><i></i>50%</span></div>
                                <div className="hi-popuprow"><span>K-15640</span><span><i></i>60%</span></div>
                                <div className="hi-popuprow"><span>K-14324</span><span><i></i>30%</span></div>
                                <div className="hi-popuprow"><span>K-11240</span><span><i></i>50%</span></div>
                            </div>
                        </div> 2</span><span className="hi-name">Asset Under Risk</span><span className="hi-status">Health Index Under Risk</span></div>
                </div>

            </div>
        </div>
    );
};

export default ReliablityHeatMap;