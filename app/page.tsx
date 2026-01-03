import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="wa-gradient-primary text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold">
              WhatsApp CRM Dashboard
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              A modern, feature-rich CRM solution built with Next.js and Tailwind CSS,
              featuring WhatsApp&apos;s signature brand colors and design language.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                href="/theme-demo"
                className="px-8 py-4 rounded-lg bg-white text-primary-600 hover:bg-neutral-100 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                🎨 View Design System
              </Link>
              <a
                href="/THEMING.md"
                className="px-8 py-4 rounded-lg border-2 border-white text-white hover:bg-white/10 transition-all duration-200 font-semibold"
              >
                📚 Documentation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Theme Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-lg bg-card border border-border shadow-md hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp Colors</h3>
              <p className="text-muted-foreground">
                Official WhatsApp brand colors with full 50-950 scales for every variant.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-lg bg-card border border-border shadow-md hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-lg bg-teal-600/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🌙</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dark Mode</h3>
              <p className="text-muted-foreground">
                Automatic dark mode support with carefully crafted dark theme colors.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-lg bg-card border border-border shadow-md hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tailwind v4</h3>
              <p className="text-muted-foreground">
                Built with the latest Tailwind CSS v4 using modern @theme directive.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-lg bg-card border border-border shadow-md hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-lg bg-accent-200/50 flex items-center justify-center mb-4">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Component Ready</h3>
              <p className="text-muted-foreground">
                Pre-styled patterns for buttons, cards, forms, badges, and more.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-lg bg-card border border-border shadow-md hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive</h3>
              <p className="text-muted-foreground">
                Mobile-first design with responsive utilities for all screen sizes.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-lg bg-card border border-border shadow-md hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessible</h3>
              <p className="text-muted-foreground">
                Semantic colors with proper contrast ratios for accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Color Preview Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Color Palette Preview</h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-primary-500 shadow-md"></div>
                <p className="text-sm font-medium text-center">Primary Green</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-teal-600 shadow-md"></div>
                <p className="text-sm font-medium text-center">Teal Dark</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-teal-500 shadow-md"></div>
                <p className="text-sm font-medium text-center">Teal Medium</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-accent-200 shadow-md"></div>
                <p className="text-sm font-medium text-center">Accent Green</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg bg-blue-500 shadow-md"></div>
                <p className="text-sm font-medium text-center">Accent Blue</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Explore?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out the interactive theme demo to see all components, colors, and patterns in action.
          </p>
          <Link
            href="/theme-demo"
            className="inline-block px-8 py-4 rounded-lg wa-gradient-primary text-white hover:shadow-xl transition-all duration-200 font-semibold shadow-lg"
          >
            Launch Theme Demo →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-bold text-lg text-primary-600">WhatsApp CRM</h3>
              <p className="text-sm text-muted-foreground">Built with Next.js & Tailwind CSS v4</p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/theme-demo" className="text-muted-foreground hover:text-foreground transition-colors">
                Theme Demo
              </Link>
              <a href="/THEMING.md" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

