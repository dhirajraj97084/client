import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'Learn end-to-end web development with modern technologies',
      image: '/corses/full.png',
      category: 'Web Development',
      duration: '12 weeks',
      level: 'Intermediate'
    },
    {
      id: 2,
      title: 'Frontend Development',
      description: 'Master modern frontend frameworks and libraries',
      image: '/corses/fontent.jfif',
      category: 'Web Development',
      duration: '8 weeks',
      level: 'Beginner'
    },
    {
      id: 3,
      title: 'React Development',
      description: 'Build powerful web applications with React',
      image: '/corses/rect.png',
      category: 'Web Development',
      duration: '10 weeks',
      level: 'Intermediate'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Our</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Featured Courses
            </span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl">
            Explore our comprehensive courses designed to help you master modern web development.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-white">
                    {course.level}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">{course.category}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{course.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                <Link
                  to={`/course/${course.id}`}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transform hover:scale-105 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of students who are already learning with us.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transform hover:scale-105 transition-all duration-200"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses; 