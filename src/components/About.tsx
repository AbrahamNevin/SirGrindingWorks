import { Button } from "@/components/ui/button";
import { Crown, Award, Users, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Crown, value: "15+", label: "Years Experience" },
    { icon: Award, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Target, value: "99%", label: "Precision Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">About SIR Grinding Works</h2>
              <div className="space-y-4 text-industrial-gray leading-relaxed">
                <p>
                  Established with a vision for precision manufacturing excellence, SIR Grinding Works 
                  has been at the forefront of industrial cutting tool manufacturing for over 15 years. 
                  Located in the heart of Pune's industrial hub at Rajgurunagar Industrial Society.
                </p>
                <p>
                  Our state-of-the-art facility in M.I.D.C Bhosari is equipped with advanced CNC machinery 
                  and precision grinding equipment, enabling us to deliver superior quality products that 
                  meet the exacting standards of modern industry.
                </p>
                <p>
                  From industrial boiler cutting tools to complex CNC wire cutting operations, we combine 
                  traditional craftsmanship with cutting-edge technology to provide solutions that drive 
                  industrial productivity.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-industrial-light rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange to-orange-light rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-navy mb-1">{stat.value}</p>
                  <p className="text-sm text-industrial-gray">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <Button variant="industrial" size="lg">
              Learn More About Us
            </Button>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-dark to-navy-light rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Crown className="w-8 h-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                    <p className="text-orange-light">Excellence in Manufacturing</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  To provide world-class precision manufacturing solutions that empower industries 
                  with reliable, high-performance cutting tools and components.
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-orange">Why Choose Us?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange rounded-full"></div>
                      <span>Advanced CNC technology</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange rounded-full"></div>
                      <span>Rigorous quality control</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange rounded-full"></div>
                      <span>Custom manufacturing capabilities</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange rounded-full"></div>
                      <span>Competitive pricing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange to-orange-light rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-light to-orange rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;