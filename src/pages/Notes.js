import React from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';

const Notes = () => {
  const notes = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      category: 'Programming',
      description: 'Basic concepts of JavaScript programming language',
      content: `JavaScript is a versatile programming language that powers the modern web. Here are some key concepts:

1. Variables and Data Types
   - let, const, var
   - Numbers, Strings, Booleans
   - Arrays and Objects

2. Functions
   - Function declarations
   - Arrow functions
   - Callback functions

3. Control Flow
   - if/else statements
   - switch statements
   - loops (for, while)

4. DOM Manipulation
   - Selecting elements
   - Modifying content
   - Event handling

5. ES6+ Features
   - Destructuring
   - Spread operator
   - Template literals`
    },
    {
      id: 2,
      title: 'React Hooks Guide',
      category: 'Frontend',
      description: 'Understanding React Hooks and their usage',
      content: `React Hooks are functions that allow you to use state and other React features in functional components.

1. useState
   - Managing component state
   - Updating state
   - State initialization

2. useEffect
   - Side effects
   - Cleanup functions
   - Dependency arrays

3. useContext
   - Context API
   - Provider pattern
   - Consumer components

4. useReducer
   - Complex state logic
   - State updates
   - Action types

5. Custom Hooks
   - Creating custom hooks
   - Sharing logic
   - Best practices`
    },
    {
      id: 3,
      title: 'CSS Grid Layout',
      category: 'Frontend',
      description: 'Mastering CSS Grid for responsive layouts',
      content: `CSS Grid is a powerful layout system that allows you to create complex web layouts.

1. Grid Container
   - display: grid
   - grid-template-columns
   - grid-template-rows

2. Grid Items
   - grid-column
   - grid-row
   - grid-area

3. Grid Gaps
   - gap property
   - column-gap
   - row-gap

4. Grid Alignment
   - justify-items
   - align-items
   - place-items

5. Responsive Grid
   - auto-fit
   - auto-fill
   - minmax()`
    },
    {
      id: 4,
      title: 'Node.js Basics',
      category: 'Backend',
      description: 'Introduction to Node.js and server-side JavaScript',
      content: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

1. Node.js Fundamentals
   - Event-driven architecture
   - Non-blocking I/O
   - Event loop

2. Modules
   - CommonJS
   - ES Modules
   - Package management

3. File System
   - Reading files
   - Writing files
   - File streams

4. HTTP Server
   - Creating servers
   - Routing
   - Middleware

5. Express.js
   - Framework basics
   - Routing
   - Middleware usage`
    },
    {
      id: 5,
      title: 'Database Design',
      category: 'Database',
      description: 'Principles of database design and SQL',
      content: `Database design is crucial for building scalable applications.

1. Database Concepts
   - Tables and relationships
   - Primary and foreign keys
   - Indexes

2. SQL Basics
   - SELECT statements
   - JOIN operations
   - WHERE clauses

3. Normalization
   - First normal form
   - Second normal form
   - Third normal form

4. Performance
   - Query optimization
   - Indexing strategies
   - Connection pooling

5. Best Practices
   - Naming conventions
   - Schema design
   - Security considerations`
    },
    {
      id: 6,
      title: 'Python for Beginners',
      category: 'Programming',
      description: 'Getting started with Python programming language',
      content: `Python is a versatile and beginner-friendly programming language.

1. Python Basics
   - Variables and data types
   - Control structures
   - Functions and modules

2. Data Structures
   - Lists and tuples
   - Dictionaries
   - Sets

3. Object-Oriented Programming
   - Classes and objects
   - Inheritance
   - Polymorphism

4. File Handling
   - Reading files
   - Writing files
   - Working with CSV/JSON

5. Python Libraries
   - NumPy for data science
   - Pandas for data analysis
   - Matplotlib for visualization`
    },
    {
      id: 7,
      title: 'Docker Containerization',
      category: 'DevOps',
      description: 'Understanding Docker and container technology',
      content: `Docker is a platform for developing, shipping, and running applications in containers.

1. Docker Basics
   - Containers vs VMs
   - Docker images
   - Dockerfile

2. Docker Commands
   - docker build
   - docker run
   - docker-compose

3. Container Management
   - Container lifecycle
   - Volume management
   - Network configuration

4. Best Practices
   - Image optimization
   - Security considerations
   - Multi-stage builds

5. Docker Compose
   - Service definition
   - Environment variables
   - Networking`
    },
    {
      id: 8,
      title: 'AWS Cloud Services',
      category: 'Cloud',
      description: 'Essential AWS services for cloud computing',
      content: `Amazon Web Services (AWS) provides a comprehensive cloud computing platform.

1. Compute Services
   - EC2 instances
   - Lambda functions
   - Elastic Beanstalk

2. Storage Services
   - S3 buckets
   - EBS volumes
   - RDS databases

3. Networking
   - VPC configuration
   - Route 53
   - CloudFront

4. Security
   - IAM roles
   - Security groups
   - KMS encryption

5. Monitoring
   - CloudWatch
   - CloudTrail
   - AWS Config`
    },
    {
      id: 9,
      title: 'Machine Learning Basics',
      category: 'AI/ML',
      description: 'Introduction to machine learning concepts',
      content: `Machine Learning is a subset of artificial intelligence that focuses on building systems that can learn from data.

1. ML Fundamentals
   - Supervised learning
   - Unsupervised learning
   - Reinforcement learning

2. Data Preprocessing
   - Data cleaning
   - Feature engineering
   - Data normalization

3. Common Algorithms
   - Linear regression
   - Logistic regression
   - Decision trees

4. Model Evaluation
   - Training/testing split
   - Cross-validation
   - Performance metrics

5. Deep Learning
   - Neural networks
   - CNN and RNN
   - Transfer learning`
    },
    {
      id: 10,
      title: 'GraphQL API Design',
      category: 'Backend',
      description: 'Building modern APIs with GraphQL',
      content: `GraphQL is a query language for APIs that provides a more efficient and flexible approach to data fetching.

1. GraphQL Basics
   - Queries and mutations
   - Schema definition
   - Resolvers

2. Type System
   - Scalar types
   - Object types
   - Interfaces

3. Query Design
   - Nested queries
   - Fragments
   - Variables

4. Server Implementation
   - Apollo Server
   - Express integration
   - Authentication

5. Best Practices
   - Schema design
   - Performance optimization
   - Error handling`
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Programming Notes</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A collection of programming notes and resources to help you learn and grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{note.title}</h2>
                <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                  {note.category}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{note.description}</p>
              <Link
                to={`/notes/${note.id}`}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
              >
                Read Note
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes; 