import React, { useState } from "react";

const Home = () => {
    const [light, setLight] = useState("red");

    const changeLight = () => {
        setLight((lightChange) => {
            if (lightChange === "red") return "yellow";
            if (lightChange === "yellow") return "green";
            return "red";
        });
    };

    return (
        <div className="post">
            <div className="traffic rounded-5">
                <div className={`circle red ${light === "red" ? "highlight" : ""}`}></div>
                <div className={`circle yellow ${light === "yellow" ? "highlight" : ""}`}></div>
                <div className={`circle green ${light === "green" ? "highlight" : ""}`}></div>
            </div>
            <button className="btn btn-success boton" onClick={changeLight}>Change Light</button>
        </div>
    );
};

export default Home;
