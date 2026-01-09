import { ArrowRight } from 'lucide-react';

interface ContentItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const contentItems: ContentItem[] = [
  {
    id: 1,
    title: "Q4 2025 Market Review: Navigating Rate Uncertainty",
    excerpt: "A comprehensive analysis of market dynamics in the final quarter, examining the interplay between monetary policy expectations and equity valuations across sectors.",
    date: "January 7, 2026"
  },
  {
    id: 2,
    title: "The Case for Quality: Defensive Positioning in Volatile Markets",
    excerpt: "Exploring the attributes that distinguish resilient businesses during market turbulence, with a focus on cash flow generation and competitive moats.",
    date: "December 28, 2025"
  },
  {
    id: 3,
    title: "Energy Transition: Separating Hype from Fundamental Value",
    excerpt: "An evidence-based assessment of valuation multiples in renewable energy, examining which segments offer compelling risk-adjusted returns for patient capital.",
    date: "December 15, 2025"
  }
];

export function FeaturedContent() {
  return (
    <section className="bg-[var(--color-bg-subtle)] border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="mb-12">
          <h2 className="mb-3">Latest Insights</h2>
          <div className="h-px w-16 bg-[var(--color-navy)]"></div>
        </div>
        
        <div className="space-y-8">
          {contentItems.map((item) => (
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
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[var(--color-navy)] hover:text-[var(--color-charcoal)] transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
