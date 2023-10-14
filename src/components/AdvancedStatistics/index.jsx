import React from "react";
import './advancedStatistics.css';

export function AdvancedStatistics() {
    return (
        <div className="advancedStatistics_container">
            <h3>Advanced Statistics</h3>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            

            <div className="cards_container">
                <div className="card_line"></div>

                <div className="card_container" id="card_1">
                    <div className="card_icon_container">
                        <div>
                            <img src="images/icon-brand-recognition.svg" alt="" />
                        </div>
                    </div>
                    <h4 className="card_title">
                        Brand Recognition
                    </h4>
                    <p className="card_text">
                        Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>

                {/* <div className="card_line">asd</div>
                <div className="card_line">asd</div> */}

                <div className="card_container" id="card_2">
                    <div className="card_icon_container">
                        <div>
                            <img src="images/icon-detailed-records.svg" alt="" />
                        </div>
                    </div>
                    <h4 className="card_title">
                        Detailed Records
                    </h4>
                    <p className="card_text">
                        Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                    </p>
                </div>

                <div className="card_container" id="card_3">
                    <div className="card_icon_container">
                        <div>
                            <img src="images/icon-fully-customizable.svg" alt="" />
                        </div>
                    </div>
                    <h4 className="card_title">
                        Fully Customizable
                    </h4>
                    <p className="card_text">
                        Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                    </p>
                </div>
            </div>
        </div>
    )
}