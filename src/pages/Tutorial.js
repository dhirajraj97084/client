import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tutorial = () => {
  const [activeTab, setActiveTab] = useState('javascript');

  const tutorials = [
    {
      id: 'javascript',
      title: 'JavaScript',
      image: '/tutorial/js.jfif',
      description: 'Modern JavaScript from fundamentals to advanced concepts',
      topics: [
        'ES6+ Features',
        'Async Programming',
        'DOM Manipulation',
        'Error Handling',
        'Object-Oriented JS'
      ],
      level: 'Beginner to Advanced'
    },
    {
      id: 'react',
      title: 'React',
      image: '/tutorial/rect.png',
      description: 'React.js development with hooks and best practices',
      topics: [
        'Components & Props',
        'Hooks in Depth',
        'State Management',
        'React Router',
        'Performance Optimization'
      ],
      level: 'Intermediate'
    },
    {
      id: 'css',
      title: 'CSS',
      image: '/tutorial/css.jfif',
      description: 'Advanced CSS and modern styling techniques',
      topics: [
        'Flexbox & Grid',
        'Animations',
        'Responsive Design',
        'CSS Variables',
        'Sass/SCSS'
      ],
      level: 'All Levels'
    }
  ];

  const activeTutorial = tutorials.find(t => t.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Tutorial Header */}
      <div className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Interactive Tutorials
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Learn through hands-on coding exercises and real-world examples
            </p>
          </div>
        </div>
      </div>

      {/* Tutorial Navigation Topbar */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto py-6">
            {tutorials.map((tutorial) => (
              <button
                key={tutorial.id}
                onClick={() => setActiveTab(tutorial.id)}
                className={`flex-shrink-0 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105 ${
                  activeTab === tutorial.id
                    ? 'ring-2 ring-primary'
                    : 'hover:shadow-xl'
                }`}
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className={`font-semibold mb-1 ${
                    activeTab === tutorial.id
                      ? 'text-primary'
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {tutorial.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tutorial.level}
                    </span>
                    <svg 
                      className={`w-5 h-5 ${
                        activeTab === tutorial.id ? 'text-primary' : 'text-gray-400'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tutorial Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activeTutorial.image}
                  alt={activeTutorial.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {activeTutorial.title} Tutorial
                  </h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/90 text-white">
                    {activeTutorial.level}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {activeTutorial.description}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  What You'll Learn
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeTutorial.topics.map((topic, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                    >
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <nav className="space-y-2">
                <Link
                  to="/courses"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Related Courses</span>
                </Link>
                <Link
                  to="/resources"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>Resources</span>
                </Link>
                <Link
                  to="/community"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Community</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial; 