'use client';

import { useState } from 'react';

export default function ThemeDemo() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="min-h-screen bg-background text-foreground">
                {/* Header */}
                <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-primary-600">WhatsApp CRM</h1>
                            <p className="text-sm text-muted-foreground">Dashboard Theme System</p>
                        </div>
                        <button
                            onClick={toggleDarkMode}
                            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary-600 transition-all duration-200 font-medium"
                        >
                            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                        </button>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-8 space-y-12">
                    {/* Introduction */}
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold">WhatsApp CRM Theme System</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            A comprehensive theming system built with Tailwind CSS v4, featuring WhatsApp&apos;s official brand colors.
                            This demo showcases the complete color palette, typography system, and component styles available for your dashboard.
                        </p>
                    </section>

                    {/* Color Palette */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Color Palette</h2>
                            <p className="text-muted-foreground">Based on official WhatsApp brand colors</p>
                        </div>

                        {/* Primary Green */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold">Primary Green (WhatsApp Logo)</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-2">
                                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                    <div key={shade} className="space-y-1">
                                        <div className={`h-20 rounded-lg bg-primary-${shade} border border-border`} />
                                        <p className="text-xs text-center font-mono">{shade}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Teal */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold">Teal (WhatsApp Dark)</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-2">
                                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                    <div key={shade} className="space-y-1">
                                        <div className={`h-20 rounded-lg bg-teal-${shade} border border-border`} />
                                        <p className="text-xs text-center font-mono">{shade}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Accent Green */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold">Accent Green (Chat Bubble)</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-2">
                                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                    <div key={shade} className="space-y-1">
                                        <div className={`h-20 rounded-lg bg-accent-${shade} border border-border`} />
                                        <p className="text-xs text-center font-mono">{shade}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Blue */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold">Blue (Checkmark)</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-2">
                                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                    <div key={shade} className="space-y-1">
                                        <div className={`h-20 rounded-lg bg-blue-${shade} border border-border`} />
                                        <p className="text-xs text-center font-mono">{shade}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Neutral */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold">Neutral (Chat Background)</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-2">
                                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                    <div key={shade} className="space-y-1">
                                        <div className={`h-20 rounded-lg bg-neutral-${shade} border border-border`} />
                                        <p className="text-xs text-center font-mono">{shade}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Semantic Colors */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Semantic Colors</h2>
                            <p className="text-muted-foreground">Context-aware colors for UI elements</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-6 rounded-lg bg-primary text-primary-foreground">
                                <h3 className="font-semibold mb-2">Primary</h3>
                                <p className="text-sm opacity-90">Main brand color</p>
                            </div>
                            <div className="p-6 rounded-lg bg-secondary text-secondary-foreground">
                                <h3 className="font-semibold mb-2">Secondary</h3>
                                <p className="text-sm opacity-90">Supporting color</p>
                            </div>
                            <div className="p-6 rounded-lg bg-accent text-accent-foreground">
                                <h3 className="font-semibold mb-2">Accent</h3>
                                <p className="text-sm opacity-90">Highlight color</p>
                            </div>
                            <div className="p-6 rounded-lg bg-muted text-muted-foreground">
                                <h3 className="font-semibold mb-2">Muted</h3>
                                <p className="text-sm opacity-90">Subtle background</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-6 rounded-lg bg-success text-success-foreground">
                                <h3 className="font-semibold mb-2">✓ Success</h3>
                                <p className="text-sm opacity-90">Positive actions</p>
                            </div>
                            <div className="p-6 rounded-lg bg-warning text-warning-foreground">
                                <h3 className="font-semibold mb-2">⚠ Warning</h3>
                                <p className="text-sm opacity-90">Caution needed</p>
                            </div>
                            <div className="p-6 rounded-lg bg-destructive text-destructive-foreground">
                                <h3 className="font-semibold mb-2">✕ Error</h3>
                                <p className="text-sm opacity-90">Critical issues</p>
                            </div>
                            <div className="p-6 rounded-lg bg-info text-info-foreground">
                                <h3 className="font-semibold mb-2">ℹ Info</h3>
                                <p className="text-sm opacity-90">Information</p>
                            </div>
                        </div>
                    </section>

                    {/* Typography */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Typography</h2>
                            <p className="text-muted-foreground">Font sizes and styles</p>
                        </div>

                        <div className="space-y-4 p-6 rounded-lg bg-card border border-border">
                            <h1 className="text-5xl font-bold">Heading 1 - 48px</h1>
                            <h2 className="text-4xl font-bold">Heading 2 - 36px</h2>
                            <h3 className="text-3xl font-semibold">Heading 3 - 30px</h3>
                            <h4 className="text-2xl font-semibold">Heading 4 - 24px</h4>
                            <h5 className="text-xl font-medium">Heading 5 - 20px</h5>
                            <h6 className="text-lg font-medium">Heading 6 - 18px</h6>
                            <p className="text-base">Body Text - 16px (Regular weight)</p>
                            <p className="text-sm text-muted-foreground">Small Text - 14px (Muted)</p>
                            <p className="text-xs text-muted-foreground">Extra Small - 12px (Muted)</p>
                        </div>
                    </section>

                    {/* Buttons */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Buttons</h2>
                            <p className="text-muted-foreground">Interactive button styles</p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
                                Primary Button
                            </button>
                            <button className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-teal-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
                                Secondary Button
                            </button>
                            <button className="px-6 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent-300 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
                                Accent Button
                            </button>
                            <button className="px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-medium">
                                Outline Button
                            </button>
                            <button className="px-6 py-3 rounded-lg bg-destructive text-destructive-foreground hover:bg-red-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
                                Destructive Button
                            </button>
                            <button className="px-6 py-3 rounded-lg bg-muted text-muted-foreground hover:bg-neutral-300 transition-all duration-200 font-medium">
                                Muted Button
                            </button>
                        </div>
                    </section>

                    {/* Cards */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Cards</h2>
                            <p className="text-muted-foreground">Content containers</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-6 rounded-lg bg-card border border-border shadow-md hover:shadow-lg transition-all duration-200">
                                <h3 className="text-xl font-semibold mb-2">Basic Card</h3>
                                <p className="text-muted-foreground mb-4">
                                    A simple card with border and shadow effects.
                                </p>
                                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary-600 transition-all duration-200 text-sm font-medium">
                                    Learn More
                                </button>
                            </div>

                            <div className="p-6 rounded-lg wa-gradient-primary text-white shadow-md hover:shadow-lg transition-all duration-200">
                                <h3 className="text-xl font-semibold mb-2">Gradient Card</h3>
                                <p className="opacity-90 mb-4">
                                    Card with WhatsApp primary gradient background.
                                </p>
                                <button className="px-4 py-2 rounded-lg bg-white text-primary-600 hover:bg-neutral-100 transition-all duration-200 text-sm font-medium">
                                    Get Started
                                </button>
                            </div>

                            <div className="p-6 rounded-lg wa-gradient-teal text-white shadow-md hover:shadow-lg transition-all duration-200">
                                <h3 className="text-xl font-semibold mb-2">Teal Gradient</h3>
                                <p className="opacity-90 mb-4">
                                    Card with WhatsApp teal gradient background.
                                </p>
                                <button className="px-4 py-2 rounded-lg bg-white text-teal-600 hover:bg-neutral-100 transition-all duration-200 text-sm font-medium">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Form Elements */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Form Elements</h2>
                            <p className="text-muted-foreground">Input fields and controls</p>
                        </div>

                        <div className="max-w-2xl space-y-4 p-6 rounded-lg bg-card border border-border">
                            <div>
                                <label className="block text-sm font-medium mb-2">Text Input</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Email Input</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Textarea</label>
                                <textarea
                                    placeholder="Enter your message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Select Dropdown</label>
                                <select className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200">
                                    <option>Choose an option</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* Badges */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Badges</h2>
                            <p className="text-muted-foreground">Status indicators and labels</p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                                Primary
                            </span>
                            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                                Secondary
                            </span>
                            <span className="px-3 py-1 rounded-full bg-success text-success-foreground text-sm font-medium">
                                Success
                            </span>
                            <span className="px-3 py-1 rounded-full bg-warning text-warning-foreground text-sm font-medium">
                                Warning
                            </span>
                            <span className="px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-sm font-medium">
                                Error
                            </span>
                            <span className="px-3 py-1 rounded-full bg-info text-info-foreground text-sm font-medium">
                                Info
                            </span>
                            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                                Muted
                            </span>
                        </div>
                    </section>

                    {/* Sidebar Preview */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Sidebar Preview</h2>
                            <p className="text-muted-foreground">Dashboard navigation sidebar</p>
                        </div>

                        <div className="flex gap-4 h-96 rounded-lg overflow-hidden border border-border">
                            <div className="w-64 bg-sidebar text-sidebar-foreground p-4 space-y-2">
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold">WhatsApp CRM</h3>
                                    <p className="text-xs opacity-75">Dashboard</p>
                                </div>
                                <button className="w-full px-4 py-2 rounded-lg bg-sidebar-accent text-sidebar-accent-foreground hover:bg-teal-700 transition-all duration-200 text-left font-medium">
                                    📊 Dashboard
                                </button>
                                <button className="w-full px-4 py-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 text-left">
                                    💬 Messages
                                </button>
                                <button className="w-full px-4 py-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 text-left">
                                    👥 Contacts
                                </button>
                                <button className="w-full px-4 py-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 text-left">
                                    📈 Analytics
                                </button>
                                <button className="w-full px-4 py-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 text-left">
                                    ⚙️ Settings
                                </button>
                            </div>
                            <div className="flex-1 bg-background p-6">
                                <h3 className="text-xl font-semibold mb-4">Main Content Area</h3>
                                <p className="text-muted-foreground">
                                    This is where your dashboard content would appear. The sidebar uses WhatsApp&apos;s dark teal color scheme.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="border-t border-border bg-card mt-12">
                    <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
                        <p>WhatsApp CRM Dashboard Theme System • Built with Tailwind CSS v4</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
