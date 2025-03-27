"use client"
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/animated-section";
import { ImageUpload } from "@/components/image-upload";
import { PFP } from "@/public/pfp.png";

export default function AboutPage() {
    const [headshot, setHeadshot] = useState<string>(PFP);
    const handleImageChange = (file: File) => {
        const imageUrl = URL.createObjectURL(file);
        setHeadshot(imageUrl);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
            <header className="container mx-auto py-6 px-4 flex justify-between items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="transition-transform hover:scale-110"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span className="sr-only">Back to Home</span>
                        </Button>
                    </Link>
                    <h1 className="text-2xl font-bold tracking-tight">About Me</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <AnimatedSection className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        <div className="md:col-span-1 space-y-6">
                            <AnimatedSection
                                animation="slide-right"
                                className="flex justify-center"
                            >
                                <div className="relative w-full max-w-xs aspect-square rounded-xl overflow-hidden border-4 border-primary/10 shadow-xl">
                                    <Image
                                        src={headshot}
                                        alt="Ryan Lee"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <ImageUpload
                                        onImageChange={handleImageChange}
                                        className="w-full h-full"
                                    />
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="fade-up" delay={200}>
                                <Card>
                                    <CardContent className="pt-6">
                                        <h3 className="font-medium mb-3">Contact Information</h3>
                                        <div className="space-y-2 text-sm">
                                            <p>
                                                <span className="font-medium">Email:</span>{" "}
                                                rlee51@u.rochester.edu
                                            </p>
                                            <p>
                                                <span className="font-medium">Location:</span>{" "}
                                                Rochester, NY
                                            </p>
                                            <p>
                                                <span className="font-medium">GitHub:</span>{" "}
                                                @rlee603166
                                            </p>
                                            <p>
                                                <span className="font-medium">LinkedIn:</span>{" "}
                                                @rlee51
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        </div>

                        <AnimatedSection
                            animation="slide-left"
                            delay={200}
                            className="md:col-span-2"
                        >
                            <div className="space-y-6">
                                <Card className="border-2">
                                    <CardContent className="pt-6 space-y-4">
                                        <h2 className="text-2xl font-bold">Ryan Lee</h2>
                                        <p className="text-lg leading-relaxed">
                                            Computer Science and Mathematics student at the
                                            University of Rochester with a passion for AI, machine
                                            learning, and software development.
                                        </p>
                                        <Separator />
                                        <div>
                                            <h3 className="font-medium mb-3">About Me</h3>
                                            <p className="leading-relaxed mb-3">
                                                My journey in tech began with a fascination for how
                                                computers could solve complex problems. This led me
                                                to explore various domains from distributed systems
                                                to neural networks, always seeking to understand the
                                                underlying principles and push the boundaries of
                                                what's possible.
                                            </p>
                                            <p className="leading-relaxed mb-3">
                                                I'm particularly interested in the intersection of
                                                artificial intelligence and real-world applications.
                                                My work spans from building distributed training
                                                systems for large language models to developing
                                                applications that leverage computer vision for
                                                sports analysis.
                                            </p>
                                            <p className="leading-relaxed">
                                                When I'm not coding or studying, you can find me on
                                                the golf course, experimenting with new recipes, or
                                                diving into a good book on technology and its impact
                                                on society.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-2">
                                    <CardContent className="pt-6 space-y-4">
                                        <h3 className="font-medium mb-2">Research Interests</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                "Large Language Models",
                                                "Distributed Systems",
                                                "Computer Vision",
                                                "Algorithmic Optimization",
                                                "Full-Stack Development",
                                                "Data Visualization",
                                                "Human-Computer Interaction",
                                                "Neural Networks",
                                            ].map((interest, index) => (
                                                <AnimatedSection
                                                    key={interest}
                                                    animation="fade-in"
                                                    delay={(index % 5) * 100 + 100}
                                                    className="inline-block"
                                                >
                                                    <Badge
                                                        variant="outline"
                                                        className="transition-all hover:bg-secondary"
                                                    >
                                                        {interest}
                                                    </Badge>
                                                </AnimatedSection>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-2">
                                    <CardContent className="pt-6 space-y-4">
                                        <h3 className="font-medium mb-3">Personal Statement</h3>
                                        <p className="leading-relaxed">
                                            I believe that technology should be accessible, ethical,
                                            and designed with human needs at its core. My goal is to
                                            develop systems that not only push the boundaries of
                                            what's technically possible but also consider the
                                            broader societal implications of their deployment.
                                        </p>
                                        <p className="leading-relaxed">
                                            As I continue my education and career, I'm excited to
                                            collaborate with others who share this vision and to
                                            contribute to projects that make a meaningful difference
                                            in how we interact with technology.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </AnimatedSection>
                    </div>
                </AnimatedSection>
            </main>

            <footer className="border-t bg-background/50 backdrop-blur-sm mt-12">
                <div className="container mx-auto py-6 px-4">
                    <div className="flex justify-center">
                        <Link href="/">
                            <Button
                                variant="outline"
                                className="gap-2 transition-all duration-300 hover:gap-4"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
