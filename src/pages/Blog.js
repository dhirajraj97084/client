import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
      author: 'John Doe',
      date: 'March 18, 2024',
      readTime: '5 min read',
      category: 'Technology',
      image: '/images/web-dev-future.jpg'
    },
    {
      id: 2,
      title: 'Best Practices for React Performance',
      excerpt: 'Learn how to optimize your React applications for better performance and user experience.',
      author: 'Jane Smith',
      date: 'March 17, 2024',
      readTime: '7 min read',
      category: 'React',
      image: '/images/react-performance.jpg'
    },
    {
      id: 3,
      title: 'Getting Started with TypeScript',
      excerpt: 'A comprehensive guide to TypeScript and its benefits in modern web development.',
      author: 'Mike Johnson',
      date: 'March 16, 2024',
      readTime: '6 min read',
      category: 'TypeScript',
      image: '/images/typescript-guide.jpg'
    }
  ];

  return (
    <div className="blog-container">
      <h1>Blog Posts</h1>
      <div className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-card-content">
              <span className="category-tag">{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>{post.author}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog; 