import React from 'react';
import missionImage from '../../assets/mission.jpg';
import visionImage from '../../assets/vision.jpg';
import teamImage from '../../assets/team.jpg';
import Cover from '../Cover';
import coverImage from '../../assets/img3.jpg';

function AboutUs() {
  return (
    <div>
      <Cover title='Who We Are' backgroundImage={coverImage} />
      <section className="py-8 bg-gray-100">
        <div className='max-w-4xl mx-auto px-4'>
          <h1 className="text-3xl font-bold mb-4 text-center">Our Mission</h1>
          <img src={missionImage} alt="Mission" className="w-full h-auto rounded-lg shadow-md mb-4"/>
          <p className="text-lg text-gray-700">Our mission is to empower the youth through technology and innovation...</p>
        </div>
      </section>
      <section className="py-8 bg-white">
        <div className='max-w-4xl mx-auto px-4'>
          <h1 className="text-3xl font-bold mb-4 text-center">Our Vision</h1>
          <img src={visionImage} alt="Vision" className="w-full h-auto rounded-lg shadow-md mb-4"/>
          <p className="text-lg text-gray-700">Our vision is to create a world where the youth are equipped with the necessary skills...</p>
        </div>
      </section>
      <section className="py-8 bg-gray-100">
        <div className='max-w-4xl mx-auto px-4'>
          <h1 className="text-3xl font-bold mb-4 text-center">Our Team</h1>
          <div className="flex flex-wrap justify-center">
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                <img src={teamImage} alt="John Doe" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                <h2 className="text-xl font-bold mb-2">John Doe</h2>
                <p className="text-gray-700">CEO</p>
              </div>
            </div>
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                <img src={teamImage} alt="Jane Smith" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                <h2 className="text-xl font-bold mb-2">Jane Smith</h2>
                <p className="text-gray-700">CTO</p>
              </div>
            </div>
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                <img src={teamImage} alt="Emily Johnson" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                <h2 className="text-xl font-bold mb-2">Emily Johnson</h2>
                <p className="text-gray-700">COO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;