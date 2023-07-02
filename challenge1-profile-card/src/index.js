import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
    return (
        <div className="card">
            <Avatar photoName="brian.jpg" name="Wakabi Brian" />
            <div className="data">
                <Intro
                    name="Wakabi Brian"
                    profile="Passionate about coding. Full-stack web developer, Computer
                science scholar at Makerere University. A father. A UX/UI
                Designer. Currently a social media manager and Graphics Design.
                Video editor. Previously an introvert but friendly. I believe in
                bigger goals for me as a person and for my family."
                />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>
        </div>
    );
}

function Avatar(props) {
    return <img className="avatar" src={props.photoName} alt={props.name} />;
}

function Intro(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.profile}</p>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
            <Skill skill="JavaScript" emoji="💪" color="yellow" />
            <Skill skill="Web Design" emoji="💪" color="violet" />
            <Skill skill="Git + Github" emoji="👍" color="pink" />
            <Skill skill="React" emoji="💪" color="lightgreen" />
            <Skill skill="Python" emoji="💪" color="orangered" />
            <Skill skill="Django" emoji="👶" color="orange" />
        </div>
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
