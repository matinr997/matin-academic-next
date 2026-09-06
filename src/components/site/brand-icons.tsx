/** Real brand logos for ORCID + Google Scholar (no emoji, no lucide generic). */

export function OrcidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" role="img">
      <circle cx="12" cy="12" r="12" fill="#A6CE39" />
      {/* white "iD" mark */}
      <g fill="#fff">
        {/* dot of i */}
        <circle cx="7.4" cy="6.2" r="1.35" />
        {/* stem of i */}
        <rect x="6.35" y="8.6" width="2.1" height="9.2" rx="0.4" />
        {/* D */}
        <path d="M11.2 8.6h3.6c2.6 0 4.1 1.6 4.1 4.6s-1.5 4.6-4.1 4.6h-3.6V8.6Zm2.1 2v5.2h1.4c1.4 0 2.1-.9 2.1-2.6s-.7-2.6-2.1-2.6h-1.4Z" />
      </g>
    </svg>
  );
}

export function ScholarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" role="img">
      {/* graduation cap — Google Scholar blue */}
      <path
        fill="#4285F4"
        d="M12 2.8 1.2 8.9 12 15l10.8-6.1L12 2.8Z"
      />
      {/* base / book */}
      <path
        fill="#4285F4"
        d="M5.4 11.7v4.1c0 1.6 2.9 3 6.6 3s6.6-1.4 6.6-3v-4.1l-6.6 3.7-6.6-3.7Z"
      />
      {/* tassel — Scholar red accent */}
      <path fill="#EA4335" d="M19.6 9.4v5.9h-1.4V9.9l1.4-.5Z" />
      <circle cx="18.9" cy="16.6" r="1" fill="#EA4335" />
    </svg>
  );
}
