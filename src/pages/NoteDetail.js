import React from 'react';
import { useParams, Link } from 'react-router-dom';

const NoteDetail = () => {
  const { id } = useParams();

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
    // ... (copy all other notes from Notes.js)
  ];

  const note = notes.find(n => n.id === parseInt(id));

  if (!note) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Note Not Found</h1>
          <Link to="/notes" className="text-primary hover:text-primary-dark">
            Back to Notes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link to="/notes" className="text-primary hover:text-primary-dark flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Notes
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{note.title}</h1>
            <span className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full">
              {note.category}
            </span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {note.description}
          </p>

          <div className="prose dark:prose-invert max-w-none">
            <pre className="whitespace-pre-wrap text-base text-gray-700 dark:text-gray-300 font-mono bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              {note.content}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail; 