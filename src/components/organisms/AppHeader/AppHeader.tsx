import { FC } from 'react';
import Image from 'next/image';
import { Wallet } from "@phosphor-icons/react/dist/ssr";

import { Props } from './types';

const AppHeader: FC<Props> = (props) => {
  const { } = props;

  return (
    <div className="size-full bg-cyan-950 text-white">
      <div className="max-w-7xl mx-auto py-4 flex flex-row items-center justify-between">
        <Image src="/assets/logo.svg" width="200" height="80" alt="CryptoCHECK" />
        <Wallet size={24} />
      </div>
    </div>
  );
};
AppHeader.displayName = 'AppHeader';

export default AppHeader;
