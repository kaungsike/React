import React from "react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="mt-auto bg-background border-t border-border">
      <Separator />
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} YourSite. Built with Vite and using ShadCN UI.</p>
      </div>
    </footer>
  )
}
