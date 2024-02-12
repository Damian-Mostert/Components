"use client";

//v2 input component

import { useRef, useImperativeHandle, forwardRef, useState, Component } from "react";

import { v4 as uuid } from "uuid";

function Input({ variant, defaultValue, label, type = "text", placeholder, className, errorMessage, require, id }) {
    const ref = useRef();
    //value
    const [value, setValue] = useState(defaultValue ? defaultValue : "");
    const [error, setError] = useState(null);

    //validation
    const validate = () => {
        let valid = false;
        switch (type) {
            case "text":
                valid = /^[a-zA-Z ]+$/.test(val);
            case "textarea":
                valid = val.trim().length > 0;
            case "email":
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
            case "phone":
                valid = /^\d{10}$/.test(val);
        }
        if (valid)
            return true
        else if (require) {
            setError(errorMessage);
            return true;
        }
    };
    //ref
    useImperativeHandle(ref, () => ({
        validate,
        value,
        setValue,
        clear: () => {
            setValue("")
        }
    }));

    return <div className={`input input-variant-${variant} ${className}`}>
        {label && <label>{label}</label>}
        {type != "textarea" ?
            <input ref={ref} id={id} onChange={(ev) => setValue(ev.target.value)} placeholder={placeholder} type={type != "email" ? type : type} value={value} /> :
            <textarea ref={ref} id={id} onChange={(ev) => setValue(ev.target.value)} placeholder={placeholder} value={value} />}
        {error && errorMessage && <div className="error-label">
            {errorMessage}
        </div>}
    </div>
    //returns
}

export default forwardRef(Input);
