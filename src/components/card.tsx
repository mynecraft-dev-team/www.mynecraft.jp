import React from "react";

export default function Card({ title = "hoge", description = ""}) {
    return (
        <div className="in-card">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
};