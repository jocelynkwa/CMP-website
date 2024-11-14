import React from 'react';
import { Heart, BookOpen, Users, Trophy } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { label: 'Students Mentored', value: '500+' },
    { label: 'Review Packages', value: '100+' },
    { label: 'Execs', value: '15' },
    { label: 'Years Active', value: '5' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
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
                { icon: BookOpen, text: 'Midtemr and final review sessions and study materials' },
                { icon: Users, text: 'Peer-to-peer mentorship opportunities' },
                { icon: Trophy, text: 'Proven track record of student success' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
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