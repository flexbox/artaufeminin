import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const posts = [
  'https://www.instagram.com/p/CXn2XbyoTmT/',
  'https://www.instagram.com/p/CXn1qGQoqxx/',
  'https://www.instagram.com/p/CXnzlQ0IK8N/',
  'https://www.instagram.com/p/CNRxx8QIXJ5/',
  'https://www.instagram.com/p/CNRxx8QIXJ5/',
  'https://www.instagram.com/p/Cay36_bgT3k/',
  'https://www.instagram.com/p/Cay17dkAKME/',
  'https://www.instagram.com/p/Cay14ynA6Gr/',
];

export default function Instagram() {
  return (
    <section className="border-y border-clay-200 bg-cream-200 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-clay-500">
              Instagram
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              Suivez ART <span className="italic font-light">au féminin</span>
            </h2>
          </div>
          <a
            href="https://instagram.com/artaufeminin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-clay-500 transition-colors hover:text-clay-700"
          >
            @artaufeminin
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Grille de photos */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">

          <a href={posts[0]} target="_blank" rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden">
            <StaticImage src="../images/instagram/1.jpg" alt="ART au féminin sur Instagram"
              className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </a>

          <a href={posts[1]} target="_blank" rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden">
            <StaticImage src="../images/instagram/2.jpg" alt="ART au féminin sur Instagram"
              className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </a>

          <a href={posts[2]} target="_blank" rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden">
            <StaticImage src="../images/instagram/3.jpg" alt="ART au féminin sur Instagram"
              className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </a>

          <a href={posts[3]} target="_blank" rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden">
            <StaticImage src="../images/instagram/4.jpg" alt="ART au féminin sur Instagram"
              className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </a>

          <a href={posts[4]} target="_blank" rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden">
            <StaticImage src="../images/instagram/5.jpg" alt="ART au féminin sur Instagram"
              className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </a>

          <a href={posts[5]} target="_blank" rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden">
            <StaticImage src="../images/instagram/6.jpg" alt="ART au féminin sur Instagram"
              className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </a>

          <a href={posts[6]} target="_blank" rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden">
            <StaticImage src="../images/instagram/7.jpg" alt="ART au féminin sur Instagram"
              className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </a>

          <a href={posts[7]} target="_blank" rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden">
            <StaticImage src="../images/instagram/8.jpg" alt="ART au féminin sur Instagram"
              className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </a>

        </div>
      </div>
    </section>
  );
}
