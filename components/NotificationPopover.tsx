"use client";

import { cn } from "@/lib/utils";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { AlertTriangle, Bell, Check, Info, X } from "lucide-react";
import * as React from "react";
import { Button } from "./Button";

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "info" | "success" | "warning";
  read: boolean;
}

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "New Message",
    description: "You have received a new message from John Doe.",
    time: "2m ago",
    type: "info",
    read: false,
  },
  {
    id: "2",
    title: "System Update",
    description: "The system will be updated at 12:00 AM.",
    time: "1h ago",
    type: "warning",
    read: false,
  },
  {
    id: "3",
    title: "Campaign Success",
    description: "Your recent campaign has reached its goal.",
    time: "3h ago",
    type: "success",
    read: true,
  },
];

export function NotificationPopover() {
  const [notifications, setNotifications] = React.useState<Notification[]>(MOCK_NOTIFICATIONS);
  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative h-9 w-9 rounded-full"
          aria-label="Open notifications"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="end"
          sideOffset={8}
          className={cn(
            "z-50 w-80 overflow-hidden rounded-xl border border-border bg-card p-0 shadow-xl outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-semibold text-sm">Notifications</h3>
            {notifications.length > 0 && (
              <button 
                onClick={clearAll}
                className="text-xs text-primary hover:underline font-medium"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="max-h-[400px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                  <Bell className="w-6 h-6 text-muted-foreground opacity-50" />
                </div>
                <p className="text-sm font-medium">No new notifications</p>
                <p className="text-xs text-muted-foreground mt-1">Check back later for updates</p>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className={cn(
                      "p-4 transition-colors hover:bg-muted/50 flex gap-3 cursor-pointer",
                      !notification.read && "bg-muted/30"
                    )}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                      notification.type === "info" && "bg-blue-100 text-blue-600",
                      notification.type === "success" && "bg-green-100 text-green-600",
                      notification.type === "warning" && "bg-amber-100 text-amber-600"
                    )}>
                      {notification.type === "info" && <Info className="w-4 h-4" />}
                      {notification.type === "success" && <Check className="w-4 h-4" />}
                      {notification.type === "warning" && <AlertTriangle className="w-4 h-4" />}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className={cn("text-xs font-semibold", !notification.read && "text-primary")}>
                          {notification.title}
                        </p>
                        <span className="text-[10px] text-muted-foreground">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-muted-foreground line-clamp-2">
                        {notification.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {notifications.length > 3 && (
            <div className="p-2 border-t border-border text-center bg-muted/20">
              <button className="text-xs font-medium hover:text-primary transition-colors py-1 w-full text-muted-foreground">
                View all activity
              </button>
            </div>
          )}
          
          <PopoverPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4 hidden" />
            <span className="sr-only">Close</span>
          </PopoverPrimitive.Close>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
