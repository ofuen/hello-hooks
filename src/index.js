import React, { useState } from "react";
import ReactDOM from "react-dom";



function JustAnotherCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>Count Up To The Moon</button>
        </div>
    );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<JustAnotherCounter />, rootElement);