import React from 'react';

export function Card({ children, className, ...props }) {
  return (
    <div className={`rounded-lg border border-gray-800 shadow-sm ${className || ''}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={`p-6 ${className || ''}`} {...props}>
      {children}
    </div>
  );
}

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Image({ src, alt, width, height, className, ...props }) {
  return (
    <img
      src={src}
      alt={alt || ''}
      width={width}
      height={height}
      className={className || ''}
      {...props}
    />
  );
}

export function Link({ href, className, children, ...props }) {
  return (
    <a
      href={href}
      className={className || ''}
      {...props}
    >
      {children}
    </a>
  );
}

export function ExternalLink(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}