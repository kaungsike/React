import React from "react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="mt-auto bg-background border-t border-border">
      <Separator />
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} YourSite. Built with Vite and using ShadCN UI.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="/terms" className="hover:underline">
            Terms
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
