import React from 'react';
import "../styles/about.css";
import ME from "../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Arthmate from "../assets/arthmate.png";


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>   

            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            {/* <FaAward className='about__icon' /> */}
                            <img src={Arthmate} alt="company-image" />
                            <h5>Experience</h5>
                            <small>6+ months Working</small>
                        </article>
                    </div>

                    <p>I am a dynamic and highly motivated postgraduate from Indian Institute of Technology (IIT), Guwahati, with a relentless passion for software development. My academic journey at IIT Guwahati has not only provided me with a strong foundation in software development but has also instilled in me a commitment to excellence, innovation, and a thirst for solving complex problems through cutting-edge technology.</p>
                    <p>During my time at IIT Guwahati, I had the privilege of working on a variety of challenging projects that have equipped me with a diverse skill set. These projects, both individual and team-based, have honed my proficiency in c++, data structures and algorithms, web development, and have given me valuable hands-on experience in developing robust software solutions.</p>
                    <p>I am excited about the opportunity to bring my skills and passion for software development to your team. I am ready to tackle new challenges, contribute to the success of your projects, and work collaboratively to create innovative software solutions that will drive your organization forward.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>   
                </div>

            </div>
        </section>
    )
}

export default About;
