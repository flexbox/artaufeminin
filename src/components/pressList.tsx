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
    className="group flex items-start gap-4 rounded-sm border border-clay-200 bg-cream-50 p-5 transition-all hover:border-clay-400 hover:shadow-sm"
  >
    <div className="flex-1">
      <p className="font-display text-lg font-semibold text-stone-900 transition-colors group-hover:text-clay-500">
        {pressItem.data.sitename.text}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-stone-500">
        {pressItem.data.description.text}
      </p>
    </div>
    <span className="mt-1 shrink-0 text-clay-300 transition-transform group-hover:translate-x-0.5 group-hover:text-clay-500">
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
