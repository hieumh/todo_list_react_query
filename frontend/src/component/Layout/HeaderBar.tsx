import { ReactNode } from 'react';

type HeaderBarProps = { children: ReactNode }

function HeaderBar({ children }: HeaderBarProps) {
  return (
    <div>
      {children}
    </div>
  );
}

export default HeaderBar;