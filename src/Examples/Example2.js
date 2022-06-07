import { useState } from "react";
import Example3 from "./Example3";

export default function Example2() {
    const [number, setNumber] = useState(0);

    function onIncrement() {
        setNumber(number + 1);
    }

    return (
        <div className="Example2">

            <Example3 number={number} onIncrement={onIncrement} />

        </div>
    )
}