import React from 'react';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogPreviewSection() {
  const posts = [
    {
      title: 'How AI is Changing Personal Finance in 2026 and Beyond',
      category: 'Fintech & AI',
      readTime: '5 min read',
      image: '/assets/jeUxGRFD6xQMnmLMTwummecM3ak.png',
      slug: '/blog/how-ai-is-changing-personal-finance',
    },
    {
      title: '5 Simple Habits That Make You Better With Money and Budgeting',
      category: 'Smart Spending',
      readTime: '4 min read',
      image: '/assets/TizVi0egAjctc8wDsGt4dja6kA.png',
      slug: '/blog/5-simple-habits-that-make-you-better-with-money',
    },
    {
      title: 'The Future of Digital Payments: What It Means for Growing Businesses',
      category: 'Global Rails',
      readTime: '6 min read',
      image: '/assets/jeUxGRFD6xQMnmLMTwummecM3ak.png',
      slug: '/blog/the-future-of-digital-payments',
    },
  ];

  return (
    <section
      id="blog"
      style={{
        padding: '120px 0',
        background: '#0c0c0e',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 64px auto' }}>
          {/* Badge: 06 blog */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <div
              style={{
                transform: 'rotate(-12deg)',
                background: '#212124',
                border: '1px solid #292929',
                padding: '4px 10px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#8f8f8f',
              }}
            >
              06
            </div>
            <div
              style={{
                transform: 'rotate(6deg)',
                background: '#212124',
                border: '1px solid #292929',
                padding: '4px 12px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#efefef',
                textTransform: 'lowercase',
              }}
            >
              blog
            </div>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.035em',
              color: '#ffffff',
              marginBottom: '20px',
            }}
          >
            Grow Your Knowledge.
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#8f8f8f', maxWidth: '680px', margin: '0 auto' }}>
            Practical guides, product updates, and expert insights to level up your financial management.
          </p>
        </div>

        {/* Blog Post 3-Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {posts.map((post, idx) => (
            <Link
              key={idx}
              to={post.slug}
              className="scroll-reveal"
              style={{
                background: '#1b1b1f',
                border: '1px solid #292929',
                borderRadius: '28px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#6262fe';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#292929';
              }}
            >
              <div style={{ width: '100%', height: '220px', overflow: 'hidden', background: '#121214' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#9696ff', textTransform: 'uppercase' }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#8f8f8f', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.4, marginBottom: '16px' }}>
                    {post.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#bebeff', fontSize: '0.88rem', fontWeight: 700 }}>
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
