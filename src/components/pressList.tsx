import * as React from 'react';
import { ReactElement } from 'react';

interface PressProps {
  uid: string;
  data: {
    description: { text: string };
    sitename: { text: string };
    url: { url: string };
  };
}

interface PressItemProps {
  allPress: PressProps[];
}

const PressItem = ({ pressItem }: { pressItem: PressProps }) => (
  <a
    href={pressItem.data.url.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-start gap-4 border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-900"
  >
    <div className="flex-1">
      <p className="font-display text-xl font-light text-neutral-900 transition-colors group-hover:text-neutral-500">
        {pressItem.data.sitename.text}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-neutral-600">
        {pressItem.data.description.text}
      </p>
    </div>
    <span
      aria-hidden="true"
      className="mt-1 shrink-0 text-neutral-300 transition group-hover:translate-x-0.5 group-hover:text-neutral-900"
    >
      →
    </span>
  </a>
);

export default function PressList({ allPress }: PressItemProps): ReactElement {
  return (
    <div className="space-y-3">
      {allPress.map((pressItem, index) => (
        <PressItem pressItem={pressItem} key={pressItem.uid ?? index} />
      ))}
    </div>
  );
}
