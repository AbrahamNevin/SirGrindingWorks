import { Button } from "@/components/ui/button";
import { Crown, Phone, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
<section
  id="home"
  className="relative min-h-screen bg-gradient-to-br from-navy-dark via-navy to-navy-light flex items-center overflow-hidden pt-16 md:pt-24 pb-16 md:pb-24"
>
      {/* Geometric Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange to-orange-light rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-orange-light to-orange rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-orange/20 to-transparent clippath-polygon"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-white space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-navy" />
              </div>
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white">SIR</h1>
                <p className="text-xl text-orange-light font-semibold">GRINDING WORKS</p>
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Precision Manufacturing for 
              <span className="text-orange"> Industrial Excellence</span>
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Specializing in industrial boiler cutting tools, beveling tools, pipe jaws, 
              H.S.S inserts & holders, and CNC wire cutting job work. Your trusted partner 
              for precision manufacturing solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
          <Button
            variant="accent"
            size="lg"
            className="text-lg px-8"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Phone className="w-5 h-5" />
            Get Quote
          </Button>
        </div>
          
          {/* Quick Contact */}
          <div className="grid sm:grid-cols-2 gap-4 pt-8 border-t border-white/20">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-orange" />
            <div>
              <p className="text-sm text-gray-300">Call Rajesh</p>
              <a href="tel:+917744000669" className="font-semibold hover:text-orange transition">
                +91 7744000669
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-orange" />
            <div>
              <p className="text-sm text-gray-300">Call Rahul</p>
              <a href="tel:+918788109158" className="font-semibold hover:text-orange transition">
                +91 8788109158
              </a>
            </div>
          </div>
        </div>

        </div>
        
        {/* Visual Element */}
        <div className="relative">
          <div className="w-full max-w-md mx-auto">
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-navy-dark to-navy rounded-full flex items-center justify-center mx-auto">
                  <Crown className="w-16 h-16 text-orange" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Quality Assured</h3>
                  <p className="text-industrial-gray">
                    Manufacturing excellence with precision engineering for over a decade.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-industrial-light rounded-lg">
                    <p className="text-2xl font-bold text-navy">500+</p>
                    <p className="text-sm text-industrial-gray">Projects</p>
                  </div>
                  <div className="p-4 bg-industrial-light rounded-lg">
                    <p className="text-2xl font-bold text-navy">15+</p>
                    <p className="text-sm text-industrial-gray">Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;