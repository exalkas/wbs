import { useState } from "react";

export default function useField(type, placeholder, reset) {

    const [value, setValue] = useState('')

    const onChange = e => setValue(e.target.value);

    return {
        type,
        reset,
        value,
        // onChange,
        onChange: e => setValue(e.target.value),
        placeholder
    }
}