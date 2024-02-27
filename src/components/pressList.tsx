import * as React from 'react';
import { ReactElement } from 'react';

import Text from './text';

interface PressProps {
  uid: string;
  data: {
    description: {
      text: string;
    };
    sitename: {
      text: string;
    };
    url: {
      url: string;
    };
  };
}

interface PressItemProps {
  allPress: PressProps[];
}

const PressItem = ({ pressItem }: { pressItem: PressProps }) => {
  return (
    <ul className="py-2">
      <li className="flex py-4 leading-6">
        <Text as="h3" variant={'h3'}>
          <a
            href={pressItem.data.url.url}
            className="mb-4 text-lg text-blue-500"
          >
            <strong>{pressItem.data.sitename.text}</strong>
          </a>
          : {pressItem.data.description.text}
        </Text>
      </li>
    </ul>
  );
};

export default function PressList({ allPress }: PressItemProps): ReactElement {
  return (
    <>
      {allPress.map((pressItem) => {
        return <PressItem pressItem={pressItem} key={pressItem.uid} />;
      })}
    </>
  );
}
