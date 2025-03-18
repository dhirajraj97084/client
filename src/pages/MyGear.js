import React from 'react';
import './MyGear.css';

const MyGear = () => {
  const gearItems = [
    {
      id: 1,
      category: 'Development Tools',
      items: [
        {
          name: 'VS Code',
          description: 'My primary code editor with essential extensions',
          link: 'https://code.visualstudio.com/'
        },
        {
          name: 'Git',
          description: 'Version control system for all my projects',
          link: 'https://git-scm.com/'
        },
        {
          name: 'Postman',
          description: 'API testing and development tool',
          link: 'https://www.postman.com/'
        }
      ]
    },
    {
      id: 2,
      category: 'Hardware',
      items: [
        {
          name: 'MacBook Pro',
          description: '16-inch M1 Pro for development work',
          link: '#'
        },
        {
          name: 'External Monitor',
          description: '27-inch 4K display for better productivity',
          link: '#'
        },
        {
          name: 'Mechanical Keyboard',
          description: 'Custom mechanical keyboard for comfortable typing',
          link: '#'
        }
      ]
    },
    {
      id: 3,
      category: 'Learning Resources',
      items: [
        {
          name: 'MDN Web Docs',
          description: 'Comprehensive web development documentation',
          link: 'https://developer.mozilla.org/'
        },
        {
          name: 'Stack Overflow',
          description: 'Community-driven Q&A platform',
          link: 'https://stackoverflow.com/'
        },
        {
          name: 'GitHub',
          description: 'Code hosting and collaboration platform',
          link: 'https://github.com/'
        }
      ]
    }
  ];

  return (
    <div className="my-gear-container">
      <h1>My Development Setup</h1>
      <p className="gear-intro">
        Here's a comprehensive list of the tools, hardware, and resources I use for development.
      </p>
      
      <div className="gear-grid">
        {gearItems.map(category => (
          <div key={category.id} className="gear-category">
            <h2>{category.category}</h2>
            <div className="gear-items">
              {category.items.map((item, index) => (
                <div key={index} className="gear-item">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="gear-link">
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGear; 