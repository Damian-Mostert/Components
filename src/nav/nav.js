"use client";

import { useState } from "react";
import { Button} from "components";
import { Popup } from "@components";

export default function Nav({ indexes = [], tabs = [], tab = "", variant = "default", warnOnExit, setWarnOnExit, orientation = "top", buttons = null, buttonClass = "" }) {

    const [TabIndex, setIndex] = useState(indexes.indexOf(tab));

    const vertical_horizontal = orientation == "top" || orientation == "bottom" ? "vertical" : "horizontal";

    return <>
        <div className={`${"nav-orientation-" + orientation} ${"nav-variant-" + variant}`}>
            <div className={`nav-index-container-${vertical_horizontal}`}>
                {indexes.map((label, index) => {
                    if (buttons) {
                        return <Button variant={buttons} key={index} onClick={async () => {
                            if (warnOnExit) {
                                let result = await Popup.fire(warnOnExit);
                                if (result.confirmed) {
                                    setIndex(index);
                                    setWarnOnExit(false);
                                }
                            } else {
                                setIndex(index);
                            }
                        }}
                            className={`${buttonClass} nav-index-${vertical_horizontal} ${TabIndex == index ? "nav-index-" + vertical_horizontal + "-active" : ""} `}
                            label={label}
                        />

                    }
                    return <div key={index} onClick={async () => {
                        if (warnOnExit) {
                            let result = await Popup.fire(warnOnExit);
                            if (result.confirmed) {
                                setIndex(index);
                                setWarnOnExit(false);
                            }
                        } else {
                            setIndex(index);
                        }
                    }} className={`nav-index-${vertical_horizontal} ${TabIndex == index ? "nav-index-" + vertical_horizontal + "-active" : ""} `}>
                        {label}
                    </div>
                })}
            </div>
            <div className={`nav-tab-${vertical_horizontal}`}>
                <div className={`nav-tab-container-${vertical_horizontal}`}>
                    {tabs[TabIndex]}
                </div>
            </div>
        </div>
    </>
}
