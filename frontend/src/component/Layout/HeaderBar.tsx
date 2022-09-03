<<<<<<< HEAD
import { memo, ReactNode } from 'react';
=======
import { ReactNode } from 'react';
>>>>>>> dev

type HeaderBarProps = { children: ReactNode }

function HeaderBar({ children }: HeaderBarProps) {
  return (
    <div>
      {children}
    </div>
  );
}

<<<<<<< HEAD
export default memo(HeaderBar);
=======
export default HeaderBar;
>>>>>>> dev
