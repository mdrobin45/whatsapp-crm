"use client";

import { Button } from "@/components/Button";
import { DatePicker, DateRangePicker } from "@/components/DatePicker";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/Dialog";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/Select";
import { Slider } from "@/components/Slider";
import { Spinner } from "@/components/Spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/Table";
import {
   ArrowLeft,
   CheckCircle2,
   Layout,
   Loader2,
   MessageSquare,
   Moon,
   Palette,
   Plus,
   Settings,
   SlidersHorizontal,
   Sun,
   Table as TableIcon
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ThemeDemo() {
    const [darkMode, setDarkMode] = useState(false);
    const [sliderValue, setSliderValue] = useState([50]);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [dateRange, setDateRange] = useState<{ from: Date | undefined; to?: Date | undefined } | undefined>();

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="min-h-screen bg-background text-foreground transition-colors duration-300 pb-20">
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
                        <h2 className="text-5xl font-extrabold tracking-tight">Design System & Components</h2>
                        <p className="text-lg text-muted-foreground">
                            A premium, high-performance UI kit built directly with Radix UI primitives and Tailwind CSS v4.
                            Meticulously crafted for the ultimate WhatsApp CRM experience.
                        </p>
                    </section>

                    {/* Color System */}
                    <section className="space-y-10">
                        <div className="flex items-center gap-3 border-b border-border pb-4">
                            <Palette className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">Color Palette</h2>
                        </div>

                        <div className="grid gap-12">
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
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

                    {/* Core Components */}
                    <section className="space-y-12">
                        <div className="flex items-center gap-3 border-b border-border pb-4">
                            <Layout className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">Base Components</h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Buttons & Loading */}
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary" /> Multi-variant Buttons
                                    </h3>
                                    <div className="flex flex-wrap gap-4">
                                        <Button>Primary</Button>
                                        <Button variant="secondary">Secondary</Button>
                                        <Button variant="outline">Outline</Button>
                                        <Button variant="destructive">Destructive</Button>
                                        <Button variant="ghost">Ghost</Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold flex items-center gap-2">
                                        <Loader2 className="w-5 h-5 text-primary" /> Loading States (Spinners)
                                    </h3>
                                    <div className="flex items-end gap-8">
                                        <div className="flex flex-col items-center gap-2">
                                            <Spinner size="sm" />
                                            <span className="text-[10px] text-muted-foreground uppercase font-bold">Small</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <Spinner size="md" />
                                            <span className="text-[10px] text-muted-foreground uppercase font-bold">Medium</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <Spinner size="lg" />
                                            <span className="text-[10px] text-muted-foreground uppercase font-bold">Large</span>
                                        </div>
                                        <Button disabled className="gap-2">
                                            <Spinner size="sm" className="border-t-white" /> Processing
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Forms & Inputs */}
                            <div className="space-y-10 p-8 rounded-3xl bg-card border border-border shadow-soft">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Settings className="w-5 h-5 text-primary" /> Form Architecture
                                </h3>

                                <div className="grid gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" placeholder="Enter your full name" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Select Region</Label>
                                        <Select defaultValue="na">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a region" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="na">North America</SelectItem>
                                                    <SelectItem value="eu">Europe</SelectItem>
                                                    <SelectItem value="asia">Asia Pacific</SelectItem>
                                                    <SelectItem value="sa">South America</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-4">
                                        <Label>Select a Date</Label>
                                        <DatePicker
                                            date={selectedDate}
                                            onSelect={setSelectedDate}
                                            placeholder="Pick a date"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Select Date Range</Label>
                                        <DateRangePicker
                                            dateRange={dateRange}
                                            onSelect={setDateRange}
                                            placeholder="Pick a date range"
                                        />
                                    </div>

                                    <div className="space-y-4 pt-2">
                                        <div className="flex items-center justify-between">
                                            <Label>Volume Sensitivity</Label>
                                            <span className="text-xs font-mono font-bold text-primary">{sliderValue}%</span>
                                        </div>
                                        <Slider
                                            defaultValue={[50]}
                                            max={100}
                                            step={1}
                                            onValueChange={setSliderValue}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Tables & Complex Data */}
                    <section className="space-y-10">
                        <div className="flex items-center gap-3 border-b border-border pb-4">
                            <TableIcon className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">Data visualization (Table)</h2>
                        </div>

                        <div className="space-y-6">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">ID</TableHead>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>Session Status</TableHead>
                                        <TableHead>Last Message</TableHead>
                                        <TableHead className="text-right">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { id: "WA-01", name: "Robin Smith", status: "Active", last: "Hey, are you there?", color: "success" },
                                        { id: "WA-02", name: "Sarah Connor", status: "Pending", last: "Will arrive in 5 mins", color: "warning" },
                                        { id: "WA-03", name: "John Wick", status: "Archived", last: "Order confirmed.", color: "muted-foreground" },
                                        { id: "WA-04", name: "Diana Prince", status: "Active", last: "Sent a photo", color: "success" },
                                    ].map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell className="font-mono font-medium">{row.id}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                                                        {row.name.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                    <span className="font-semibold">{row.name}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-2 h-2 rounded-full bg-${row.color === 'success' ? 'primary' : row.color === 'warning' ? 'warning' : 'muted'}`} />
                                                    <span className="text-xs font-medium">{row.status}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-muted-foreground">{row.last}</TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="sm">View</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </section>

                    {/* Interactive Modals (Dialog) */}
                    <section className="space-y-10">
                        <div className="flex items-center gap-3 border-b border-border pb-4">
                            <SlidersHorizontal className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold">Advanced Overlays</h2>
                        </div>

                        <div className="p-12 rounded-3xl bg-muted/30 border border-dashed border-border flex flex-col items-center gap-6">
                            <p className="text-center text-muted-foreground max-w-md">
                                Radix Dialogs are built with premium "enter" animations and backdrop blurs for a high-end application feeling.
                            </p>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button size="lg" className="shadow-wa gap-2">
                                        <Plus className="w-5 h-5" /> Create New CRM Instance
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Configure Instance</DialogTitle>
                                        <DialogDescription>
                                            Setup your new WhatsApp CRM instance. This will prepare the database and API endpoints.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-6 py-4">
                                        <div className="space-y-2">
                                            <Label>Instance Name</Label>
                                            <Input placeholder="e.g. Sales Team Alpha" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Default Response Language</Label>
                                            <Select defaultValue="en">
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="en">English (US)</SelectItem>
                                                    <SelectItem value="es">Spanish</SelectItem>
                                                    <SelectItem value="fr">French</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant="outline">Dismiss</Button>
                                        </DialogClose>
                                        <Button className="px-8 shadow-wa">Initialize</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="border-t border-border bg-card mt-24">
                    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <p className="font-bold">WhatsApp CRM <span className="text-primary">v4.0</span></p>
                        </div>
                        <div className="flex gap-8 text-sm font-medium text-muted-foreground">
                            <Link href="/datepicker-demo" className="hover:text-primary transition-colors">Date Picker</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Documentation</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Components</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Github</Link>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            © 2026 Developed for Advanced CRM Experience.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
