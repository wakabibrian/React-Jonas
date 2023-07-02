import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA",
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D",
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF",
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33",
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB",
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00",
    },
];

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
            {skills.map((skill) => (
                <Skill
                    skill={skill.skill}
                    level={skill.level}
                    color={skill.color}
                />
            ))}
        </div>
    );
}

function Skill({ skill, level, color }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>
                {level === "beginner" && "👶"}
                {level === "intermediate" && "👍"}
                {level === "advanced" && "💪"}
            </span>
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
