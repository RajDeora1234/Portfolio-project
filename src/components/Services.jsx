import React from 'react';
import "../styles/services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
    return (
        <section id='services'>

            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">

                <article className='service'>
                    <div className='service__head'>
                        <h3>Front-End Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <div className='list-item'>
                           <div> <BiCheck className='service__list-icon' />
                           <p>Responsive UI/UX Design:</p></div>
                           <span>Crafting intuitive and mobile-friendly user interfaces using HTML5, CSS3, and modern JavaScript frameworks like React.js</span>
                            </div>
                             
                        </li>
                        <li>
                            <div className='list-item'>
                                <div><BiCheck className='service__list-icon' />
                            <p>Cross-Browser Compatibility:</p>
                            </div>
                            <span>Ensuring consistent design and functionality across all browsers and devices.</span>
                            </div>
                        </li>
                        <li>
                         <div className='list-item'>
                            <div>   <BiCheck className='service__list-icon' />
                            <p>State Management:</p>
                            </div>
                            <span>Efficient handling of data flow in large applications using tools like Redux</span>
                         </div>
                        </li>
                        <li>
                           <div className='list-item'>

                            <div> <BiCheck className='service__list-icon' />
                            <p>Component-Based Development:</p>
                            </div>
                            <span>Developing reusable and modular components for scalable front-end architecture.
                            </span>
                           </div>
                        </li>
                    </ul>
                </article>

                {/* end of UI/UX */}
                <article className='service'>
                    <div className='service__head'>
                        <h3>Back-End Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li >
                            <div className='list-item'>
                                <div>  <BiCheck className='service__list-icon' />
                                <p>API Development:</p></div>
                                <span>Building robust and secure RESTful APIs with Node.js, Express, or other backend frameworks to handle business logic and data processing.</span>
                            </div>
                          
                           
                        </li>
                        <li>
                            <div className='list-item'>
                                <div><BiCheck className='service__list-icon' />
                            <p>Database Management:</p>
                            </div>
                            <span>Expertise in working with both SQL (MySQL, PostgreSQL) and NoSQL databases (MongoDB), ensuring optimized queries and data integrity.</span>
                            </div>
                        </li>
                        <li>
                            <div className='list-item'>
                                <div><BiCheck className='service__list-icon' />
                            <p>Authentication & Security:</p>
                            </div>
                            <span>Implementing secure user authentication systems (OAuth, JWT) and safeguarding data through encryption and secure coding practices.</span>
                            </div>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>Other</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <div className='list-item'>
                                <div><BiCheck className='service__list-icon' />
                            <p>Agile Development:</p>
                            </div>
                            <span>Following agile methodologies for iterative development, including regular sprint planning, code reviews, and daily stand-ups.</span>
                            </div>
                        </li>
                        <li>
                          <div className='list-item'>
                            <div>  <BiCheck className='service__list-icon' />
                            <p>Testing & Debugging:</p>
                            </div>
                            <span>Writing unit, integration, and end-to-end tests using Jest, Mocha, or Cypress to ensure high code quality and minimize bugs.</span>
                          </div>
                        </li>
                        <li>
                           <div className='list-item'>
                            <div> <BiCheck className='service__list-icon' />
                            <p>Problem Solving:</p>
                            </div>
                            <span>Ability to troubleshoot and debug complex systems, optimizing code for performance and scalability.</span>
                           </div>
                        </li>
                    </ul>
                </article>

            </div>

        </section>
    )
}

export default Services