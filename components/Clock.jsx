"use client";
import React from "react";
import Image from "next/image";

export function Clock() {
    const [hour, setHour] = React.useState(0);
    const [minute, setMinute] = React.useState(0);

    const updateClock = () => {
        const now = new Date();
        const h = now.getHours();
        const m = now.getMinutes();
        setHour(h);
        setMinute(m);
    };

    React.useEffect(() => {
        updateClock();
        const interval = setInterval(() => {
            updateClock();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="clock">
            {[...Array(12).keys()].map((i) => (
                <div
                    key={i}
                    className="clock__line"
                    style={{ transform: `rotate(${i * 30}deg)` }}
                />
            ))}
            <div
                className="clock__handle hour"
                style={{ transform: `rotate(${hour * 30}deg)` }}
            ></div>
            <div
                className="clock__handle minute"
                style={{ transform: `rotate(${minute * 6}deg)` }}
            ></div>
        </div>
    );
}
