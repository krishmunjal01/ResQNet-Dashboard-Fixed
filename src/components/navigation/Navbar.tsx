import { Shield } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between h-16 px-6 border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="font-bold text-xl text-foreground">ResQNet</h1>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20 text-sm font-medium">
          SIH 2025
        </div>
        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
          <Shield className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
};