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
          "relative flex flex-col h-screen bg-card border-r border-border transition-all duration-300 ease-in-out overflow-x-hidden",
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
    <div className={cn("flex items-center p-4 border-b border-border h-16 min-h-[64px]", className)}>
      {!isCollapsed && (
        <div className="flex items-center justify-between w-full gap-3">
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
    <div className={cn("flex-1 overflow-y-auto overflow-x-hidden py-4", className)}>
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
  trailing?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function SidebarItem({ 
  icon, 
  label, 
  href, 
  active = false, 
  badge,
  trailing,
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
          <span className="flex-1 truncate text-left">{label}</span>
          {badge && (
            <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[10px] font-bold rounded-full bg-primary text-primary-foreground">
              {badge}
            </span>
          )}
          {trailing && (
            <div 
              className="ml-auto flex items-center justify-center"
              onClick={(e) => {
                // If the parent is a button/link, we might want to stop propagation
                // if the trailing part has its own click handler
                e.stopPropagation();
              }}
            >
              {trailing}
            </div>
          )}
        </>
      )}
      {isCollapsed && badge && (
        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
      )}
    </>
  );

  const baseClasses = cn(
    "relative flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg text-sm font-medium transition-all cursor-pointer",
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

export interface SidebarSubMenuProps {
  icon?: React.ReactNode;
  label: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function SidebarSubMenu({ 
  icon, 
  label, 
  children, 
  defaultOpen = false,
  className 
}: SidebarSubMenuProps) {
  const { isCollapsed } = useSidebar();
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const toggleOpen = () => setIsOpen(!isOpen);

  if (isCollapsed) {
    // When collapsed, show as regular item
    return (
      <div className={cn("relative flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg text-sm font-medium transition-all cursor-pointer hover:bg-muted", className)}>
        <span className="flex-shrink-0 mx-auto">
          {icon}
        </span>
      </div>
    );
  }

  return (
    <div className={className}>
      <button
        onClick={toggleOpen}
        className={cn(
          "relative flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg text-sm font-medium transition-all cursor-pointer w-full hover:bg-muted",
          isOpen && "bg-muted/50"
        )}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span className="flex-1 truncate text-left">{label}</span>
        <ChevronRight className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")} />
      </button>
      
      {isOpen && (
        <div className="relative mt-1">
          {children}
        </div>
      )}
    </div>
  );
}

export interface SidebarSubItemProps {
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function SidebarSubItem({ 
  label, 
  href, 
  active = false,
  onClick,
  className 
}: SidebarSubItemProps) {
  const content = (
    <span className="flex-1 truncate">{label}</span>
  );

  const baseClasses = cn(
    "relative flex items-center gap-3 pl-11 pr-3 py-2 ml-2 mr-2 rounded-lg text-sm font-medium transition-all cursor-pointer",
    "before:absolute before:left-5 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-px before:bg-border",
    "hover:bg-muted",
    active ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground",
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

