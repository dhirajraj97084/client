import React from 'react';
import './WorkWithUs.css';

const WorkWithUs = () => {
  const positions = [
    {
      id: 1,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our team to build beautiful and performant web applications using React and modern web technologies.',
      requirements: [
        '3+ years of experience with React',
        'Strong knowledge of JavaScript/TypeScript',
        'Experience with modern build tools',
        'Understanding of responsive design'
      ]
    },
    {
      id: 2,
      title: 'Backend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help us build scalable backend services and APIs using Node.js and modern cloud technologies.',
      requirements: [
        '3+ years of experience with Node.js',
        'Experience with databases and ORMs',
        'Understanding of microservices architecture',
        'Knowledge of cloud platforms (AWS/GCP)'
      ]
    },
    {
      id: 3,
      title: 'Content Writer',
      department: 'Content',
      location: 'Remote',
      type: 'Part-time',
      description: 'Create engaging technical content and tutorials for our learning platform.',
      requirements: [
        'Strong technical writing skills',
        'Experience with technical documentation',
        'Knowledge of web development concepts',
        'Ability to explain complex topics clearly'
      ]
    }
  ];

  return (
    <div className="work-with-us-container">
      <div className="work-with-us-header">
        <h1>Work With Us</h1>
        <p>
          Join our team of passionate developers and educators to help shape the future of online learning.
        </p>
      </div>

      <div className="positions-grid">
        {positions.map(position => (
          <div key={position.id} className="position-card">
            <div className="position-header">
              <h2>{position.title}</h2>
              <div className="position-meta">
                <span>{position.department}</span>
                <span>{position.location}</span>
                <span>{position.type}</span>
              </div>
            </div>

            <p className="position-description">{position.description}</p>

            <h3>Requirements</h3>
            <ul className="requirements-list">
              {position.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>

            <button className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>

      <div className="benefits-section">
        <h2>Why Work With Us?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <i className="fas fa-laptop-code"></i>
            <h3>Remote Work</h3>
            <p>Work from anywhere in the world with our fully remote setup.</p>
          </div>
          <div className="benefit-item">
            <i className="fas fa-graduation-cap"></i>
            <h3>Learning & Growth</h3>
            <p>Continuous learning opportunities and professional development.</p>
          </div>
          <div className="benefit-item">
            <i className="fas fa-users"></i>
            <h3>Great Team</h3>
            <p>Work with talented and passionate individuals.</p>
          </div>
          <div className="benefit-item">
            <i className="fas fa-heart"></i>
            <h3>Work-Life Balance</h3>
            <p>Flexible hours and unlimited vacation policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs; 