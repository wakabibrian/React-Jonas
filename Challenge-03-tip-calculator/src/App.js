export default function App() {
    return (
        <div>
            <Input />
            <TipPercentage />
            <TipPercentage />
            <Output />
            <Button />
        </div>
    );
}

function Input() {
    return (
        <div>
            <span>How much was the bill?</span>
            <input type="text" />
        </div>
    );
}

function TipPercentage() {
    return (
        <div>
            <span>How did you like the service?</span>
            <select>
                <option value="dissatisfied">Dissatisfied (0%)</option>
                <option value="okay">It was Okay (5%)</option>
                <option value="good">It was good (10%)</option>
                <option value="amazing">Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}

function Output() {
    return <h2>You pay $92 ($80 + $12 tip)</h2>;
}

function Button() {
    return <button>Reset</button>;
}
