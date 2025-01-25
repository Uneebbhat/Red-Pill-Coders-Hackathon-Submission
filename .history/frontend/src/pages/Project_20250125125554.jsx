import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const projectsData = [
  {
    name: "AI Influencer",
    description:
      "AI Influencer leverages artificial intelligence to create a personalized influencer experience for brands. Developed by a team of young innovators, it has become a pioneer in digital marketing.",
    objectives: [
      "Simplify influencer-brand collaborations.",
      "Improve content personalization using AI.",
    ],
    success: [
      "Secured $50,000 in funding.",
      "Partnered with 10 global brands.",
      'Awarded "Innovation of the Year" at XYZ Tech Awards.',
    ],
  },
  {
    name: "Tech Connect",
    description:
      "A platform designed to bridge the gap between tech startups and investors, facilitating seamless collaboration and growth opportunities.",
    objectives: [
      "Create a network for tech startups and investors.",
      "Enable knowledge sharing through webinars and resources.",
    ],
    success: [
      "Connected over 100 startups with potential investors.",
      "Hosted 20+ successful webinars on startup growth.",
      "Achieved a 95% satisfaction rate from users.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <div className="py-12">
          <div className="container mx-auto px-4 text-center">
            {/* Headline */}
            <h1 className="text-4xl font-bold mb-4">Our Success Stories</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Explore the projects that have redefined innovation and turned
              ideas into reality.
            </p>
          </div>

          {/* Projects Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projectsData.map((project, index) => (
                  <Card key={index} className="rounded-lg shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">
                        {project.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h2 className="font-bold text-lg mb-2">
                          Description and Details
                        </h2>
                        <p className="text-sm">{project.description}</p>
                      </div>
                      <div className="mb-4">
                        <h2 className="font-bold text-lg mb-2">Objectives</h2>
                        <ul className="list-disc list-inside text-sm">
                          {project.objectives.map((objective, idx) => (
                            <li key={idx}>{objective}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h2 className="font-bold text-lg mb-2">
                          Success the Project Got
                        </h2>
                        <ul className="list-disc list-inside text-sm">
                          {project.success.map((success, idx) => (
                            <li key={idx}>{success}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
