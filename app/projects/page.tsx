import type React from "react"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { HoverCard } from "@/components/hover-card"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" size="icon" className="transition-transform hover:scale-110">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to Home</span>
            </Button>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">All Projects</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Orchestra",
              description: "Distributed LLM training cluster across 10 NVIDIA GPUs",
              tags: ["PyTorch", "Flask", "Chart.js", "PyTorch DDP", "CUDA"],
              githubUrl: "https://github.com/rlee603166/orchestra",
              content: (
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
              ),
            },
            {
              title: "Rory Rater",
              description: "Golf swing comparison application with pose detection",
              tags: ["React", "Three.js", "Flask", "Spring Boot", "TensorFlow"],
              githubUrl: "https://github.com/rlee603166/Rory-Rater-dev",
              liveUrl: "https://rory-rater.vercel.app/",
              content: (
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
              ),
            },
            {
              title: "Sharify",
              description: "Mobile app for splitting bills and expenses",
              tags: ["React Native", "FastAPI", "OCR", "Deep Linking"],
              githubUrl: "https://github.com/rlee603166/sharify",
              liveUrl: "https://apps.apple.com/us/app/sharify-split-smart-pay-fast/id6742428429",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Created a FastAPI backend for image processing, user authentication, and data persistence</li>
                  <li>
                    Built a React Native frontend for seamless receipt uploads, payment management, and group
                    transactions
                  </li>
                  <li>
                    Integrated payment platforms via deep linking and enabled payment requests via SMS, improving
                    accessibility for non-app users
                  </li>
                </ul>
              ),
            },
            {
              title: "10x Engineer Transformer",
              description: "Code generation model using transformer architecture",
              tags: ["Python", "PyTorch", "NLP", "Transformers"],
              githubUrl: "https://github.com/rlee603166/10x-Engineer",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Implemented a decoder-only transformer for code generation using PyTorch, trained on the MBPP
                    dataset to generate syntactically correct Python code
                  </li>
                  <li>
                    Developed a custom data pipeline for structured training with special tokens to ensure syntactical
                    correctness
                  </li>
                </ul>
              ),
            },
            {
              title: "Neural Network from Scratch",
              description: "Implementation of neural network fundamentals using NumPy",
              tags: ["NumPy", "Python", "Machine Learning"],
              githubUrl: "https://github.com/rlee603166/Neural-Network-from-Scratch",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Designed and implemented an artificial neural network library from scratch</li>
                  <li>
                    Built modular, reusable components of the neural network, including forward propagation,
                    backpropagation, and gradient descent, entirely in NumPy
                  </li>
                  <li>
                    Utilized OOP principles to create modular and reusable classes, allowing easy customization of
                    network parameters such as layer sizes, activation functions, and learning rates
                  </li>
                </ul>
              ),
            },
            {
              title: "Minesweeper AI",
              description: "Algorithmic solver for the Minesweeper game",
              tags: ["Python", "Algorithms", "AI"],
              githubUrl: "#",
              content: (
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Engineered a 4-layer AI to algorithmically solve Minesweeper</li>
                  <li>
                    Designed an algorithm with hierarchical decision-making: deterministic single-tile logic, inference
                    for neighbors, and backtracking for complex cases
                  </li>
                </ul>
              ),
            },
          ].map((project, index) => (
            <AnimatedSection key={project.title} animation="fade-up" delay={index * 100}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              >
                {project.content}
              </ProjectCard>
            </AnimatedSection>
          ))}
        </div>
      </main>

      <footer className="border-t bg-background/50 backdrop-blur-sm mt-12">
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-center">
            <Link href="/">
              <Button variant="outline" className="gap-2 transition-all duration-300 hover:gap-4">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
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
    <HoverCard className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
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
              <ExternalLink className="h-4 w-4 mr-2" />
              View Project
            </Button>
          </Link>
        )}
      </CardFooter>
    </HoverCard>
  )
}

