export function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Navigation Links - removed href anchors since we're using client-side navigation */}
        <div className="flex items-center gap-8 mb-8 pb-8 border-b border-gray-600">
          <span className="text-gray-300">Home</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-300">Market Outlook</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-300">About Me</span>
        </div>
        
        {/* Disclaimer */}
        <div className="space-y-4 mb-8">
          <p className="text-sm text-gray-400 leading-relaxed">
            <strong className="text-gray-300">Disclaimer:</strong> The content on this site is provided for informational and educational purposes only and does not constitute investment advice, financial advice, trading advice, or any other sort of advice. Nothing on this site constitutes a solicitation, recommendation, endorsement, or offer to buy or sell any securities or other financial instruments. All content is presented as of the date published or indicated and may be superseded by subsequent market events or for other reasons.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Past performance is not indicative of future results. Investing involves risk, including the possible loss of principal. You should conduct your own research and consult with qualified financial, legal, and tax professionals before making any investment decisions.
          </p>
        </div>
        
        {/* Tagline */}
        <div className="text-center pt-6 border-t border-gray-600">
          <p className="text-sm text-gray-400">
            Independent Investment Research
          </p>
        </div>
      </div>
    </footer>
  );
}