import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-display text-4xl font-bold mb-4">404</h1>
        <p className="text-base mb-8" style={{ color: 'var(--text-secondary)' }}>
          This page could not be found. The Zemun City Park guides are available from the
          homepage.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white"
          style={{ background: 'var(--accent)' }}
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
