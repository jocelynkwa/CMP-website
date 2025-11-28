import { useState } from 'react';
import { Heart, BookOpen, Users, Trophy, X } from 'lucide-react';

export default function AboutUs() {
  const [showBanner, setShowBanner] = useState(true);

  const stats = [
    { label: 'Students Mentored', value: '500+' },
    { label: 'Review Packages', value: '100+' },
    { label: 'Execs', value: '15' },
    { label: 'Years Active', value: '5' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Lumeno AI Banner */}
      {showBanner && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100 py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-center relative">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="Lumeno AI Logo"
                className="h-9 w-10"
              />
              <span className="text-gray-800 font-medium">
                Introducing <span className="font-semibold text-lumenoblue italic">Lumeno AI</span>: Your AI Personal Tutor
              </span>
            </div>
            <div className="flex items-center space-x-3 ml-6">
              <a
                href="https://www.lumenoai.com/?utm_source=UBC_CMP&utm_medium=redirect&utm_campaign=spring_launch&utm_content=bio_link"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black text-gray-800 bg-white hover:bg-gray-50 font-semibold py-1 px-4 rounded-lg transition-colors duration-200 inline-block"
              >
                Get Started
              </a>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-0 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://www.sauder.ubc.ca/sites/default/files/dynamic_styles/scale/750/public/2019-05/about-ubc-sauder-hero.png")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Commerce Mentorship Program
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl">
                Empowering business students through peer mentorship and comprehensive academic support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-xl grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-orange-500">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              The Commerce Mentorship Program is the #1 resource for Sauder academic success. We are dedicated to fostering academic excellence and professional growth among business students, through free midterm and final review sessions and resources, and internship and networking professional events. 
            </p>
            <div className="space-y-4">
              {[
                { icon: Heart, text: 'Free support for all commerce students' },
                { icon: BookOpen, text: 'Midterm and final review sessions and study materials' },
                { icon: Users, text: 'Peer-to-peer mentorship opportunities' },
                { icon: Trophy, text: 'Proven track record of student success' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Our Partners Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Partners</h2>
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src="/images/LumenoAI.svg"
                    alt="Lumeno AI Logo"
                    className="h-20 w-60"
                  />
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Lumeno AI, we believe that university is the most formative time in our lives. We aim to maximize the university experience.
                </p>
                <div className="mb-6">
                  <p className="text-gray-700 mb-6">
                    Our all-in-one platform minimizes students' time studying and enables them to make more friends and find their purpose.
                  </p>
                  <p className="text-gray-700">
                    Lumeno AI is <strong>FREE</strong> for all UBC students.
                  </p>
                </div>
                <a
                  href="https://www.lumenoai.com/?utm_source=UBC_CMP&utm_medium=redirect&utm_campaign=spring_launch&utm_content=bio_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-orange-500 text-gray-800 bg-white hover:bg-orange-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-orange-500 mb-3">
                Review Sessions
              </h3>
              <p className="text-gray-600">
                Final and midterm group sessions covering key course concepts, practice problems, and exam preparation strategies.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-orange-500 mb-3">
                Study Resources
              </h3>
              <p className="text-gray-600">
                Access to comprehensive study guides, practice exams, and course-specific materials.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-orange-500 mb-3">
                Mentorship
              </h3>
              <p className="text-gray-600">
                Connect with experienced upper-year students and industry professionals for academic guidance and career advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
