import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface OutlookPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const outlookPosts: OutlookPost[] = [
  {
    id: 1,
    title: "Q4 2025 Market Review: Navigating Rate Uncertainty",
    excerpt: "A comprehensive analysis of market dynamics in the final quarter, examining the interplay between monetary policy expectations and equity valuations across sectors. We explore defensive positioning strategies and identify opportunities in quality names.",
    date: "January 7, 2026",
    category: "Quarterly Review",
    readTime: "12 min read"
  },
  {
    id: 2,
    title: "The Case for Quality: Defensive Positioning in Volatile Markets",
    excerpt: "Exploring the attributes that distinguish resilient businesses during market turbulence, with a focus on cash flow generation and competitive moats. This piece examines historical precedents and current opportunities in stable, well-capitalized enterprises.",
    date: "December 28, 2025",
    category: "Strategy",
    readTime: "10 min read"
  },
  {
    id: 3,
    title: "Energy Transition: Separating Hype from Fundamental Value",
    excerpt: "An evidence-based assessment of valuation multiples in renewable energy, examining which segments offer compelling risk-adjusted returns for patient capital. We analyze the economics of solar, wind, and energy storage businesses.",
    date: "December 15, 2025",
    category: "Sector Analysis",
    readTime: "15 min read"
  },
  {
    id: 4,
    title: "Healthcare Innovation: Valuing the R&D Pipeline",
    excerpt: "A framework for evaluating biotechnology and pharmaceutical companies, with particular attention to probability-weighted cash flow analysis and the impact of patent cliffs on long-term value creation.",
    date: "November 22, 2025",
    category: "Sector Analysis",
    readTime: "14 min read"
  },
  {
    id: 5,
    title: "Q3 2025 Market Review: Inflation Data and Market Reactions",
    excerpt: "Analyzing third quarter performance across asset classes, with emphasis on how changing inflation expectations have influenced sector rotation patterns and valuation dispersions in equity markets.",
    date: "October 8, 2025",
    category: "Quarterly Review",
    readTime: "11 min read"
  },
  {
    id: 6,
    title: "Financial Services: Assessing Credit Cycle Positioning",
    excerpt: "A deep dive into banking sector fundamentals, examining loan portfolio quality, net interest margin trends, and capital adequacy across different market environments. We identify institutions best positioned for the current cycle.",
    date: "September 30, 2025",
    category: "Sector Analysis",
    readTime: "13 min read"
  },
  {
    id: 7,
    title: "Technology Valuations: When Growth Meets Profitability",
    excerpt: "Examining the current state of software and technology services valuations, with focus on the transition from growth-at-any-cost to sustainable profitability. Includes comparative analysis of SaaS metrics and margin profiles.",
    date: "September 12, 2025",
    category: "Sector Analysis",
    readTime: "16 min read"
  },
  {
    id: 8,
    title: "Mid-Year Outlook 2025: Reassessing Risk and Return Expectations",
    excerpt: "A comprehensive review of first-half market performance and forward-looking analysis of macroeconomic conditions, earnings trends, and valuation levels across global markets.",
    date: "July 2, 2025",
    category: "Quarterly Review",
    readTime: "18 min read"
  }
];

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
                
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-[var(--color-navy)] hover:text-[var(--color-charcoal)] transition-colors"
                >
                  Read Full Analysis
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
