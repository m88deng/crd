import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { generatePostUrl } from '../utils/slugify';
import { outlookPosts } from '../data/marketOutlookPosts';

export function FeaturedContent() {
  // Features latest 3 market outlook posts by date
  const latestPosts = [...outlookPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="bg-[var(--color-bg-subtle)] border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="mb-12">
          <h2 className="mb-3">Latest Insights</h2>
          <div className="h-px w-16 bg-[var(--color-navy)]"></div>
        </div>
        
        <div className="space-y-8">
          {latestPosts.map((item) => (
            <article 
              key={item.id}
              className="bg-white border border-[var(--color-border)] p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="text-sm text-[var(--color-text-muted)] mb-2">
                    {item.date}
                  </div>
                  <h3 className="mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    {item.excerpt}
                  </p>
                  <Link 
                    to={generatePostUrl(item.id, item.title)}
                    className="inline-flex items-center gap-2 text-[var(--color-navy)] hover:text-[var(--color-charcoal)] transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
