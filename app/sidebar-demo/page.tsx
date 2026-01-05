"use client";

import { Button } from "@/components/Button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarItem, SidebarToggle } from "@/components/Sidebar";
import {
    ArrowLeft,
    BarChart3,
    Bell,
    FileText,
    LayoutDashboard,
    MessageSquare,
    Plus,
    Search,
    Settings,
    User,
    Users
} from "lucide-react";
import Link from "next/link";

export default function SidebarDemo() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar>
        <SidebarToggle />
        
        <SidebarHeader>
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-sm">WhatsApp CRM</h2>
            <p className="text-xs text-muted-foreground">Dashboard</p>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarItem
              icon={<LayoutDashboard className="w-5 h-5" />}
              label="Dashboard"
              href="#"
              active
            />
            <SidebarItem
              icon={<MessageSquare className="w-5 h-5" />}
              label="Messages"
              href="#"
              badge={12}
            />
            <SidebarItem
              icon={<Users className="w-5 h-5" />}
              label="Contacts"
              href="#"
            />
            <SidebarItem
              icon={<BarChart3 className="w-5 h-5" />}
              label="Analytics"
              href="#"
            />
            <SidebarItem
              icon={<FileText className="w-5 h-5" />}
              label="Reports"
              href="#"
            />
          </SidebarGroup>

          <SidebarGroup title="Settings">
            <SidebarItem
              icon={<Bell className="w-5 h-5" />}
              label="Notifications"
              href="#"
              badge={3}
            />
            <SidebarItem
              icon={<Settings className="w-5 h-5" />}
              label="Preferences"
              href="#"
            />
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarItem
            icon={
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <User className="w-4 h-4" />
              </div>
            }
            label="John Doe"
            href="#"
          />
        </SidebarFooter>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/theme-demo">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Theme Demo
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">Dashboard Sidebar Demo</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" /> New
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold">Collapsible Dashboard Sidebar</h2>
              <p className="text-lg text-muted-foreground">
                A fully responsive sidebar component with smooth expand/collapse animations.
                Click the toggle button on the sidebar to see it in action!
              </p>
            </section>

            {/* Features */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold border-b border-border pb-2">Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <LayoutDashboard className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Smooth Animations</h4>
                  <p className="text-sm text-muted-foreground">
                    Expand and collapse with fluid CSS transitions for a premium user experience.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="font-semibold">Badge Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Display notification badges on sidebar items with automatic positioning.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold">Grouped Navigation</h4>
                  <p className="text-sm text-muted-foreground">
                    Organize navigation items into logical groups with optional titles.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-blue-500" />
                  </div>
                  <h4 className="font-semibold">Context API</h4>
                  <p className="text-sm text-muted-foreground">
                    Built with React Context for easy state management across components.
                  </p>
                </div>
              </div>
            </section>

            {/* Usage Example */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold border-b border-border pb-2">Usage Example</h3>
              <div className="p-6 rounded-xl bg-card border border-border">
                <pre className="text-xs overflow-x-auto">
{`<Sidebar>
  <SidebarToggle />
  
  <SidebarHeader>
    <Logo />
    <Title>WhatsApp CRM</Title>
  </SidebarHeader>

  <SidebarContent>
    <SidebarGroup>
      <SidebarItem
        icon={<LayoutDashboard />}
        label="Dashboard"
        href="/dashboard"
        active
      />
      <SidebarItem
        icon={<MessageSquare />}
        label="Messages"
        href="/messages"
        badge={12}
      />
    </SidebarGroup>
  </SidebarContent>

  <SidebarFooter>
    <SidebarItem
      icon={<User />}
      label="Profile"
      href="/profile"
    />
  </SidebarFooter>
</Sidebar>`}
                </pre>
              </div>
            </section>

            {/* Component Props */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold border-b border-border pb-2">Component Props</h3>
              <div className="grid gap-4">
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h4 className="font-semibold mb-2 text-sm">SidebarItem</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground font-mono">
                    <li>• icon: ReactNode - Icon element to display</li>
                    <li>• label: string - Item label text</li>
                    <li>• href?: string - Navigation link (optional)</li>
                    <li>• active?: boolean - Active state styling</li>
                    <li>• badge?: string | number - Notification badge</li>
                    <li>• onClick?: () =&gt; void - Click handler</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h4 className="font-semibold mb-2 text-sm">SidebarGroup</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground font-mono">
                    <li>• title?: string - Optional group title</li>
                    <li>• children: ReactNode - Group content</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
