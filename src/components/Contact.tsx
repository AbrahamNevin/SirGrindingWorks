import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Rajesh: +91 7744000669",
        "Rahul: +91 8788109158"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["sir2040@gmail.com"]
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Rajgurunagar Industrial Society,",
        "Plot No.106/2, T-Block, Gala No.46,",
        "M.I.D.C, Bhosari, Pune - 411026"
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 6:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy-dark to-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your precision manufacturing needs? Contact us today for a custom quote.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/10 border-white/20 text-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-white/10 rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose SIR Grinding Works?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>15+ years of manufacturing excellence</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>State-of-the-art CNC machinery</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>Custom manufacturing capabilities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>Competitive pricing and fast delivery</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-navy">Request a Quote</CardTitle>
              <p className="text-industrial-gray">Fill out the form below and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-navy mb-2 block">Full Name</label>
                  <Input placeholder="Enter your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy mb-2 block">Phone Number</label>
                  <Input placeholder="Enter your phone" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-navy mb-2 block">Email Address</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-navy mb-2 block">Company Name</label>
                <Input placeholder="Enter your company name" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-navy mb-2 block">Service Required</label>
                <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Select a service</option>
                  <option>Industrial Boiler Cutting Tools</option>
                  <option>Beveling Tools</option>
                  <option>Pipe Jaw Manufacturing</option>
                  <option>H.S.S Inserts & Holders</option>
                  <option>CNC Wire Cutting Job Work</option>
                  <option>Custom Manufacturing</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-navy mb-2 block">Message</label>
                <Textarea 
                  placeholder="Describe your requirements in detail..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="industrial" className="w-full text-lg">
                <Mail className="w-5 h-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;