import React from 'react';
import missionImage from '../assets/mission.jpg';
import visionImage from '../assets/vision.jpg';
import teamImage from '../assets/team.jpg';
import Cover from '../components/Cover';
import coverImage from '../assets/img3.jpg';
import AvatarCards from '../components/AvatarCards';

import marySiamIMG from '../assets/leaders/marySiam.jpg';
import dalIMG from '../assets/leaders/dal.jpg';
import siamNuIMG from '../assets/leaders/siamNu.jpg';
import thomasMungIMG from '../assets/leaders/thomasMung.jpg';

function AboutUs() {

  const missionPoints = [
    'Raise up generations of Zomi youths who will have a passion to meaningfully contribute their time and skills to increase the social, economic, and political development of the Zomi people.',
    'Raise up leaders who understand and abide by the rule of law.',
  ];

  const additionalPoints = [
    'For students to have knowledge and skills that complement their age and studies.',
    'Cultivate a heart of life-long learning.',
  ];

  const officeOfDirector = [
    { name: 'Mary Siam', role: 'Director', image: marySiamIMG }
  ]

  const assistantDirectors = [
    { name: 'Dal', role: 'Assistant Director', image: dalIMG },
    { name: 'Siam Nu', role: 'Assistant Director', image: siamNuIMG },
    { name: 'Thomas Mung', role: 'Assistant Director', image: thomasMungIMG },
  ];

  const managementTeam = [
    { name: 'Khai Boih', role: 'Education Department', image: teamImage },
    { name: 'Thomas Mung', role: 'Training Department', image: teamImage },
    { name: 'Juni Sawsawm', role: 'Research Department', image: teamImage },
    { name: 'Mung No', role: 'Zomi Language & Literature', image: teamImage },
    { name: 'Tung Pi', role: 'Creative Department', image: teamImage }
  ];

  const committees = [
    { name: 'Niang Hoih', role: 'Finance', image: teamImage },
    { name: 'Dal Thang', role: 'Human Resources', image: teamImage },
  ];

  return (
    <div>
      <Cover title='Who We Are' backgroundImage={coverImage} />
      <section className="py-8 bg-white">
        <div className='max-w-4xl mx-auto px-4'>
          <h1 className="text-3xl font-bold mb-4 text-center">About Us Overview</h1>
          <h2 className="text-xl font-semibold mb-4 text-center">We are change agents</h2>
          <p className="text-lg text-gray-700 mb-4">Zomi Youth Development is part of a non-profit youth organization that aims to support and uplift the Zomi youths around the world. We are a collective of students, scholars, and activists with a shared interest in positively influencing the many Zomi communities scattered across the globe.</p>
          <p className="text-lg text-gray-700 mb-4">Our work focuses on the holistic development of Zomi youths scattered across the globe due to the Zomi Diaspora. We exist to empower each other and to be the vehicle that drives the positive development of Zomi communities.</p>
        </div>
      </section>
      <section className="my-6 py-8 bg-yellow-secondary text-white">
        <div className='max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
            <p className="text-lg font-semibold text-gray-700 mb-4">To educate Zomi youths in basic education respective to their age, and encourage them to acquire extra curricular involvements in the Zomi communities.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-l underline font-semibold mb-2">Zomi Picing</p>
                <ul className="list-disc list-inside space-y-2">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="text-lg text-gray-700">{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-l underline font-semibold mb-2">Siamsin Picing</p>
                <ul className="list-disc list-inside space-y-2">
                  {additionalPoints.map((point, index) => (
                    <li key={index} className="text-lg text-gray-700">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img src={missionImage} alt="Mission" className="w-full h-auto rounded-lg shadow-md"/>
          </div>
        </div>
      </section>
      <section className="my-6 py-8 bg-yellow-primary text-white">
        <div className='max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <img src={visionImage} alt="Vision" className="w-full h-auto rounded-lg shadow-md"/>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">Our Vision</h1>
            <p className="text-lg font-semibold text-gray-700 mb-4">To uplift the Human Development Index of the Zomi people, as well as preserve and enhance the literature, language and its culture.​</p>
            <p className="text-lg text-gray-700 mb-4">We envision a future where the Zomi people are able to recognize and exercise their right to self-determination. We believe that in order to achieve our vision it starts with our youths.​</p>
          </div>
        </div>
      </section>
      <section className="py-8 bg-gray-100">
        <div className='max-w-4xl mx-auto px-4'>
          <h1 className="text-3xl font-bold mb-4 text-center">Our Leadership Team</h1>
          <p className="text-lg text-gray-700 mb-4">YD’s Leadership Team is comprised of the Office of the Director, a Management Team, and a Committee Chair. We also have an auxiliary branch which acts to provide additional support as needed. Together, our Leadership Team support and empower all members of YD to succeed in their activities.​</p>
          <AvatarCards title="Office of the Director" team={officeOfDirector} />
          <AvatarCards team={assistantDirectors} />
          <AvatarCards title="Management Team" team={managementTeam} />
          <AvatarCards title="Committees" team={committees} />
        </div>
      </section>
    </div>
  );
}

export default AboutUs;