import React from 'react';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Melinda Ding',
    role: 'Co-Chair',
    image: '/headshots/Melinda Ding.png',
    linkedin: 'https://www.linkedin.com/in/melinda-ding-b3127219a/',
  },
  {
    name: 'Katherine Sau',
    role: 'Co-Chair',
    image: '/headshots/Katherine Sau.jpg',
    linkedin: 'https://www.linkedin.com/in/katherinesau/',
  },
  {
    name: 'Jocelyn Kwa',
    role: 'Web Developer',
    image: '/headshots/Jocelyn Kwa.JPG',
    linkedin: 'https://www.linkedin.com/in/jocelynkwa/',
  },
  {
    name: 'Sophie Yang',
    role: 'VP Academic',
    image: '/headshots/Sophie Yang.jpg',
    linkedin: 'https://www.linkedin.com/in/sophie-yang-546b32161/',
  },

  {
    name: 'Ben Ni',
    role: 'VP Academic',
    image: '/headshots/Ben Ni.jpg',
    linkedin: 'https://www.linkedin.com/in/-ben-ni/',
  },
  {
    name: 'Vedant Capoor',
    role: 'VP Relations',
    image: '/headshots/Vedant Capoor.jpg',
    linkedin: 'https://www.linkedin.com/in/vedantcapoor/',
  },

  {
    name: 'Denise Lam',
    role: 'VP Finance',
    image: '/headshots/Denise Lam.png',
    linkedin: 'https://www.linkedin.com/in/deniiselam/',
  },

  {
    name: 'Sam Cui',
    role: 'VP Events',
    image: '/headshots/Sam Cui.jpg',
    linkedin: 'https://www.linkedin.com/in/samcuii/',
  },

  {
    name: 'Yeni Oh',
    role: 'VP Events',
    image: '/headshots/Yeni Oh.jpg',
    linkedin: 'https://www.linkedin.com/in/yeni-oh-08314a2a2/',
  },

  {
    name: 'Arthur Yang',
    role: 'VP Marketing',
    image: '/headshots/Arthur Yang.jpg',
    linkedin: 'https://www.linkedin.com/in/arthur-yang-/',
  },

  {
    name: 'Jenny Lan',
    role: 'VP Marketing',
    image: '/headshots/Jenny Lan.jpg',
    linkedin: 'https://www.linkedin.com/in/jenny-lan/',
  },

  {
    name: 'Joyce Yu',
    role: 'VP Internal',
    image: '/headshots/Joyce Yu.jpg',
    linkedin: 'https://www.linkedin.com/in/joyceyusauder/',
  },

  {
    name: 'Clodagh Dressler',
    role: 'Second Year Rep',
    image: '/headshots/Clodagh Dressler.jpg',
    linkedin: 'https://www.linkedin.com/in/clodagh-dressler-16346b29a/',
  },

  {
    name: 'Ethan Chae',
    role: 'First Year Rep',
    image: '/headshots/Ethan Chae.png',
    linkedin: 'https://www.linkedin.com/in/ethan-chae-456b5a327/',
  },

  {
    name: 'Sanjanaa Molaka',
    role: 'First Year Rep',
    image: '/headshots/Sanjanaa Molaka.png',
    linkedin: 'https://www.linkedin.com/in/sanjanaa-m-b13732202/',
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-600">
            Connect with us on Linkedin!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-w-1 aspect-h-1 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <Linkedin className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium">
                  {member.role}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
