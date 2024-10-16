import React from "react";
import Cover from "../Cover";
import coverImage from '../../assets/img3.jpg';

function WhatWeDo() {
    const programs = [
        { name: 'Youth Leadership Program', description: 'Empowering young leaders through training and mentorship.' },
        { name: 'Community Outreach', description: 'Engaging with the community to provide support and resources.' },
        { name: 'Educational Workshops', description: 'Offering workshops on various educational topics.' },
        { name: 'Health and Wellness', description: 'Promoting health and wellness through various initiatives.' },
    ];

    const departments = [
        { name: 'Education Department', description: 'Focuses on educational programs and initiatives.' },
        { name: 'Health Department', description: 'Promotes health and wellness in the community.' },
        { name: 'Community Engagement', description: 'Works to engage and support the community.' },
        { name: 'Leadership Development', description: 'Develops leadership skills in youth.' },
    ];

    return (
        <div className="what-we-do">
            <Cover title="What We Do" backgroundImage={coverImage}/>
            <section className="programs">
                <h2>Our Programs</h2>
                <ul>
                    {programs.map((program, index) => (
                        <li key={index}>
                            <h3>{program.name}</h3>
                            <p>{program.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="departments">
                <h2>Our Departments</h2>
                <ul>
                    {departments.map((department, index) => (
                        <li key={index}>
                            <h3>{department.name}</h3>
                            <p>{department.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default WhatWeDo;