import React from 'react';
import MenuComponent from '../commons/menu.component';
import { SessionPayload } from '../types/SessionPayload';
import { MenuPages } from '../types/MenuPages';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  MockLink.displayName = 'MockLink'; // Add displayName here
  return MockLink;
});

describe('MenuComponent', () => {
  const menuLinks: MenuPages[] = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      requiredRoles: ['owner', 'admin'],
    },
    {
      title: 'Monitor',
      path: '/monitor',
      requiredRoles: ['owner'],
    },
  ];

  it('renders links for the pages the user has the required roles for', () => {
    const mockSession: SessionPayload = {
      expiresAt: new Date(),
      user: {
        id: 1,
        email: '',
        password: '',
        roles: ['owner'],
      },
    };

    const { getByText } = render(
      <MenuComponent session={mockSession} pages={menuLinks} />
    );

    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(getByText('Monitor')).toBeInTheDocument();
  });

  it('does not render links for the pages the user does not have the required roles for', () => {
    const mockSession: SessionPayload = {
      expiresAt: new Date(),
      user: {
        id: 1,
        email: '',
        password: '',
        roles: ['admin'],
      },
    };

    const { getByText, queryByText } = render(
      <MenuComponent session={mockSession} pages={menuLinks} />
    );

    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(queryByText('Monitor')).not.toBeInTheDocument();
  });
});