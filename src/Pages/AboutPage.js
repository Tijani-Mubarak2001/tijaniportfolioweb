import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from './ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage(){
    return(
        <div className="AboutPage">

            <Tittle title={'About Me'} span={'About Me'}/>
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'}/>
            <div className="skillsContainer">
                <SkillsSection skill={'Java'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'C++'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React JS'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Visual Basic'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'HTML&CSS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Django Framework'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Machine Learning'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Andriod App Development'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Python'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Data Science'} progress={'80%'} width={'80%'} />
            </div>
            <Tittle title={'My Services'} span={'My Services'}/>
            <div className="services-container">
                <ServicesSection image={design} title={'Web Design'} 
                text={'I can build very beautiful web applications using Django Framework and React js. Give me a try😊.'}
                />
                <ServicesSection image={intelligence} title={'ML and DS'} 
                text={'I have over a year of experience with Data Science and Machine learning, projects are featured in the porfolios page.'}
                />
                <ServicesSection image={gamedev} title={'Andriod App Dev'} 
                text={'I have in-depth knowledge of using android studio and I can build Android Applications 😊.'}
                />
            </div>
        </div>
    )
}
export default AboutPage;