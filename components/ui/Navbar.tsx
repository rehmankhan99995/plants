"use client";

import Link from "next/link";
import { HomeIcon, Sprout } from "lucide-react";
import { Button } from "./button";
import ModeToggle from "./ModeTogggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-primary font-mono tracking-wider"
          >
            🌱 Plantventory
          </Link>

          {/* Navbar Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/plants">
                <Sprout className="h-4 w-4" />
                <span className="hidden lg:inline">Plants</span>
              </Link>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/">
                <HomeIcon className="h-4 w-4" />
                <span className="hidden lg:inline">Home</span>
              </Link>
            </Button>
            <ModeToggle/>
          </div>
        </div>
      </div>
    </nav>
  );
}
