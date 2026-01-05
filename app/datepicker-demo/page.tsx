"use client";

import { Button } from "@/components/Button";
import { DatePicker, DateRangePicker } from "@/components/DatePicker";
import { ArrowLeft, Calendar as CalendarIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DatePickerDemo() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [dateRange, setDateRange] = useState<{ from: Date | undefined; to?: Date | undefined } | undefined>({
        from: new Date(2026, 0, 1),
        to: new Date(2026, 0, 15),
    });

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-soft">
                            <CalendarIcon className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-primary">Date Picker Demo</h1>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest">UntitledUI Style</p>
                        </div>
                    </div>

                    <Link href="/theme-demo">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Theme Demo
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
                {/* Introduction */}
                <section className="space-y-4">
                    <h2 className="text-4xl font-extrabold tracking-tight">Date Picker Components</h2>
                    <p className="text-lg text-muted-foreground">
                        Premium date picker components built with react-day-picker and Radix UI Popover,
                        styled to match the UntitledUI design system.
                    </p>
                </section>

                {/* Single Date Picker */}
                <section className="space-y-6">
                    <div className="border-b border-border pb-4">
                        <h3 className="text-2xl font-bold">Single Date Picker</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Select a single date with a beautiful calendar interface
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="p-6 rounded-2xl bg-card border border-border shadow-soft space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Select Date</label>
                                    <DatePicker
                                        date={selectedDate}
                                        onSelect={setSelectedDate}
                                        placeholder="Choose a date"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Disabled State</label>
                                    <DatePicker
                                        date={undefined}
                                        disabled={true}
                                        placeholder="Date picker is disabled"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-6 rounded-2xl bg-muted/30 border border-dashed border-border">
                                <h4 className="font-semibold mb-3">Selected Date Info</h4>
                                <div className="space-y-2 font-mono text-sm">
                                    <div>
                                        <span className="text-muted-foreground">Date:</span>{" "}
                                        <span className="text-primary font-bold">
                                            {selectedDate ? selectedDate.toLocaleDateString() : "None"}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground">ISO String:</span>{" "}
                                        <span className="text-xs break-all">
                                            {selectedDate ? selectedDate.toISOString() : "None"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-accent/20 border border-accent text-xs">
                                <p className="font-semibold mb-2">Usage Example:</p>
                                <pre className="text-[10px] leading-relaxed overflow-x-auto">
{`<DatePicker
  date={date}
  onSelect={setDate}
  placeholder="Pick a date"
/>`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Date Range Picker */}
                <section className="space-y-6">
                    <div className="border-b border-border pb-4">
                        <h3 className="text-2xl font-bold">Date Range Picker</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Select a range of dates with dual calendar view
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="p-6 rounded-2xl bg-card border border-border shadow-soft space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Select Date Range</label>
                                    <DateRangePicker
                                        dateRange={dateRange}
                                        onSelect={setDateRange}
                                        placeholder="Choose date range"
                                    />
                                </div>

                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            const today = new Date();
                                            const nextWeek = new Date(today);
                                            nextWeek.setDate(today.getDate() + 7);
                                            setDateRange({ from: today, to: nextWeek });
                                        }}
                                    >
                                        Next 7 Days
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            const today = new Date();
                                            const nextMonth = new Date(today);
                                            nextMonth.setMonth(today.getMonth() + 1);
                                            setDateRange({ from: today, to: nextMonth });
                                        }}
                                    >
                                        Next Month
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setDateRange(undefined)}
                                    >
                                        Clear
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-6 rounded-2xl bg-muted/30 border border-dashed border-border">
                                <h4 className="font-semibold mb-3">Date Range Info</h4>
                                <div className="space-y-2 font-mono text-sm">
                                    <div>
                                        <span className="text-muted-foreground">From:</span>{" "}
                                        <span className="text-primary font-bold">
                                            {dateRange?.from ? dateRange.from.toLocaleDateString() : "None"}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground">To:</span>{" "}
                                        <span className="text-primary font-bold">
                                            {dateRange?.to ? dateRange.to.toLocaleDateString() : "None"}
                                        </span>
                                    </div>
                                    {dateRange?.from && dateRange?.to && (
                                        <div className="pt-2 border-t border-border mt-2">
                                            <span className="text-muted-foreground">Duration:</span>{" "}
                                            <span className="font-bold">
                                                {Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))} days
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-accent/20 border border-accent text-xs">
                                <p className="font-semibold mb-2">Usage Example:</p>
                                <pre className="text-[10px] leading-relaxed overflow-x-auto">
{`<DateRangePicker
  dateRange={range}
  onSelect={setRange}
  placeholder="Pick range"
/>`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="space-y-6">
                    <div className="border-b border-border pb-4">
                        <h3 className="text-2xl font-bold">Features</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-6 rounded-xl bg-card border border-border">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <CalendarIcon className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">Radix UI Popover</h4>
                            <p className="text-sm text-muted-foreground">
                                Built on Radix UI primitives for accessibility and smooth animations
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-card border border-border">
                            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                                <CalendarIcon className="w-5 h-5 text-secondary" />
                            </div>
                            <h4 className="font-semibold mb-2">react-day-picker</h4>
                            <p className="text-sm text-muted-foreground">
                                Powerful and flexible date selection with full TypeScript support
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-card border border-border">
                            <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center mb-4">
                                <CalendarIcon className="w-5 h-5 text-accent-foreground" />
                            </div>
                            <h4 className="font-semibold mb-2">UntitledUI Style</h4>
                            <p className="text-sm text-muted-foreground">
                                Premium design matching your existing component library
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
