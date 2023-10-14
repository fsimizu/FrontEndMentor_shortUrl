import React, { useState, useEffect } from "react";
import './shorten.css';
import { ShortenItem } from "../ShortenItem";

export function Shorten() {

    const apiCall = (longUrl) => {
        fetch(`https://cleanuri.com/api/v1/shorten`
        // , {
            // method: 'POST',
            // body: JSON.stringify({
            //     url: 'http://youtube.com/sdrhsger'
            //   }),
            // headers: {
            //     // 'api-key': 'rSTOdzw2vUmhsroVpZZpWqJf0CkhCJhLaVNbRtO4DgCVT',
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            //   } 
        // }
        )
            .then((result) => {
                return result.json();
            })
            // .then((data) => {
            //     console.log(data);
            // })
    }

    const [link, setLink] = useState(() => {
        return [];
    })

    const clearError = () => {
        document.getElementById("form_error").style.display = "none";
        document.getElementById("url").style.border = "none";
        document.getElementById("url").classList.remove("red_placeholder");
    }


    const addLink = (longUrl) => {
        
        let existing = false;
        for (const obj of link) {
            if (obj.longUrl == longUrl) {
                existing = true;
            }
        }
        
        if (!longUrl) {
            document.getElementById("form_error").innerHTML = "Please add a link";
            document.getElementById("form_error").style.display = "block";
            document.getElementById("url").style.border = "solid var(--red)";
            document.getElementById("url").classList.add("red_placeholder");

        }
        else if (existing) {
            document.getElementById("form_error").innerHTML = "The URL provided has already been shortened";
            document.getElementById("form_error").style.display = "block";
            document.getElementById("url").style.border = "solid var(--red)";
            document.getElementById("url").classList.add("red_placeholder");
            
        }

        else {
            // apiCall(longUrl);
            
            const button_array = document.getElementsByClassName('copy_button');
            for (let i = 0; i < button_array.length; i++) {
                button_array[i].innerHTML = 'Copy';
                button_array[i].style.backgroundColor = "var(--cyan)";
              }   

            setLink(prevLink => {
                return [{ longUrl: longUrl, shortUrl: longUrl }, ...prevLink]
            })

            document.getElementById("url").value = "";
        }

    }

    return (
        <div className="shorten_container">
            <div className="links_container">
                <div id="form_shortening">
                    <input onKeyDown={clearError} type="text" name="url" id="url" placeholder="Shorten a link here..." />
                    <em id="form_error"></em>
                    <button onClick={() => addLink(url.value)}>Shorten it!</button>
                </div>

                <ul className="linkList">
                    {
                        link.map((link, index) => (
                            <ShortenItem link={link} key={index} />
                        ))
                    }
                </ul>
            </div>



        </div>
    )
}