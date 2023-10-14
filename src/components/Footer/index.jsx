import React from "react";
import './footer.css';

export function Footer() {
    return (
        <div className="footer_container">
            <h2>Shortly</h2>

            <div className="footer_block">
                <h6>Features</h6>
                <ul>
                    <li><a href="">Link Shortening</a></li>
                    <li><a href="">Branded Links</a></li>
                    <li><a href="">Analytics</a></li>
                </ul>
            </div>
            <div className="footer_block">
                <h6>Resources</h6>
                <ul>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Developers</a></li>
                    <li><a href="">Support</a></li>
                </ul>
            </div>
            <div className="footer_block">
                <h6>Company</h6>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Our Team</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="footer_block footer_social">
                <a href="#"><img src="images/icon-facebook.svg" alt="fb" /></a>
                <a href="#"><img src="images/icon-twitter.svg" alt="tw" /></a>
                <a href="#"><img src="images/icon-pinterest.svg" alt="pt" /></a>
                <a href="#"><img src="images/icon-instagram.svg" alt="ig" /></a>
            </div>
        </div>
    )
}