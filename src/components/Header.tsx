import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-navy-dark to-navy rounded-full flex items-center justify-center">
              <Crown className="w-6 h-6 text-orange mb-1" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-navy">SIR</h1>
            <p className="text-sm text-industrial-gray -mt-1">GRINDING WORKS</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-orange transition-colors">Home</a>
          <a href="#services" className="text-foreground hover:text-orange transition-colors">Services</a>
          <a href="#about" className="text-foreground hover:text-orange transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-orange transition-colors">Contact</a>
        </nav>
        
        <Button
  variant="accent"
  className="hidden md:flex"
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Get Quote
</Button>
        
        <Button variant="ghost" className="md:hidden">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-current"></div>
            <div className="w-full h-0.5 bg-current"></div>
            <div className="w-full h-0.5 bg-current"></div>
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Header;