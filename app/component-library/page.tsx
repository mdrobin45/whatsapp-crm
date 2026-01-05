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
   Box,
   Calendar,
   Layers,
   List,
   Loader2,
   MessageSquare,
   MousePointerClick,
   Sidebar as SidebarIcon,
   Sliders,
   Table as TableIcon,
   Type
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type ComponentSection = 
  | "buttons"
  | "inputs"
  | "calendar"
  | "datepicker"
  | "daterange"
  | "select"
  | "slider"
  | "spinner"
  | "table"
  | "dialog"
  | "sidebar";

export default function ComponentLibrary() {
  const [activeSection, setActiveSection] = useState<ComponentSection>("buttons");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to?: Date | undefined }>();
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        <div className="p-4 border-b border-border">
          <Link href="/">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
          </Link>
        </div>

        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-sm">Component Library</h2>
              <p className="text-xs text-muted-foreground">UI Components</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-2 space-y-1">
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Form Controls
            </div>
            <button
              onClick={() => setActiveSection("buttons")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === "buttons" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <MousePointerClick className="w-4 h-4" />
              Buttons
            </button>
            <button
              onClick={() => setActiveSection("inputs")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === "inputs" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <Type className="w-4 h-4" />
              Inputs
            </button>
            <button
              onClick={() => setActiveSection("select")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === "select" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <List className="w-4 h-4" />
              Select
            </button>
            <button
              onClick={() => setActiveSection("slider")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === "slider" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <Sliders className="w-4 h-4" />
              Slider
            </button>

            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-4">
              Date & Time
            </div>
            <button
              onClick={() => setActiveSection("calendar")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === "calendar" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Calendar
            </button>
            <button
              onClick={() => setActiveSection("datepicker")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === "datepicker" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Date Picker
            </button>
            <button
              onClick={() => setActiveSection("daterange")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === "daterange" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Date Range Picker
            </button>

            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-4">
              Feedback
            </div>
            <button
              onClick={() => setActiveSection("spinner")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === "spinner" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <Loader2 className="w-4 h-4" />
              Spinner
            </button>
            <button
              onClick={() => setActiveSection("dialog")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === "dialog" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <Layers className="w-4 h-4" />
              Dialog
            </button>

            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-4">
              Layout
            </div>
            <button
              onClick={() => setActiveSection("sidebar")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === "sidebar" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <SidebarIcon className="w-4 h-4" />
              Sidebar
            </button>
            <button
              onClick={() => setActiveSection("table")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === "table" 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
            >
              <TableIcon className="w-4 h-4" />
              Table
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-8 space-y-8">
          {/* Buttons Section */}
          {activeSection === "buttons" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Buttons</h1>
                <p className="text-lg text-muted-foreground">
                  Versatile button component with multiple variants and sizes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                  <h3 className="font-semibold">Variants</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                  <h3 className="font-semibold">Sizes</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                  <h3 className="font-semibold">With Icons</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      With Icon
                    </Button>
                    <Button variant="outline" disabled>
                      <Spinner size="sm" className="mr-2" />
                      Loading
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Inputs Section */}
          {activeSection === "inputs" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Input</h1>
                <p className="text-lg text-muted-foreground">
                  Text input component with various states and configurations.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="disabled">Disabled</Label>
                  <Input id="disabled" disabled placeholder="Disabled input" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">File Upload</Label>
                  <Input id="file" type="file" />
                </div>
              </div>
            </div>
          )}

          {/* Select Section */}
          {activeSection === "select" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Select</h1>
                <p className="text-lg text-muted-foreground">
                  Dropdown select component built with Radix UI.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border space-y-6">
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
              </div>
            </div>
          )}

          {/* Slider Section */}
          {activeSection === "slider" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Slider</h1>
                <p className="text-lg text-muted-foreground">
                  Range slider component for numeric input.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Volume</Label>
                    <span className="text-sm font-mono font-bold text-primary">{sliderValue}%</span>
                  </div>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Calendar Section */}
          {activeSection === "calendar" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Calendar</h1>
                <p className="text-lg text-muted-foreground">
                  Standalone calendar component using react-day-picker.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border w-fit">
                <div className="inline-block">
                  <div className="text-sm text-muted-foreground mb-4">
                    This is the base Calendar component used in Date Pickers
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Date Picker Section */}
          {activeSection === "datepicker" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Date Picker</h1>
                <p className="text-lg text-muted-foreground">
                  Single date selection with calendar popover.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border space-y-6 max-w-md">
                <div className="space-y-2">
                  <Label>Select Date</Label>
                  <DatePicker
                    date={selectedDate}
                    onSelect={setSelectedDate}
                    placeholder="Pick a date"
                  />
                </div>
                {selectedDate && (
                  <div className="p-4 rounded-lg bg-muted/30 text-sm">
                    <div className="font-semibold mb-1">Selected Date:</div>
                    <div className="font-mono text-xs">{selectedDate.toLocaleDateString()}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Date Range Picker Section */}
          {activeSection === "daterange" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Date Range Picker</h1>
                <p className="text-lg text-muted-foreground">
                  Select a range of dates with dual calendar view.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border space-y-6 max-w-md">
                <div className="space-y-2">
                  <Label>Select Date Range</Label>
                  <DateRangePicker
                    dateRange={dateRange}
                    onSelect={setDateRange}
                    placeholder="Pick a date range"
                  />
                </div>
                {dateRange?.from && (
                  <div className="p-4 rounded-lg bg-muted/30 text-sm">
                    <div className="font-semibold mb-2">Selected Range:</div>
                    <div className="space-y-1 font-mono text-xs">
                      <div>From: {dateRange.from.toLocaleDateString()}</div>
                      {dateRange.to && <div>To: {dateRange.to.toLocaleDateString()}</div>}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Spinner Section */}
          {activeSection === "spinner" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Spinner</h1>
                <p className="text-lg text-muted-foreground">
                  Loading state indicators in multiple sizes.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-end gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="sm" />
                    <span className="text-xs text-muted-foreground font-semibold">Small</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="md" />
                    <span className="text-xs text-muted-foreground font-semibold">Medium</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="lg" />
                    <span className="text-xs text-muted-foreground font-semibold">Large</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Dialog Section */}
          {activeSection === "dialog" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Dialog</h1>
                <p className="text-lg text-muted-foreground">
                  Modal dialog component built with Radix UI.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Title</DialogTitle>
                      <DialogDescription>
                        This is a dialog description. You can add any content here.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-sm text-muted-foreground">
                        Dialog content goes here. You can add forms, text, or any other components.
                      </p>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button>Confirm</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          )}

          {/* Table Section */}
          {activeSection === "table" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Table</h1>
                <p className="text-lg text-muted-foreground">
                  Data table component for displaying structured information.
                </p>
              </div>

              <div className="rounded-xl border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "WA-01", name: "Robin Smith", status: "Active" },
                      { id: "WA-02", name: "Sarah Connor", status: "Pending" },
                      { id: "WA-03", name: "John Wick", status: "Archived" },
                    ].map((row) => (
                      <TableRow key={row.id}>
                        <TableCell className="font-mono font-medium">{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {/* Sidebar Section */}
          {activeSection === "sidebar" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Sidebar</h1>
                <p className="text-lg text-muted-foreground">
                  Collapsible sidebar component for dashboard layouts.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                <p className="text-sm">
                  The Sidebar component provides a collapsible navigation menu with smooth animations.
                  It includes support for:
                </p>
                <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Expand/collapse functionality</li>
                  <li>Navigation items with icons and badges</li>
                  <li>Grouped sections</li>
                  <li>Header and footer areas</li>
                  <li>Context API for state management</li>
                </ul>
                <Link href="/sidebar-demo">
                  <Button className="mt-4">View Full Sidebar Demo</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
