import React, { useState } from 'react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'schedule test 002',
    description: 'schedule test 002...',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    date: 'February 5, 2025',
    readTime: '0 นาที',
    tag: null,
  },
  {
    id: 2,
    title: 'บทความทดสอบการจัดกำหนดเวลา',
    description: 'บทความนี้จะพาคุณไปรู้จักกับ next.js และคุณสมบัติเด่นที่ทำให้มันเป็นตัวเลือกที่ดีสำหรับการพัฒนาเว็บไซต์...',
    image: null,
    date: 'February 5, 2025',
    readTime: '0 นาที',
    tag: 'ทดสอบ',
  },
];

function Blog() {
  const [lang, setLang] = useState('TH');

  return (
    <div className="blog-root">
      <div className="blog-header">
        <div>
          <h1>Blog</h1>
          <p>บทความและความรู้ล่าสุดจาก International Rehab Center Thailand</p>
        </div>
       
      </div>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            {post.image ? (
              <img src={post.image} alt={post.title} className="blog-image" />
            ) : (
              <div className="blog-no-image">No image</div>
            )}
            <div className="blog-card-content">
              {post.tag && <span className="blog-tag">{post.tag}</span>}
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-desc">{post.description}</p>
              <div className="blog-meta">
                <span>{post.date}</span>
                <span>อ่าน {post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
