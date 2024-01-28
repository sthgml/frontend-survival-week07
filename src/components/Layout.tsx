import React from 'react';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div>
      <div>Header</div>
      <main>
        <Outlet />
      </main>
      <div>Footer</div>
    </div>
  );
}
