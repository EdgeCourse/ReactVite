// app/layout.tsx
import { ReactNode } from "react";
import "./globals.css"; // Global styles

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en"> {/* Add the <html> tag with the lang attribute */}
      <body>         {/* Add the <body> tag to wrap all your content */}
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 My Next App</p>
        </footer>
      </body>
    </html>
  );
}
