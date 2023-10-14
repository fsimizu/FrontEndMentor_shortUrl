import React from "react";
import './hero.css';
import { GetStartedBtn } from "../GetStartedBtn";

export function Hero() {
    return (
        <div className="hero_container">
            <div className="img_container">
                <img src="images/illustration-working.svg" alt="" />
            </div>
            <div className="hero_text">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailes insights on how your links are performing.</p>
                <GetStartedBtn />
            </div>
        </div>
    )
}