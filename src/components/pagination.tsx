import { Link } from 'gatsby';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  numPages: number;
  basePath: string;
}

export function Pagination({ currentPage, numPages, basePath }: PaginationProps) {
  if (numPages <= 1) return null;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage === 2 ? `${basePath}/` : `${basePath}/${currentPage - 1}/`;
  const nextPage = `${basePath}/${currentPage + 1}/`;

  return (
    <nav
      aria-label="Pagination"
      className="mx-auto mb-20 w-11/12 max-w-7xl border-t border-neutral-200 pt-10"
    >
      <div className="flex items-center justify-between">
        {!isFirst ? (
          <Link
            to={prevPage}
            rel="prev"
            className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-colors hover:text-neutral-900"
          >
            <span aria-hidden="true">←</span> Page précédente
          </Link>
        ) : (
          <span />
        )}

        <span className="text-xs font-light text-neutral-400">
          Page {currentPage} / {numPages}
        </span>

        {!isLast ? (
          <Link
            to={nextPage}
            rel="next"
            className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-colors hover:text-neutral-900"
          >
            Page suivante <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
