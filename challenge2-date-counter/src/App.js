import { useState } from "react";
import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const date = new Date("June 21 2027");

    date.setDate(date.getDate() + count);

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    return (
        <>
            <div>
                <input
                    type="range"
                    value={step}
                    min={0}
                    max={10}
                    onChange={(e) => setStep(Number(e.target.value))}
                />
                <span>Step: {step}</span>
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <input
                    type="text"
                    placeholder="0"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
                <button onClick={() => setCount((c) => c + step)}>+</button>
            </div>
            <p>
                {count >= 1 &&
                    `${count} days from today is ${date.toDateString()}`}
            </p>
            <p>{count === 0 && `Today is ${date.toDateString()}`}</p>
            <p>
                {count < 0 &&
                    `${Math.abs(count)} days ago was ${date.toDateString()}`}
            </p>

            {count !== 0 || step !== 1 ? (
                <div>
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : null}
        </>
    );
}
