'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import React from 'react';

export default function HomePage() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "🛰️ Autonomous Disaster Surveillance Drone",
      description:
        "Designed and developed an autonomous drone capable of real-time disaster monitoring with 2kg payload delivery support. Built in collaboration with a micro-instruments company in Ambala Cantt, Delhi, combining advanced flight control systems and AI-based object detection.",
      badge: "NEW PROJECT",
      tech: ["AI Detection", "Flight Control", "Payload Delivery"],
    },
    {
      title: "Gravity Sensor Based Drone Control",
      description:
        "Controlled UAVs via ESP32 and MPU6050 for gesture-based navigation using NRF24L01 communication and real-time PWM/UART integration.",
      tech: ["ESP32", "MPU6050", "NRF24L01"],
    },
    {
      title: "Autonomous Agriculture Drone (NIDAR 2025)",
      description:
        "Developing a multipurpose drone for precision spraying, using Pixhawk, Mission Planner, and QGroundControl for autonomous field navigation.",
      tech: ["Pixhawk", "Mission Planner", "QGroundControl"],
    },
    {
      title: "FPV Drone with QR Detection (Techkriti 2025 – IIT Kanpur)",
      description:
        "Integrated OpenCV-based QR code recognition into a racing drone for enhanced FPV challenges.",
      tech: ["OpenCV", "QR Detection", "FPV"],
    },
    {
      title: "Smart Home Automation System",
      description:
        "Sensor-based environmental control system for lights and fans, using real-time logic and automation.",
      tech: ["IoT", "Sensors", "Automation"],
    },
  ];

  const skills = {
    technical: [
      "Python",
      "C",
      "AutoCAD",
      "CATIA V5",
      "ANSYS",
      "Mission Planner",
      "Betaflight",
      "Pixhawk",
      "Drone Piloting",
    ],
    soft: ["Teamwork", "Adaptability", "Leadership", "Public Speaking"],
  };

  const education = [
    {
      institution: "MVGR College of Engineering",
      degree: "B.Tech – Mechanical Engineering",
      grade: "7.94 CGPA",
      current: true,
    },
    {
      institution: "Sri Aditya Jr. College",
      degree: "Intermediate",
      grade: "84.2%",
    },
    {
      institution: "Vikas High School",
      degree: "Secondary Education",
      grade: "GPA: 10",
    },
  ];

  const certifications = [
    "SQL & Databases – edX",
    "Drone Systems & Control – NPTEL",
    "IC Engines – NPTEL",
    "3D Printing – HMI Engineering",
    "Multirotor Workshop – IIT Kanpur",
  ];

  return (
    <div className="min-h-screen bg-background">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        [id] {
          scroll-margin-top: 100px;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-primary/10">
        <div className="max-w-[120rem] mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-heading font-bold text-xl text-secondary"
          >
            Sambana Sai Harshith
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Projects", "Skills", "Education", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="font-paragraph text-secondary hover:text-primary transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full min-h-screen bg-secondary text-secondary-foreground flex items-center">
        <div className="max-w-[120rem] mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-tight">
                  Engineering Intelligence Into Motion
                </h1>
                <p className="font-paragraph text-xl lg:text-2xl text-secondary-foreground/80 leading-relaxed">
                  I design and build drones, rovers, and autonomous systems that move with purpose.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold">Sambana Sai Harshith</h2>
                <div className="space-y-2 text-secondary-foreground/80">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Vizianagaram, Andhra Pradesh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 8919144083</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>sambanasaibabu1233@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph font-medium"
                >
                  View Projects <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-paragraph"
                >
                  Get In Touch
                </Button>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary/20 to-brandaccent/20 rounded-2xl flex items-center justify-center">
                <Image
                  src="https://static.wixstatic.com/media/553f6f_78f96008d71d45e8b35460cab355e696~mv2.jpg#originWidth=2267&originHeight=2267"
                  alt="Modern autonomous drone"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-6 right-6 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-brandaccent rounded-full animate-pulse delay-1000"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-subtlebackground">
        <div className="max-w-[100rem] mx-auto px-6 text-center max-w-4xl">
          <h2 className="font-heading text-4xl font-bold text-secondary mb-8">About Me</h2>
          <p className="font-paragraph text-lg text-secondary leading-relaxed">
            I'm a 3rd-year Mechanical Engineering student passionate about autonomous drones, smart systems,
            and real-world robotics. I thrive on building intelligent machines that solve real problems—from
            disaster surveillance to smart automation.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="max-w-[100rem] mx-auto px-6">
          <h2 className="font-heading text-4xl font-bold text-secondary mb-4 text-center">
            Featured Projects
          </h2>
          <p className="font-paragraph text-lg text-secondary/80 text-center mb-16">
            Innovative solutions in autonomous systems and robotics
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-xl font-semibold text-secondary leading-tight">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <Badge className="bg-primary text-primary-foreground text-xs">{project.badge}</Badge>
                      )}
                    </div>
                    <p className="font-paragraph text-secondary/80 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-primary/30 text-secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-subtlebackground">
        <div className="max-w-[100rem] mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading text-2xl font-semibold text-secondary mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.technical.map((skill, i) => (
                <Badge key={i} className="bg-primary text-primary-foreground px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading text-2xl font-semibold text-secondary mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="border-primary text-secondary px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-background">
        <div className="max-w-[100rem] mx-auto px-6">
          <h2 className="font-heading text-4xl font-bold text-secondary text-center mb-16">
            Education
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="bg-white border-primary/10">
                <CardContent className="p-6 flex justify-between items-start">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-secondary">{edu.institution}</h3>
                    <p className="font-paragraph text-secondary/80">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-primary text-primary-foreground">{edu.grade}</Badge>
                    {edu.current && (
                      <p className="font-paragraph text-xs text-secondary/60 mt-1">Current</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Experience */}
      <section className="py-20 bg-subtlebackground">
        <div className="max-w-[100rem] mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-3xl font-bold text-secondary mb-8">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-primary/10"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-paragraph text-secondary">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl font-bold text-secondary mb-8">Experience</h2>
            <Card className="bg-white border-primary/10">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold text-secondary mb-2">Research Intern</h3>
                <p className="font-paragraph text-secondary/80 mb-4">Star PNT Labs</p>
                <p className="font-paragraph text-sm text-secondary/60">
                  IIT Tirupati Navavishkar I-Hub Foundation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-secondary text-secondary-foreground text-center">
        <h2 className="font-heading text-4xl font-bold mb-8">Let's Build Something Amazing</h2>
        <p className="font-paragraph text-xl text-secondary-foreground/80 mb-12 max-w-2xl mx-auto">
          Ready to collaborate on innovative projects or discuss opportunities in autonomous systems and robotics?
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph font-medium px-8 py-3"
            onClick={() => (window.location.href = 'mailto:sambanasaibabu1233@gmail.com')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Email
          </Button>
          <Button
            variant="outline"
            className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-paragraph px-8 py-3"
            onClick={() => window.open('tel:+918919144083')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8 border-t border-primary/10 text-center">
        <p className="font-paragraph text-secondary/60">
          © {new Date().getFullYear()} Sambana Sai Harshith. Designed with passion for innovation.
        </p>
      </footer>
    </div>
  );
}
