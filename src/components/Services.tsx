import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Cog, Zap, Settings, Crown, Drill } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Industrial Boiler Cutting Tools",
      description: "High-precision cutting tools designed for industrial boiler applications with superior durability and performance.",
      features: ["Custom specifications", "Heat-resistant materials", "Precision engineering"]
    },
    {
      icon: Settings,
      title: "Beveling Tools",
      description: "Professional beveling tools for perfect edge preparation in industrial applications.",
      features: ["Various angles", "Consistent quality", "Long-lasting performance"]
    },
    {
      icon: Cog,
      title: "Pipe Jaw Manufacturing",
      description: "Custom pipe jaws designed for secure gripping and precise machining operations.",
      features: ["Custom sizing", "Hardened materials", "Precision fit"]
    },
    {
      icon: Drill,
      title: "H.S.S Inserts & Holders",
      description: "High-speed steel inserts and holders for superior cutting performance and tool life.",
      features: ["Premium HSS grade", "Custom geometries", "Optimized coatings"]
    },
    {
      icon: Zap,
      title: "CNC Wire Cutting Job Work",
      description: "Precision CNC wire cutting services for complex geometries and tight tolerances.",
      features: ["±0.01mm accuracy", "Complex shapes", "Quick turnaround"]
    },
    {
      icon: Crown,
      title: "Custom Manufacturing",
      description: "Bespoke manufacturing solutions tailored to your specific industrial requirements.",
      features: ["Design consultation", "Prototyping", "Volume production"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-industrial-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Our Manufacturing Expertise</h2>
          <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
            Delivering precision manufacturing solutions with cutting-edge technology and years of industrial expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-industrial)] transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange to-orange-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-navy group-hover:text-orange transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-industrial-gray leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-industrial-gray">
                      <div className="w-2 h-2 bg-orange rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="industrial" size="lg" className="text-lg px-12">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;