"use client";

import { Button } from "@/components/Button";
import { FormControl, FormField, FormLabel, FormMessage, FormRoot, FormSubmit, Input } from "@/components/Input";

export default function RadixFormExample() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-2xl mx-auto space-y-12">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Radix UI Integration</h1>
                    <p className="text-muted-foreground">
                        Your Button and Input components now use Radix UI primitives!
                    </p>
                </div>

                {/* Button Examples with asChild prop */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Enhanced Button Features</h2>
                    <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                        <p className="text-sm text-muted-foreground">
                            The Button now uses <code className="px-1.5 py-0.5 rounded bg-muted">@radix-ui/react-slot</code> for better composition:
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button>Standard Button</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="destructive">Destructive</Button>
                        </div>
                        
                        <div className="pt-4 border-t border-border">
                            <p className="text-sm text-muted-foreground mb-3">
                                Use <code className="px-1.5 py-0.5 rounded bg-muted">asChild</code> to render as a different element:
                            </p>
                            <Button asChild variant="primary">
                                <a href="https://www.radix-ui.com" target="_blank" rel="noopener noreferrer">
                                    Visit Radix UI Docs
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Form Example with Radix UI Form primitives */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Radix UI Form Integration</h2>
                    <div className="p-6 rounded-xl bg-card border border-border">
                        <p className="text-sm text-muted-foreground mb-6">
                            The Input component now exports Radix UI Form primitives for advanced form handling with built-in validation:
                        </p>
                        
                        <FormRoot
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log(data);
                                alert(`Form submitted! Check console for data.`);
                            }}
                            className="space-y-6"
                        >
                            <FormField name="username">
                                <div className="space-y-2">
                                    <FormLabel>Username</FormLabel>
                                    <FormControl asChild>
                                        <Input type="text" required />
                                    </FormControl>
                                    <FormMessage match="valueMissing" className="text-xs text-destructive">
                                        Please enter a username
                                    </FormMessage>
                                </div>
                            </FormField>

                            <FormField name="email">
                                <div className="space-y-2">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl asChild>
                                        <Input type="email" required />
                                    </FormControl>
                                    <FormMessage match="valueMissing" className="text-xs text-destructive">
                                        Please enter your email
                                    </FormMessage>
                                    <FormMessage match="typeMismatch" className="text-xs text-destructive">
                                        Please provide a valid email
                                    </FormMessage>
                                </div>
                            </FormField>

                            <FormSubmit asChild>
                                <Button type="submit" className="w-full">
                                    Submit Form
                                </Button>
                            </FormSubmit>
                        </FormRoot>
                    </div>
                </section>

                {/* Standard Input Usage */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Standard Input Usage</h2>
                    <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                        <p className="text-sm text-muted-foreground">
                            You can still use the Input component standalone as before:
                        </p>
                        <div className="space-y-4">
                            <Input placeholder="Standard text input" />
                            <Input type="password" placeholder="Password input" />
                            <Input type="number" placeholder="Number input" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
