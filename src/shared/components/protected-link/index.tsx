import { ReactNode, useContext } from 'react';
import { Link, type LinkProps, NavLink, type NavLinkProps } from 'react-router-dom';
import { AuthContextR } from '../../../contexts/AuthReducer';

type MainProps = {
  inNav?: boolean,
  children: ReactNode,
}

type Props = (MainProps & NavLinkProps) | (MainProps & NavLinkProps)

const ProtectedLink: React.FC<Props> = ({ children, inNav = false, to, ...rest }) => {
  const { state: { isAuthenticated } } = useContext(AuthContextR);
  if (!isAuthenticated) return null;
  if (inNav) {
    return (
      <NavLink to={to} {...(rest as NavLinkProps)}>{children}</NavLink>
    );
  }
  return (
    <Link to={to} {...(rest as LinkProps)}>{children}</Link>
  );
};

export default ProtectedLink;
