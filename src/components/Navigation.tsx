interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <header className="border-b border-[var(--color-border)] bg-white">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <h3 className="text-[var(--color-navy)]">
              Investment Research
            </h3>
          </div>
          
          <nav className="flex items-center gap-10">
            <button 
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home'
                  ? 'text-[var(--color-text-primary)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-navy)]'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('market-outlook')}
              className={`transition-colors ${
                currentPage === 'market-outlook'
                  ? 'text-[var(--color-text-primary)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-navy)]'
              }`}
            >
              Market Outlook
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className={`transition-colors ${
                currentPage === 'about'
                  ? 'text-[var(--color-text-primary)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-navy)]'
              }`}
            >
              About Me
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}