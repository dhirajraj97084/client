import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      title: 'Interactive Tutorials',
      description: 'Learn through hands-on coding exercises and real-world projects',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Comprehensive Courses',
      description: 'Structured learning paths for beginners to advanced developers',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Programming Notes',
      description: 'Detailed notes and documentation for quick reference',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    }
  ];

  const categories = [
    { name: 'Frontend', count: 12, color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { name: 'Backend', count: 8, color: 'bg-gradient-to-br from-green-400 to-green-600' },
    { name: 'DevOps', count: 6, color: 'bg-gradient-to-br from-purple-400 to-purple-600' },
    { name: 'Database', count: 5, color: 'bg-gradient-to-br from-yellow-400 to-yellow-600' },
    { name: 'Mobile', count: 4, color: 'bg-gradient-to-br from-red-400 to-red-600' },
    { name: 'AI/ML', count: 3, color: 'bg-gradient-to-br from-indigo-400 to-indigo-600' }
  ];

  const stats = [
    { label: 'Active Students', value: '10K+' },
    { label: 'Video Tutorials', value: '500+' },
    { label: 'Expert Instructors', value: '50+' },
    { label: 'Success Rate', value: '95%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10" />
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="sm:text-center lg:text-left" data-aos="fade-right">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                    <span className="block">Learn to Code with</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                      CodeLearn Platform
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Master programming through interactive tutorials, comprehensive courses, and detailed documentation.
                    Start your coding journey today!
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        to="/courses"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transform hover:scale-105 transition-all duration-200 md:py-4 md:text-lg md:px-10"
                      >
                        Get Started
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        to="/tutorials"
                        className="w-full flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/5 transform hover:scale-105 transition-all duration-200 md:py-4 md:text-lg md:px-10"
                      >
                        View Tutorials
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block relative" data-aos="fade-left">
                  <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-2xl">
                    <img
                      src="/images/dh1.jpg"
                      alt="Developer coding"
                      className="w-full h-full object-cover rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent"></div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-white dark:bg-gray-800 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400 truncate">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-primary">
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center" data-aos="fade-up">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to learn coding
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
              Choose from a wide range of courses and tutorials designed to help you become a better developer.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-primary to-primary-light text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.title}</p>
                  <dd className="mt-2 ml-16 text-base text-gray-600 dark:text-gray-300">{feature.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10" data-aos="fade-up">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Categories</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Explore Topics
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 p-6 cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg mb-4 transform -rotate-6 group-hover:rotate-0 transition-transform duration-200`}></div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{category.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{category.count} Courses</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-primary-light">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 