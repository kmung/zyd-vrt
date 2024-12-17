import React from 'react';
import VideoBox from '../components/VideoBox';
import HeroCoverImg from '../assets/herocover.png';
import AboutUsImg from '../assets/img4.png';
import ProgramImg from '../assets/volunteers.jpg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import AnimateCounters from '../components/AnimateCounters';

function Home() {
    const counters = [
        { end: 100, text: 'YD Workforce' },
        { end: 3, text: 'Countries Respresented' },
        { end: 40, text: 'Outside Volunteers' }
    ];

    const scrollToNextSection = () => {
        document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' });
    };

    const programs = [
        { name: 'Youth Leadership Program', description: 'Empowering young leaders through training and mentorship.', image: ProgramImg },
        { name: 'Community Outreach', description: 'Engaging with the community to provide support and resources.', image: ProgramImg },
        { name: 'Educational Workshops', description: 'Offering workshops on various educational topics.', image: ProgramImg },
    ];

    return (
        <>
        <div className="relative z-10 text-white h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${HeroCoverImg})`}}>
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl font-bold mb-4">Welcome to Zomi YD</h1>
                <h2 className="text-2xl mb-4">Zomi Picing | Siamsin Picing</h2>
            </div>
            <button onClick={scrollToNextSection} className="absolute bottom-10 animate-bounce shadow-lg text-white focus:outline-none bg-blue-secondary rounded-full p-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
        </div>
        <section id="video-section" className='py-8'>
            <div className='container mx-auto bg-yellow-secondary'>
                <VideoBox src='https://www.youtube.com/embed/PLuHDYufJRM?si=VeGebn5-6uru1Ns5' title='YD Theme Song' />
            </div>
        </section>
        <AnimateCounters counters={counters} />
        <section className="bg-blue-secondary text-white py-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
                <div>
                    <img src={AboutUsImg} alt="About Us" className="w-full h-auto rounded-lg shadow-md"/>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p className="text-lg font-semibold text-gray-700 mb-4">Zomi Youth Development is part of a non-profit youth organization that aims to support and uplift the Zomi youths around the world.</p>
                    <p className="text-lg text-gray-700 mb-4">Our slogan is “Zomi Picing, Siamsin Picing!” Perfectly capturing the shared vision that our member body has.</p>
                    <Link to="/about-us">
                        <Button className='bg-sky-500'>Learn More About YD</Button>
                    </Link>
                </div>
            </div>
        </section>
        <section className="bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">What We Do</h2>
                        <h3 className="text-xl font-semibold mb-4">Our Programs</h3>
                    </div>
                    <div>
                        <p className="text-lg text-gray-700 mb-4">Our programs and initiatives are designed to empower the youth through education, community engagement, and leadership development. We believe in the power of technology and innovation to transform lives and communities.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                            <img src={program.image} alt={program.name} className="w-full h-48 object-cover rounded-lg mb-4"/>
                            <h3 className="text-2xl font-semibold mb-2">{program.name}</h3>
                            <p className="text-gray-700">{program.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}

export default Home;