import type React from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AnimatedSection } from "@/components/animated-section"
import { HoverCard } from "@/components/hover-card"
import Headshot from "/public/pfp.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <h1 className="text-2xl font-bold tracking-tight">Ryan Lee</h1>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/rlee603166" target="_blank">
            <Button variant="ghost" size="icon" className="transition-transform hover:scale-110">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/rlee51" target="_blank">
            <Button variant="ghost" size="icon" className="transition-transform hover:scale-110">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:rlee51@u.rochester.edu">
            <Button variant="ghost" size="icon" className="transition-transform hover:scale-110">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-16">
        {/* Hero Section */}
        <AnimatedSection animation="fade-up" className="py-12 md:py-24 space-y-6 text-center">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Computer Science & Mathematics Student</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about AI, data science, and software engineering. Building innovative solutions at the
              intersection of technology and real-world problems.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {["C/C++", "Python", "Java", "Rust", "JavaScript", "React", "PyTorch", "TensorFlow", "AWS"].map(
                (skill, index) => (
                  <AnimatedSection
                    key={skill}
                    animation="fade-in"
                    delay={(index % 5) * 100 + 100}
                    className="inline-block"
                  >
                    <Badge className="text-sm py-1 transition-all hover:scale-110">{skill}</Badge>
                  </AnimatedSection>
                ),
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection id="about" className="py-12 space-y-6">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <Separator className="flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <AnimatedSection animation="slide-right" className="md:col-span-1 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/10 shadow-xl transition-transform hover:scale-105 duration-300">
                <Image
                  src={Headshot}
                  alt="Ryan Lee"
                  width={256}
                  height={256}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200} className="md:col-span-2">
              <Card className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Hi, I'm Ryan! I'm a Computer Science and Mathematics student at the University of Rochester with a
                    passion for AI, machine learning, and software development.
                  </p>
                  <p className="leading-relaxed">
                    My journey in tech began with a fascination for how computers could solve complex problems. This led
                    me to explore various domains from distributed systems to neural networks, always seeking to
                    understand the underlying principles and push the boundaries of what's possible.
                  </p>
                  <p className="leading-relaxed">
                    When I'm not coding or studying, you can find me on the golf course, experimenting with new recipes,
                    or diving into a good book on technology and its impact on society.
                  </p>
                  <div className="pt-2">
                    <h3 className="font-medium mb-2">I'm currently interested in:</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Large Language Models",
                        "Distributed Systems",
                        "Computer Vision",
                        "Algorithmic Optimization",
                        "Full-Stack Development",
                      ].map((interest, index) => (
                        <AnimatedSection
                          key={interest}
                          animation="fade-in"
                          delay={(index % 5) * 100 + 100}
                          className="inline-block"
                        >
                          <Badge variant="outline" className="transition-all hover:bg-secondary">
                            {interest}
                          </Badge>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection id="education" className="py-12 space-y-6">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            <Separator className="flex-1" />
          </div>

          <HoverCard>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-xl">University of Rochester</CardTitle>
                  <CardDescription>Rochester, NY</CardDescription>
                </div>
                <div className="text-left md:text-right">
                  <p className="font-medium">Expected May 2026</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
                <h3 className="font-medium">Bachelor of Arts in Mathematics</h3>
              </div>
              <div>
                <h4 className="font-medium mb-2">Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Computer Networks",
                    "Computer Organization",
                    "IOS Mobile App Development",
                    "Artificial Intelligence",
                    "Computation and Formal Systems",
                    "Object-Oriented Programming (Java)",
                    "Linear Algebra",
                  ].map((course, index) => (
                    <AnimatedSection
                      key={course}
                      animation="fade-in"
                      delay={(index % 4) * 100 + 100}
                      className="inline-block"
                    >
                      <Badge variant="outline" className="transition-all hover:bg-secondary">
                        {course}
                      </Badge>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </CardContent>
          </HoverCard>
        </AnimatedSection>

        {/* Featured Projects Section */}
        <AnimatedSection id="projects" className="py-12 space-y-6">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <Separator className="flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <AnimatedSection animation="slide-right" delay={100}>
              <ProjectCard
                title="Orchestra"
                description="Distributed LLM training cluster across 10 NVIDIA GPUs"
                tags={["PyTorch", "Flask", "Chart.js", "PyTorch DDP", "CUDA"]}
                githubUrl="https://github.com/rlee603166/orchestra"
              >
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Designed a distributed LLM training cluster across 10 NVIDIA GPUs in a school lab over wifi</li>
                  <li>
                    Developed a Flask and FastAPI architecture with a controller node and compute nodes, leveraging
                    PyTorch for Deepseek r1 fine-tuning (8B parameters)
                  </li>
                  <li>
                    Created a visualization with Chart.js for real-time loss/accuracy visualization and GPU utilization
                    stats
                  </li>
                </ul>
              </ProjectCard>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <ProjectCard
                title="Rory Rater"
                description="Golf swing comparison application with pose detection"
                tags={["React", "Three.js", "Flask", "Spring Boot", "TensorFlow"]}
                githubUrl="https://github.com/rlee603166/Rory-Rater-dev"
                liveUrl="https://rory-rater.vercel.app/"
              >
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Built a full-stack app enabling users to compare golf swings with Rory McIlroy using Movenet's pose
                    detection
                  </li>
                  <li>
                    Integrated a Flask-based real-time pose analysis service and a Spring Boot for a RESTful API backend
                  </li>
                  <li>
                    Developed a React & Three.js frontend with interactive 3D visualization and precise video playback
                    for swing analysis
                  </li>
                </ul>
              </ProjectCard>
            </AnimatedSection>
          </div>

          <div className="flex justify-center">
            <Link href="/projects">
              <Button size="lg" className="gap-2 transition-all duration-300 hover:gap-4 hover:pl-6 hover:pr-4">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection id="experience" className="py-12 space-y-6">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            <Separator className="flex-1" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform -translate-x-1/2 z-[1]"></div>

            <div className="space-y-12">
              <AnimatedSection animation="fade-up" delay={100}>
                <TimelineItem
                  date="Jan 2025 - Present"
                  title="Data Science Intern"
                  company="UR Medicine Motion Laboratories"
                  location="Rochester, NY"
                  isLeft={true}
                >
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      Designed and deployed a PostgreSQL relational database to store and manage patient motion capture
                      data
                    </li>
                    <li>
                      Developed a normalized schema to track patients, sessions, and cohort-specific activity data
                    </li>
                    <li>
                      Implemented multithreaded ETL pipelines to ingest, preprocess, and store high-frequency motion
                      data directly from laboratory equipment
                    </li>
                  </ul>
                </TimelineItem>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <TimelineItem
                  date="Sept - Dec 2024"
                  title="AI Research Assistant"
                  company="Rochester Human-Computer Interaction Lab"
                  location="Rochester, NY"
                  isLeft={false}
                >
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      Architected a relational database for capturing and analyzing feedback from healthcare
                      professionals (SQLite)
                    </li>
                    <li>
                      Developed a feedback visualization system integrating LLM insights with interactive gauges and
                      real-time conversational data analysis (JavaScript)
                    </li>
                    <li>Streamlined the deployment pipeline for a LLM on AWS EC2, reducing deployment time by 50%</li>
                    <li>
                      Contributed to the development of SOPHIE, a virtual AI agent designed to help physicians practice
                      complex conversations with terminally ill patients
                    </li>
                  </ul>
                </TimelineItem>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <TimelineItem
                  date="Jun - Aug 2024"
                  title="Software Engineer Intern"
                  company="Logical Position"
                  location="Lake Oswego, OR"
                  isLeft={true}
                >
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      Implemented analytic tools, for a leading digital marketing agency, used to optimize over $1.5
                      billion in ad spend
                    </li>
                    <li>
                      Developed an internal web application with a Flask middleware server, enabling employees to access
                      over 2 million client data points and streamline API communication with Databricks (HTML/CSS,
                      ReactJS)
                    </li>
                    <li>
                      Engineered a collection of automated data pipelines, optimized for distributed data processing, to
                      feed a new blended reporting product (PySpark, SQL, Databricks)
                    </li>
                    <li>Built unit tests to ensure the consistency of all data pipelines</li>
                  </ul>
                </TimelineItem>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ryan Lee. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/rlee603166" target="_blank">
                <Button variant="ghost" size="sm" className="transition-all hover:bg-secondary">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/rlee51" target="_blank">
                <Button variant="ghost" size="sm" className="transition-all hover:bg-secondary">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="mailto:rlee51@u.rochester.edu">
                <Button variant="ghost" size="sm" className="transition-all hover:bg-secondary">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  children,
}: {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  children: React.ReactNode
}) {
  return (
    <HoverCard>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <AnimatedSection key={tag} animation="fade-in" delay={index * 50} className="inline-block">
              <Badge variant="secondary" className="text-xs transition-all hover:bg-accent">
                {tag}
              </Badge>
            </AnimatedSection>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-0">
        <Link href={githubUrl} target="_blank">
          <Button variant="outline" size="sm" className="transition-all duration-300 hover:bg-secondary">
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </Button>
        </Link>
        {liveUrl && (
          <Link href={liveUrl} target="_blank">
            <Button size="sm" className="transition-all duration-300 hover:gap-3">
              Live Demo
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        )}
      </CardFooter>
    </HoverCard>
  )
}

function TimelineItem({
  date,
  title,
  company,
  location,
  isLeft,
  children,
}: {
  date: string
  title: string
  company: string
  location: string
  isLeft: boolean
  children: React.ReactNode
}) {
  return (
    <div className={`relative z-[1] flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row-reverse" : ""}`}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-[2] transition-all hover:scale-150 hover:bg-primary/80"></div>

      {/* Date for mobile */}
      <div className="md:hidden mb-4 font-medium text-primary">{date}</div>

      {/* Content */}
      <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
        <HoverCard>
          <CardHeader className="pb-2">
            <div className="hidden md:block mb-2 font-medium text-primary">{date}</div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>
              {company} • {location}
            </CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </HoverCard>
      </div>

      {/* Empty space for the other side */}
      <div className="hidden md:block w-1/2"></div>
    </div>
  )
}

