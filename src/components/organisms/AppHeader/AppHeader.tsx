import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { NAVIGATION } from '@/constants/NAVIGATION';
import WalletConnectionButton from '@/components/organisms/WalletConnectionButton';
import { Props } from './types';

const AppHeader: FC<Props> = (props) => {
  const { } = props;

  return (
    <div className="size-full bg-cyan-950 text-white">
      <div className="max-w-7xl mx-auto py-4 flex flex-row items-center justify-between">
        <Image src="/assets/logo.svg" width="200" height="80" alt="CryptoCHECK" />
        <nav className="w-full px-2">
          <ul className="flex flex-row">
            {NAVIGATION.map((n) => (
              <li key={n.path} className="px-2">
                <Link className="p-2 hover:bg-white hover:text-cyan-950 transition-colors rounded-sm" href={n.path}>
                  {n.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <WalletConnectionButton />
      </div>
    </div>
  );
};
AppHeader.displayName = 'AppHeader';

export default AppHeader;
