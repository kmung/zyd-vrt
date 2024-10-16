import React from 'react';
import VideoBox from '../VideoBox';
import HeroCoverImg from '../../assets/herocover.png';
import Button from '../Button';

function Home() {
    const scrollToNextSection = () => {
        document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        <div className="relative z-10 bg-gray-900 text-white h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${HeroCoverImg})`}}>
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl font-bold mb-4">Welcome to Zomi YD</h1>
                <h2 className="text-2xl mb-4">Zomi Picing | Siamsin Picing</h2>
                <Button>Donate</Button>
            </div>
            <button onClick={scrollToNextSection} className="absolute bottom-10 animate-bounce text-white focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
        </div>
        <section id="video-section" className='bg-gray-800 py-8'>
            <div className='container mx-auto'>
                <VideoBox src='https://www.youtube.com/embed/PLuHDYufJRM?si=VeGebn5-6uru1Ns5' title='YD Theme Video' />
            </div>
        </section>
        </>
    );
}

export default Home;