import React, { useState } from 'react';
import './Playground.css';

const Playground = () => {
  const [code, setCode] = useState('// Write your code here\nconsole.log("Hello, World!");');
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      // Create a new console.log function to capture output
      const logs = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(' '));
        originalConsoleLog.apply(console, args);
      };

      // Execute the code
      eval(code);

      // Restore original console.log
      console.log = originalConsoleLog;

      // Update output
      setOutput(logs.join('\n'));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const clearCode = () => {
    setCode('// Write your code here\nconsole.log("Hello, World!");');
    setOutput('');
  };

  return (
    <div className="playground-container">
      <h1>JavaScript Playground</h1>
      <div className="playground-grid">
        <div className="code-editor">
          <div className="editor-header">
            <h2>Code Editor</h2>
            <div className="editor-controls">
              <button onClick={runCode} className="run-button">Run Code</button>
              <button onClick={clearCode} className="clear-button">Clear</button>
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your JavaScript code here..."
            className="code-input"
          />
        </div>
        <div className="output-panel">
          <h2>Output</h2>
          <pre className="output-display">{output}</pre>
        </div>
      </div>
      <div className="examples-section">
        <h2>Example Code Snippets</h2>
        <div className="examples-grid">
          <div className="example-card">
            <h3>Array Methods</h3>
            <pre>
              {`const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);`}
            </pre>
          </div>
          <div className="example-card">
            <h3>Async/Await</h3>
            <pre>
              {`async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}`}
            </pre>
          </div>
          <div className="example-card">
            <h3>DOM Manipulation</h3>
            <pre>
              {`const element = document.createElement('div');
element.textContent = 'Hello World';
document.body.appendChild(element);`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground; 