import React from "react";

export default function header() {
    let isOpen = false;

    function handleOpen(): void {
        isOpen = !isOpen;
    }

    return (
        <>
            <header className="bg-black text-white ">
                <button
                    className="p-1"
                >
                    ≡
                </button>
                <span className="text-2xl mx-auto">Mynecraft</span>
            </header>
            <nav className="invisible">
                <ul>
                    <li><a href="https://www.mynecraft.jp/">Home</a></li>
                    <li><a href="https://www.mynecraft.jp/announce">Announce</a></li>
                </ul>
            </nav>
        </>
    )
}