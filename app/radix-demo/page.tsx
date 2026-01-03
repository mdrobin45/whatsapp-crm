"use client";

import { Button } from "@/components/Button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/Dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import Link from "next/link";
import { MessageSquare, Plus, UserPlus } from "lucide-react";

export default function RadixDemo() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border bg-card">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-primary">Radix UI + WhatsApp Theme</h1>
                            <p className="text-xs text-muted-foreground">Custom components built directly from Radix primitives</p>
                        </div>
                    </div>
                    <Link href="/">
                        <Button variant="outline">← Back to Home</Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 space-y-12">
                {/* Buttons section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">Custom Buttons</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button>Primary Button</Button>
                        <Button variant="secondary">Secondary (Teal)</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="ghost">Ghost Button</Button>
                    </div>
                </section>

                {/* Dialog section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">Radix Dialog (Modal)</h2>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <UserPlus className="w-4 h-4 mr-2" /> Open Add Contact Dialog
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add New Contact</DialogTitle>
                                <DialogDescription>
                                    Enter the phone number and name to add a new WhatsApp contact.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium">Name</label>
                                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium">Phone Number</label>
                                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="+1 (555) 000-0000" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => { }}>Cancel</Button>
                                <Button>Save Contact</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </section>

                {/* Tabs section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">Radix Tabs</h2>
                    <Tabs defaultValue="contacts" className="w-full max-w-[600px]">
                        <TabsList>
                            <TabsTrigger value="contacts">Contacts</TabsTrigger>
                            <TabsTrigger value="recent">Recent Chats</TabsTrigger>
                            <TabsTrigger value="settings">Settings</TabsTrigger>
                        </TabsList>
                        <TabsContent value="contacts" className="p-4 border border-border rounded-lg bg-card">
                            <p className="text-sm text-muted-foreground">Successfully filtered contacts will appear here.</p>
                        </TabsContent>
                        <TabsContent value="recent" className="p-4 border border-border rounded-lg bg-card">
                            <p className="text-sm text-muted-foreground">Your recent WhatsApp conversations.</p>
                        </TabsContent>
                        <TabsContent value="settings" className="p-4 border border-border rounded-lg bg-card">
                            <p className="text-sm text-muted-foreground">Preferences and notifications.</p>
                        </TabsContent>
                    </Tabs>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-border bg-card mt-12">
                <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
                    <p>Custom components built with Radix UI + WhatsApp CRM Theme</p>
                </div>
            </footer>
        </div>
    );
}
