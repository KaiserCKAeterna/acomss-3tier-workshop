import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "./_components/SiteNav";
import { site } from "@/content/site";

// Runs before the page paints. Applies the visitor's saved light/dark choice
// so dark mode never flashes white first. Light is the default.
const themeScript = `try{if(localStorage.getItem("theme")==="dark"){document.documentElement.setAttribute("data-theme","dark")}}catch(e){}`;

export const metadata: Metadata = {
  title: site.name,
  description: site.tagline,
};

/**
 * Root layout — wraps every route with the shared navigation and footer.
 * The navigation gives the landing ↔ catalog ↔ auth path (Requirement 1.2).
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: the script below may add data-theme="dark"
    // to <html> before React loads. That is expected, not an error.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SiteNav />
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="container">
            © {new Date().getFullYear()} {site.name}
          </div>
        </footer>
      </body>
    </html>
  );
}
