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

    return (
        <>
            <div>
                <button onClick={() => setStep((s) => s - 1)}>-</button>
                <span>Step: {step}</span>
                <button onClick={() => setStep((s) => s + 1)}>+</button>
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <span>Count: {count}</span>
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
        </>
    );
}
