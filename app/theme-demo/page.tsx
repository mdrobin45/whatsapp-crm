"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/Dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import Link from "next/link";
import { MessageSquare, Plus, UserPlus, Palette, Type, Layout, Settings, Sun, Moon, ArrowLeft } from "lucide-react";

export default function ThemeDemo() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
                {/* Header */}
                <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-soft">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-primary">WhatsApp CRM</h1>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest">Unified Design System</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link href="/">
                                <Button variant="ghost" size="sm">
                                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={toggleDarkMode}
                                className="w-10 h-10 p-0 rounded-full"
                            >
                                {darkMode ? <Sun className="w-4 h-4 text-warning" /> : <Moon className="w-4 h-4 text-primary" />}
                            </Button>
                        </div>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-12 space-y-20">
                    {/* Introduction */}
                    <section className="space-y-4 text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold tracking-tight">Design System & Components</h2>
                        <p className="text-lg text-muted-foreground">
                            A premium, high-performance UI kit built directly with Radix UI primitives and Tailwind CSS v4.
                            Every component is meticulously styled to follow the official WhatsApp brand identity.
                        </p>
                    </section>

                    {/* Color System */}
                    <section className="space-y-10">
                        <div className="flex items-center gap-3 border-b border-border pb-4">
                            <Palette className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">Color Palette</h2>
                        </div>

                        <div className="grid gap-8">
                            {/* Primary Green */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Primary Green (WhatsApp Logo)</h3>
                                <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-11 gap-3">
                                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                        <div key={shade} className="group cursor-pointer">
                                            <div className={`h-16 rounded-xl bg-primary-${shade} border border-black/5 shadow-sm group-hover:scale-105 transition-transform`} />
                                            <p className="text-[10px] text-center mt-2 font-mono text-muted-foreground">{shade}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Teal Scale */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Dark Teal (WhatsApp Pro)</h3>
                                <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-11 gap-3">
                                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                                        <div key={shade} className="group">
                                            <div className={`h-16 rounded-xl bg-teal-${shade} border border-black/5 shadow-sm group-hover:scale-105 transition-transform`} />
                                            <p className="text-[10px] text-center mt-2 font-mono text-muted-foreground">{shade}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Semantic Boxes */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
                            <div className="p-6 rounded-2xl bg-primary text-primary-foreground shadow-wa">
                                <h4 className="font-bold mb-1">Primary</h4>
                                <p className="text-xs opacity-80">--color-primary</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-secondary text-secondary-foreground shadow-wa">
                                <h4 className="font-bold mb-1">Secondary</h4>
                                <p className="text-xs opacity-80">--color-secondary</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-accent text-accent-foreground border border-black/5 shadow-wa">
                                <h4 className="font-bold mb-1">Accent</h4>
                                <p className="text-xs opacity-80">--color-accent</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card text-foreground border border-border shadow-wa">
                                <h4 className="font-bold mb-1">Surface</h4>
                                <p className="text-xs opacity-80">--color-card</p>
                            </div>
                        </div>
                    </section>

                    {/* Typography */}
                    <section className="space-y-10">
                        <div className="flex items-center gap-3 border-b border-border pb-4">
                            <Type className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">Typography</h2>
                        </div>

                        <div className="p-8 rounded-3xl bg-card border border-border space-y-8 shadow-inner-wa">
                            <div className="space-y-2">
                                <h1 className="text-5xl font-bold">Heading 1 - Modern Sans</h1>
                                <p className="text-xs text-muted-foreground font-mono">text-5xl font-bold</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-4xl font-bold text-primary">Heading 2 - WhatsApp Green</h2>
                                <p className="text-xs text-muted-foreground font-mono">text-4xl font-bold text-primary</p>
                            </div>
                            <div className="space-y-2 border-t border-border pt-6">
                                <p className="text-lg leading-relaxed text-foreground">
                                    The quick brown fox jumps over the lazy dog. WhatsApp CRM uses a primary sans-serif
                                    stack optimized for readability and clarity.
                                </p>
                                <p className="text-xs text-muted-foreground font-mono">text-lg leading-relaxed</p>
                            </div>
                        </div>
                    </section>

                    {/* Interactive Components */}
                    <section className="space-y-10">
                        <div className="flex items-center gap-3 border-b border-border pb-4">
                            <Layout className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">Radix UI Components</h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Buttons Column */}
                            <div className="space-y-8">
                                <h3 className="text-lg font-semibold">Custom Buttons</h3>
                                <div className="flex flex-wrap gap-4">
                                    <Button>Primary Action</Button>
                                    <Button variant="secondary">Teal Support</Button>
                                    <Button variant="outline">Outline</Button>
                                    <Button variant="destructive">Critical Error</Button>
                                    <Button variant="ghost">Soft Hover</Button>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <Button size="sm">Small</Button>
                                    <Button size="md">Medium</Button>
                                    <Button size="lg">Large Premium</Button>
                                    <Button size="icon" className="rounded-full"><Plus /></Button>
                                </div>
                            </div>

                            {/* Dialog Column */}
                            <div className="space-y-8">
                                <h3 className="text-lg font-semibold">Premium Modals</h3>
                                <div className="p-10 rounded-3xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-dashed border-border">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button size="lg" className="shadow-wa animate-pulse hover:animate-none">
                                                <UserPlus className="w-5 h-5 mr-2" /> Launch Dialog Demo
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Add New Contact</DialogTitle>
                                                <DialogDescription>
                                                    Create a new lead in your CRM. This will sync with your WhatsApp device automatically.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Customer Name</label>
                                                    <input className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="John Doe" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">WhatsApp Number</label>
                                                    <input className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="+1 (555) 000-0000" />
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <DialogClose asChild>
                                                    <Button variant="ghost">Cancel</Button>
                                                </DialogClose>
                                                <Button className="px-8 shadow-wa">Save Customer</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </div>

                        {/* Tabs Example - Dashboard Style */}
                        <div className="space-y-8 pt-10">
                            <h3 className="text-lg font-semibold">Unified Navigation (Radix Tabs)</h3>
                            <Tabs defaultValue="overview" className="w-full">
                                <TabsList className="mb-6 p-1.5 bg-muted/50 rounded-2xl border border-border">
                                    <TabsTrigger value="overview" className="px-8 py-2.5 rounded-xl">Overview</TabsTrigger>
                                    <TabsTrigger value="contacts" className="px-8 py-2.5 rounded-xl">Contacts</TabsTrigger>
                                    <TabsTrigger value="settings" className="px-8 py-2.5 rounded-xl">Settings</TabsTrigger>
                                </TabsList>

                                <TabsContent value="overview" className="animate-in fade-in duration-500">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {[
                                            { label: "Active Chats", value: "1,284", delta: "+12.5%", color: "primary" },
                                            { label: "Success Rate", value: "98.2%", delta: "+2.1%", color: "teal" },
                                            { label: "Response Time", value: "2.4m", delta: "-14%", color: "blue" },
                                        ].map((stat, i) => (
                                            <div key={i} className="p-6 rounded-3xl bg-card border border-border shadow-soft">
                                                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                                                <div className="flex items-end justify-between mt-2">
                                                    <h4 className="text-3xl font-bold">{stat.value}</h4>
                                                    <span className={`text-xs font-bold px-2 py-1 rounded-lg bg-${stat.color}-50 text-${stat.color}-600`}>
                                                        {stat.delta}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="contacts" className="animate-in fade-in slide-in-from-top-2 duration-500">
                                    <div className="p-12 text-center rounded-3xl bg-card border border-border border-dashed">
                                        <UserPlus className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                                        <h4 className="text-xl font-bold mb-2">Manage Your Database</h4>
                                        <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                                            All your WhatsApp contacts are automatically imported and synced with the CRM dashboard.
                                        </p>
                                        <Button variant="secondary">View Full Contact List</Button>
                                    </div>
                                </TabsContent>

                                <TabsContent value="settings" className="animate-in fade-in zoom-in-95 duration-500">
                                    <div className="p-8 rounded-3xl bg-card border border-border shadow-soft space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-bold">Dark Mode Sync</h4>
                                                <p className="text-sm text-muted-foreground">Automatically track system appearance preferences.</p>
                                            </div>
                                            <Button variant="outline" size="sm" onClick={toggleDarkMode}>Toggle System</Button>
                                        </div>
                                        <div className="flex items-center justify-between border-t border-border pt-6">
                                            <div>
                                                <h4 className="font-bold">Notifications</h4>
                                                <p className="text-sm text-muted-foreground">Get real-time alerts for incoming WhatsApp messages.</p>
                                            </div>
                                            <div className="w-12 h-6 rounded-full bg-primary relative px-1 flex items-center">
                                                <div className="w-4 h-4 rounded-full bg-white ml-auto shadow-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="border-t border-border bg-card mt-24">
                    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-primary" />
                            <p className="text-sm font-semibold">WhatsApp CRM Dashboard</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Built with Next.js, Radix UI, & Tailwind CSS v4 • Premium Design System
                        </p>
                        <div className="flex gap-4">
                            <Button variant="ghost" size="sm">Docs</Button>
                            <Button variant="ghost" size="sm">Support</Button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

// End of file
