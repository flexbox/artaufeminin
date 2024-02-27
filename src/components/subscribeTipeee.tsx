import React, { ReactElement } from 'react';

import Button from './button';
import Card from './card';
import Text from './text';

export default function SubscribeTipeee(): ReactElement {
  return (
    <Card title="Mécénat">
      <div className="">
        <Text as="p" variant={'p'}>
          Si vous appréciez l'émission, vous avez désormais la possibilité de
          m'encourager et de m'aider à continuer, ou tout simplement de montrer
          que vous appréciez le travail accompli.
        </Text>
        <Button
          variant="outline"
          href="https://fr.tipeee.com/art-au-feminin"
          as="a"
          size={'s'}
        >
          Soutenir sur tipeee
        </Button>
      </div>
    </Card>
  );
}
