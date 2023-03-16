'use client'; // ⚠️ This is a client-side only component

import './page.css';

// --------------------------------------------------------------------------------
// 📌  Component Imports
// --------------------------------------------------------------------------------
import { Badge } from './components/Badge';

export default function Home() {
  // --------------------------------------------------------------------------------
  // 📌  Component List Page
  // This page is client-side only, so we can use React Hooks.
  // --------------------------------------------------------------------------------

  return (
    <div className="container-wrapper">
      <div className="container">
        <Badge value="Com #1" backgroundColor="#c51111" />
        <Badge value="Com #2" />
        <Badge value="Com #3" backgroundColor="#d2d2d2" />
      </div>
    </div>
  );
}
