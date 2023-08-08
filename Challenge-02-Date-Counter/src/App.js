import { useState } from "react";
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count);

    function handleReset() {
        setStep(1);
        setCount(0);
    }

    return (
        <>
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                />
                <span>{step}</span>

                {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
                <span>Step: {step}</span>
                <button onClick={() => setStep((s) => s + 1)}>+</button> */}
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <input
                    type="text"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
                <button onClick={() => setCount((c) => c + step)}>+</button>

                {/* <button onClick={() => setCount((c) => c - step)}>-</button>
                <span>Count: {count}</span>
                <button onClick={() => setCount((c) => c + step)}>+</button> */}
            </div>
            <p>
                <span>
                    {count === 0
                        ? "Today is "
                        : count > 0
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </p>

            {step !== 1 || count !== 0 ? (
                <button onClick={handleReset}>Reset</button>
            ) : null}
        </>
    );
}
