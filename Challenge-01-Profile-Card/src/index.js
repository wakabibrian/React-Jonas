import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>
        </div>
    );
}

function Avatar() {
    return <img className="avatar" src="img/avatar.jpg" alt="Wakabi Brian" />;
}

function Intro() {
    return (
        <div>
            <h1>Wakabi Brian</h1>
            <p>
                Full-stack web developer and teacher at Udemy. When not coding
                or preparing a course, I like to play board games, to cook (and
                eat), or to just enjoy the Portuguese sun at the beach.
            </p>
        </div>
    );
}

function SkillList() {
    return (
        <ul className="skill-list">
            <li>
                <Skill skill="HTML+CSS" emoji="💪" color="blue" />
            </li>
            <li>
                <Skill skill="JavaScript" emoji="💪" color="orangered" />
            </li>
            <li>
                <Skill skill="Web Design" emoji="💪" color="pink" />
            </li>
            <li>
                <Skill skill="Git and GitHub" emoji="👍" color="orangered" />
            </li>
            <li>
                <Skill skill="React" emoji="💪" color="yellow" />
            </li>
            <li>
                <Skill skill="Swelte" emoji="👶" color="orange" />
            </li>
        </ul>
    );
}

function Skill(props) {
    return (
        <div className="skill" style={{ backgroundColor: props.color }}>
            <span>{props.skill}</span>
            <span>{props.emoji}</span>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
