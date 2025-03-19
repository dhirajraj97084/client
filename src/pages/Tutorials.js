import React from 'react';
import './Tutorials.css';

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with React',
      description: 'Learn the basics of React and how to create your first component.',
      duration: '30 mins',
      level: 'Beginner',
      topics: ['Components', 'Props', 'State', 'Hooks'],
      image: '/tutorial/rect.png'
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      description: 'Deep dive into closures, promises, and async/await.',
      duration: '45 mins',
      level: 'Intermediate',
      topics: ['Closures', 'Promises', 'Async/Await', 'ES6+ Features'],
      image: '/tutorial/java.png'
    },
    {
      id: 3,
      title: 'CSS Grid and Flexbox',
      description: 'Master modern CSS layout techniques with Grid and Flexbox.',
      duration: '40 mins',
      level: 'Intermediate',
      topics: ['Grid Layout', 'Flexbox', 'Responsive Design', 'CSS Variables'],
      image: '/tutorial/css.png'
    }
  ];

  return (
    <div className="tutorials-container">
      <h1>Programming Tutorials</h1>
      <div className="tutorials-grid">
        {tutorials.map(tutorial => (
          <div key={tutorial.id} className="tutorial-card">
            <div className="tutorial-image">
              <img src={tutorial.image} alt={tutorial.title} />
            </div>
            <h2>{tutorial.title}</h2>
            <p>{tutorial.description}</p>
            <div className="tutorial-meta">
              <span>Duration: {tutorial.duration}</span>
              <span>Level: {tutorial.level}</span>
            </div>
            <div className="tutorial-topics">
              {tutorial.topics.map((topic, index) => (
                <span key={index} className="topic-tag">{topic}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials; 