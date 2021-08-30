import React from 'react';
import about from '../img/profile picture.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>My name is<span> Tijani Mubarak Adewale</span></h4>
                <p className="about-text">
                    I am currently a computer science student at Babcock University (200 level). I began my journey
                    as a computer scientist at a computer institute called the Agacom-infotech concept where i enrolled
                    for a diploma course in computer science, there, I learnt my first programming language, Python.
                    I started to have interest in Data Science and Machine learning in my first year, the power of being able to analyse and predict was overwhelming for me, and since then, i have been working on
                    series of projects to get myself grounded in the field. I love to make websites with django framework and react js because they bring out the creativity in me, unlike DS that is more of analysis and complex algorithm. I concentrate more on DS and ML but during my spare time, I build Android Applications too.
                    I love to work to people of like minds, so that i can learn from them, as it also boost my morale to work harder.
                    I can conviniently code in: JAVA, PYTHON, C++, VISUAL BASIC, C, HTML and CSS, and REACT JS. My passion for DS, ML, and softwares is what drives me to do more in the field, and I'll sure make a positive impact to the world very soon.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name:</p>
                        <p>Age:</p>
                        <p>Nationality:</p>
                        <p>Languages:</p>
                        <p>Marital Status:</p>
                        <p>Occupation:</p>
                    </div>
                    <div className="right-section">
                        <p>Tijani Mubarak Adewale</p>
                        <p>19</p>
                        <p>Nigerian</p>
                        <p>English, Yoruba, French</p>
                        <p> Single</p>
                        <p>Student</p>
                    </div>

                </div>
                <a href="Resume.pdf" download>
                    <button className="btn">Download CV</button>
                </a>
            </div>


        </div>

    )

}

export default ImageSection;