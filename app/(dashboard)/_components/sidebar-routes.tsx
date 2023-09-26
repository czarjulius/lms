'use client';

import { Compass, Layout, PlusCircle } from 'lucide-react';
import { SidebarItem } from './sidebar-item';

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: PlusCircle,
    label: 'Create Course',
    href: '/create',
  },
];

export const SidebarRoutes = () => {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
