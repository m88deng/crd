import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { generatePostUrl } from '../utils/slugify';
import { outlookPosts } from '../data/marketOutlookPosts';

const categories = ["All", "Quarterly Review", "Strategy", "Sector Analysis"];

export function MarketOutlookPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? outlookPosts 
    : outlookPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-[var(--color-bg-subtle)] min-h-screen">
      {/* Page Header */}
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-8 py-16">
          <h1 className="mb-4">Market Outlook</h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
            In-depth analysis of market conditions, sector dynamics, and investment opportunities. 
            Each piece reflects rigorous research and a long-term perspective on value creation.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-8 py-6">
          <div className="flex items-center gap-6">
            <span className="text-sm text-[var(--color-text-muted)]">Filter by:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm px-4 py-2 transition-colors ${
                  selectedCategory === category
                    ? 'bg-[var(--color-navy)] text-white'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-navy)] hover:bg-[var(--color-bg-subtle)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Archive */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-8">
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white border border-[var(--color-border)] p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-8 mb-4">
                  <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span className="text-[var(--color-accent)]">{post.category}</span>
                  </div>
                </div>
                
                <h3 className="mb-3">
                  {post.title}
                </h3>
                
                <p className="text-[var(--color-text-secondary)] mb-5 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={generatePostUrl(post.id, post.title)}
                  className="inline-flex items-center gap-2 text-[var(--color-navy)] hover:text-[var(--color-charcoal)] transition-colors"
                >
                  Read Full Analysis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
