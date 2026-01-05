"use client";

import { cn } from "@/lib/utils";
import {
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Button } from "./Button";

export interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarContextValue {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a Sidebar component");
  }
  return context;
}

export function Sidebar({ className, children }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleCollapsed }}>
      <aside
        className={cn(
          "relative flex flex-col h-screen bg-card border-r border-border transition-all duration-300 ease-in-out",
          isCollapsed ? "w-16" : "w-64",
          className
        )}
      >
        {children}
      </aside>
    </SidebarContext.Provider>
  );
}

export function SidebarHeader({ className, children }: { className?: string; children?: React.ReactNode }) {
  const { isCollapsed } = useSidebar();
  
  return (
    <div className={cn("flex items-center justify-between p-4 border-b border-border", className)}>
      {!isCollapsed && (
        <div className="flex items-center gap-3">
          {children}
        </div>
      )}
      {isCollapsed && (
        <div className="flex items-center justify-center w-full">
          {React.Children.toArray(children)[0]}
        </div>
      )}
    </div>
  );
}

export function SidebarContent({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("flex-1 overflow-y-auto py-4", className)}>
      {children}
    </div>
  );
}

export function SidebarFooter({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("border-t border-border p-4", className)}>
      {children}
    </div>
  );
}

export interface SidebarItemProps {
  icon?: React.ReactNode;
  label: string;
  href?: string;
  active?: boolean;
  badge?: string | number;
  onClick?: () => void;
  className?: string;
}

export function SidebarItem({ 
  icon, 
  label, 
  href, 
  active = false, 
  badge,
  onClick,
  className 
}: SidebarItemProps) {
  const { isCollapsed } = useSidebar();
  
  const content = (
    <>
      {icon && (
        <span className={cn("flex-shrink-0", isCollapsed ? "mx-auto" : "")}>
          {icon}
        </span>
      )}
      {!isCollapsed && (
        <>
          <span className="flex-1 truncate">{label}</span>
          {badge && (
            <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[10px] font-bold rounded-full bg-primary text-primary-foreground">
              {badge}
            </span>
          )}
        </>
      )}
      {isCollapsed && badge && (
        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
      )}
    </>
  );

  const baseClasses = cn(
    "relative flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg text-sm font-medium transition-all",
    "hover:bg-muted",
    active ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-foreground",
    isCollapsed && "justify-center px-2",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}

export function SidebarToggle({ className }: { className?: string }) {
  const { isCollapsed, toggleCollapsed } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleCollapsed}
      className={cn(
        "absolute -right-3 top-20 z-10 h-6 w-6 rounded-full border border-border bg-card shadow-md hover:bg-muted",
        className
      )}
      aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
      {isCollapsed ? (
        <ChevronRight className="h-3 w-3" />
      ) : (
        <ChevronLeft className="h-3 w-3" />
      )}
    </Button>
  );
}

export function SidebarGroup({ className, title, children }: { className?: string; title?: string; children?: React.ReactNode }) {
  const { isCollapsed } = useSidebar();
  
  return (
    <div className={cn("py-2", className)}>
      {title && !isCollapsed && (
        <div className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
      )}
      {title && isCollapsed && (
        <div className="h-px mx-3 mb-2 bg-border" />
      )}
      {children}
    </div>
  );
}
