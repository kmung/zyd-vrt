import React from "react";
import Cover from "../Cover";
import coverImage from '../../assets/img3.jpg';
import volunteerImage from '../../assets/volunteers.jpg';
import officeImage from '../../assets/office.jpg';

function WhatWeDo() {
    const programs = [
        { name: 'Youth Leadership Program', description: 'Empowering young leaders through training and mentorship.', image: volunteerImage },
        { name: 'Community Outreach', description: 'Engaging with the community to provide support and resources.', image: volunteerImage },
        { name: 'Educational Workshops', description: 'Offering workshops on various educational topics.', image: volunteerImage },
        { name: 'Health and Wellness', description: 'Promoting health and wellness through various initiatives.', image: volunteerImage },
    ];

    const departments = [
        { name: 'Education Department', description: 'Focuses on educational programs and initiatives.', image: officeImage },
        { name: 'Health Department', description: 'Promotes health and wellness in the community.', image: officeImage },
        { name: 'Community Engagement', description: 'Works to engage and support the community.', image: officeImage },
        { name: 'Leadership Development', description: 'Develops leadership skills in youth.', image: officeImage },
    ];

    return (
        <div className="what-we-do">
            <Cover title="What We Do" backgroundImage={coverImage}/>
            <section className="programs py-8 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">Our Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <div key={index}>
                                <img src={program.image} alt={program.name} className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <h3 className="text-2xl font-semibold mb-2">{program.name}</h3>
                                <p className="text-gray-700">{program.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="departments py-8 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">Our Departments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {departments.map((department, index) => (
                            <div key={index}>
                                <img src={department.image} alt={department.name} className="w-full h-48 object-cover rounded-lg mb-4"/>
                                <h3 className="text-2xl font-semibold mb-2">{department.name}</h3>
                                <p className="text-gray-700">{department.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WhatWeDo;