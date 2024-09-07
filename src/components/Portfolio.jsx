import React from 'react';
import "../styles/portfolio.css";
import IMG1 from "../assets/portfolio1.png";
import IMG2 from "../assets/arthmate.png";
import IMG3 from "../assets/arthmate.png";
import IMG4 from "../assets/arthmate.png";

const data = [
    {
        image: IMG1,
        title: "Food-recipe",
        github: "https://github.com/RajDeora1234",
        demo: "https://rajdeoranitw.github.io/Food-recipe/"
    },

    {
        image: IMG2,
        title: "Los/Lms/Msme/Lap (Origin 1.0)",
        passage:"",
        github: "https://github.com/RajDeora1234",
        demo: "https://www.arthmate.com/"
    },
    {
        image: IMG3,
        title: "Api Stack",
        github: "https://github.com/RajDeora1234",
        demo: "https://www.arthmate.com/"
    },
    {
        image: IMG4,
        title: "Enach Public Portal",
        github: "https://github.com/RajDeora1234",
        demo: "https://www.arthmate.com/"
    },

];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                       
                        <article  className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={data[1].image} alt={data[1].title} />
                            </div>
                            <h3>{data[1].title}</h3>
                            <div className='passage'>
                                <p>Developed the UI for a Loan Against Property module using React.js with Redux Saga as middleware, enhancing
                                user experience for loan applications.</p>
                                <p>Built backend infrastructure with an Express application and MongoDB as the database, implementing JWT tokens
                                for authentication and authorization, and utilized Multer for file uploads.</p>
                                <p>Created a microservice for comprehensive loan checks (including PAN, CIBIL, UDHYAM, URC, GST, Bank
                                    verifications, etc.) using BullMQ for queue management and Redis for cache management.</p>
                                <p>Utilized AWS S3 for uploading and organizing request/response files from third-party APIs, ensuring efficient data
                                storage and retrieval.</p>
                            </div>
                            <div className="portfolio__item-cta">
                                <a href={data[1].github} target='_blank' className='btn'>Github</a>
                                <a href={data[1].demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                            </div>
                        </article>
                        <article  className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={data[2].image} alt={data[2].title} />
                            </div>
                            <h3>{data[2].title}</h3>
                            <div className='passage'>
                                <p>Built the micro-service architecture which is API based solution for MSME Loan Origination & Management
                                System with tech-stack of NodeJs, MongoDB, AWS SQS & SNS.</p>
                            </div>
                            <div className="portfolio__item-cta">
                                <a href={data[2].github} target='_blank' className='btn'>Github</a>
                                <a href={data[2].demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                            </div>
                        </article>
                        <article  className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={data[3].image} alt={data[3].title} />
                            </div>
                            <h3>{data[3].title}</h3>
                            <div className='passage'>
                                <p>Developed a public portal from scratch to enable the mandate for NACH compliances</p>
                                <p>Securing the data of our eNACH users while still verifiable through a public open portal.</p>
                            </div>
                            <div className="portfolio__item-cta">
                                <a href={data[3].github} target='_blank' className='btn'>Github</a>
                                <a href={data[3].demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                            </div>
                        </article>
                        <article  className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={data[0].image} alt={data[0].title} />
                            </div>
                            <h3>{data[0].title}</h3>
                            <div className='passage'>
                                <p>Development of search based food recipe application using HTML, CSS and JavaScript.</p>
                                <p>Recipes are fetched from API</p>
                                <p>Creates a collection of favourite recipes</p>
                            </div>
                            <div className="portfolio__item-cta">
                                <a href={data[0].github} target='_blank' className='btn'>Github</a>
                                <a href={data[0].demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                            </div>
                        </article>

            </div>
        </section>
    )
}

export default Portfolio;