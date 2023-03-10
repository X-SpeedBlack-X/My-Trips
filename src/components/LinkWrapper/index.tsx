import Link from 'next/link';
import { ReactNode } from 'react';
import * as S from './styles';

type LinkWrapperProps = {
  href: string;
  children: ReactNode;
};

const LinkWrapper = ({ children, href }: LinkWrapperProps) => {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  );
};

export default LinkWrapper;
