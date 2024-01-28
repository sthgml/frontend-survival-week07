import React from 'react';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div>
      <div>
        <h1>메가테라 푸드코트 키오스크</h1>
        <h2>원하시는 주문을 선택해주세요</h2>
      </div>
      <main>
        <Outlet />
      </main>
      <div>copyright c sohee park All rights reserved. 2024</div>
    </div>
  );
}
