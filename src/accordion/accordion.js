"use client";

import { useState } from "react";

export default function Accordion({ indexes = [], tabs = [], tab = "", variant = "default", inDepthStyles = [] }) {

    const [TabIndex, setIndex] = useState(indexes.indexOf(tab));

    return <>

        <div className={`w-full h-full flex flex-col ${"accordion-" + variant}`}>
            {indexes.map((label, index) => {
                return <div key={index} className={`flex flex-col ${TabIndex == index ? "h-full tab" : ""}`}>
                    <div className={`w-full button ${TabIndex == index ? "button-active" : ""}`} onClick={() => setIndex(index)} style={inDepthStyles[index]}>
                        {label}
                    </div>
                    {
                        TabIndex == index && <div className="w-full h-full overflow-auto p-4" >
                            {tabs[TabIndex]}
                        </div>
                    }
                </div>
            })}
        </div >

    </>
}