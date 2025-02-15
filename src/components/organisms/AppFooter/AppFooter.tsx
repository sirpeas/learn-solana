import { FC } from 'react';
import { Props } from './types';

const AppFooter: FC<Props> = (props) => {
  const { } = props;

  return (
    <div className="size-full border-cyan-950 border-t-4 text-cyan-950">
      <div className="max-w-7xl mx-auto py-4 flex flex-row items-center justify-between">
        © Copyrights CryptoCheck {new Date().getFullYear()}
      </div>
    </div>
  );
};
AppFooter.displayName = 'AppFooter';

export default AppFooter;
