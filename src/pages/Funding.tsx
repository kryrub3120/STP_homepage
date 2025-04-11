import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { fundingProjects } from '../data/fundingProjects';

export function Funding() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-8">
              Projekty dofinansowane z funduszy UE
            </h1>
            <p className="text-xl text-muted">
              Innowacyjne rozwiązania wspierane przez Unię Europejską
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {fundingProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project}
              />
            ))}
      </div>

          {/* Brak bannera na stronie głównej finansowania - usunięty na życzenie */}
        </div>
      </div>
    </div>
  );
}
