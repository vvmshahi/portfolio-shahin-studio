
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-portfolio-blue to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out to me. 
            I'm always open to new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800">
            <CardContent className="p-8">
              <h3 className="font-space text-2xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-portfolio-blue/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-portfolio-blue text-lg">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-400">shahin@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-portfolio-blue/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-portfolio-blue text-lg">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-400">Remote-first Builder</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-space text-xl font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-gray-800 hover:bg-portfolio-blue rounded-full flex items-center justify-center cursor-pointer transition-colors">
                    <span className="text-white">🐙</span>
                  </div>
                  <div className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                    <span className="text-white">💼</span>
                  </div>
                  <div className="w-12 h-12 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                    <span className="text-white">🐦</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-gray-900/50 backdrop-blur-lg border-gray-800">
            <CardContent className="p-8">
              <h3 className="font-space text-2xl font-semibold mb-8">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-portfolio-blue"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-portfolio-blue"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-portfolio-blue resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-portfolio-blue hover:bg-blue-600 text-white py-3 font-semibold transition-all duration-300 hover:scale-105"
                >
                  ✈️ Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
