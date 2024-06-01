import { useState } from "react";
import "./about.css";

function About() {
    const [isVisible, setIsVisible] = useState(false);

    function displayInfo() {
        setIsVisible(!isVisible);
    }

    function getInfo() {
        if (!isVisible) return "";

        return (
            <div className="info">
                <p>My email: <b>sinzunza@sdgku.edu</b> </p>
                <p>My phone: <b>(951) 123 4567</b> </p>
            </div>
        );
    }

    return (
        <div className="about">
            <h3>About the developer:</h3>
            <h1>Sergio Inzunza</h1>

            {getInfo()}

            <button onClick={displayInfo} className="btn btn-dark">See my info</button>
        </div>
    );
}

export default About;