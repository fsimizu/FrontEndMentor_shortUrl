import React from "react";
import './shotenItem.css';

export function ShortenItem({link}) {
    
    const copyLink = (link) => {
        navigator.clipboard.writeText(link);
        

        const button_array = document.getElementsByClassName('copy_button');
        for (let i = 0; i < button_array.length; i++) {
            button_array[i].innerHTML = 'Copy';
            button_array[i].style.backgroundColor = "var(--cyan)";
          }   

        const button = document.getElementById(link);
        button.innerHTML = 'Copied!';
        button.style.backgroundColor = "var(--darkViolet)"

    }

    return (
        <div className="link_container">
            <div className="link_long">{link.longUrl}</div>
            <hr />
            <div className="link_short">{link.shortUrl}</div>
            <div className="copy_button_container">
                <button className="copy_button" id={link.shortUrl} onClick={()=>{copyLink(link.shortUrl)}}>Copy</button>
            </div>
        </div>
)}