import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faBrain, faChartLine } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "XGBoost",
    "LightGBM",
    "Matplotlib",
    "Seaborn",
];

const labelsSecond = [
    "SQL",
    "PostgreSQL",
    "JupyterLab",
    "Oracle",
    "Dataiku",
    "Excel",
    "Tableau",
];

const labelsThird = [
    "AWS",
    "OpenAI",
    "LangChain",
    "Hugging Face",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & Machine Learning</h3>
                    <p>I specialize in developing, training, and deploying end-to-end AI and ML models using frameworks such as TensorFlow, PyTorch, and Scikit-learn. My work spans classical ML, deep learning, and applied NLP. From data preprocessing to model optimization and evaluation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Data Science & Analytics</h3>
                    <p>With a strong foundation in statistical modeling and data-driven problem solving, I’ve built pipelines for forecasting, segmentation, and recommendation systems. I combine analytics and engineering to turn raw data into actionable insights.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>I build and integrate GenAI systems using LLMs to enhance automation and decision-making. My projects include fine-tuning and deploying custom models, developing RAG pipelines, and enabling multimodal interaction through APIs and front-end tools.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;