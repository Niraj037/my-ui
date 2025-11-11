import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-winedusk/40 mt-16 pt-8 pb-6">
      <div className="max-w-4xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              <span className="text-ember">my</span>ui
            </h3>
            <p className="text-fineshyt/60 text-sm">
              A dark, minimalist design system built on the Quintet palette.
            </p>
            <p className="text-fineshyt/50 text-xs">
              v1.0.0-beta.1
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-fineshyt/80">explore</h4>
            <ul className="space-y-2 text-sm text-fineshyt/60">
              <li>
                <Link href="/showcase" className="hover:text-ember transition-colors duration-300">
                  Core Elements
                </Link>
              </li>
              <li>
                <Link href="/containers" className="hover:text-ember transition-colors duration-300">
                  Containers
                </Link>
              </li>
              <li>
                <Link href="/navigation" className="hover:text-ember transition-colors duration-300">
                  Navigation
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-fineshyt/80">connect</h4>
            <ul className="space-y-2 text-sm text-fineshyt/60">
              <li>
                <a 
                  href="https://github.com/Niraj037/my-ui" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-ember transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Niraj037/my-ui/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-ember transition-colors duration-300"
                >
                  Issues
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Niraj037/my-ui#readme" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-ember transition-colors duration-300"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-winedusk/20 space-y-2">
          <p className="text-fineshyt/70 text-sm">
            Made by Niraj, For WithinBrackets & other projects by Niraj
          </p>
          <p className="text-fineshyt/50 text-xs">
            Copyright © 2024 - {new Date().getFullYear()} • MIT License
          </p>
        </div>
      </div>
    </footer>
  );
}
