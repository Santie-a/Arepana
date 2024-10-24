import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const sections = [
        {
            title: "Quiénes Somos",
            content: "Arepana es un espacio de coworking especializado para personas entre 25 y 35 años, que ofrece una experiencia innovadora y flexible en Bogotá. Estamos ubicados en una zona estratégica, donde convergen varias empresas, y ofrecemos acceso a nuestros espacios no solo en la sede principal, sino también en cafeterías y otros socios estratégicos como Tostao, Juan Valdez, Starbucks, y Oma, permitiendo a nuestros usuarios trabajar en espacios personalizados sin necesidad de trasladarse hasta nuestras instalaciones."
        },
        {
            title: "Misión",
            content: "Nuestra misión es revolucionar la forma en que los jóvenes profesionales trabajan y se conectan, ofreciendo espacios colaborativos, cómodos y de alta calidad, combinados con una experiencia flexible en alianza con marcas líderes en el sector cafetero. Creemos en la importancia de brindar un ambiente dinámico que fomente la creatividad, la productividad y el networking."
        },
        {
            title: "Visión",
            content: "Nuestra visión es convertirnos en la red de coworking más innovadora y accesible de Bogotá, y a futuro expandirnos a otras ciudades, permitiendo que nuestros usuarios disfruten de una experiencia de trabajo personalizada en múltiples ubicaciones, adaptándose a sus estilos de vida y necesidades profesionales."
        },
        {
            title: "Historia",
            content: "Arepana nace de la necesidad de ofrecer un espacio de trabajo único, dinámico y accesible para los jóvenes profesionales de Bogotá. Fundada en un entorno de rápido crecimiento empresarial, Arepana vio la oportunidad de integrar el trabajo y el networking en lugares donde la gente ya pasa su tiempo libre: las cafeterías. A través de alianzas estratégicas con cadenas reconocidas como Tostao, Juan Valdez, Starbucks y Oma, hemos logrado ofrecer una experiencia de coworking flexible y distinta, permitiendo a nuestros usuarios trabajar cómodamente en distintos lugares sin perder conectividad ni productividad."
        }
    ];

    return (
        <div className="about-us-container">
            {sections.map((section, index) => (
                <div key={index} className="section">
                    <button className="section-title" onClick={() => toggleSection(index)}>
                        {section.title}
                    </button>
                    {openSection === index && (
                        <div className="section-content">
                            <p>{section.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AboutUs;
