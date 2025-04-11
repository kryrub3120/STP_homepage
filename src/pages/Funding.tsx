import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectInfoModal } from '../components/ProjectInfoModal';
import { fundingProjects } from '../data/fundingProjects';

export function Funding() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  
  const openProjectInfo = (projectId: string) => {
    setSelectedProjectId(projectId);
  };
  
  const closeProjectInfo = () => {
    setSelectedProjectId(null);
  };
  
  // Znajdź wybrany projekt, jeśli jakiś jest wybrany
  const selectedProject = fundingProjects.find(project => project.id === selectedProjectId);
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
                onInfoClick={() => openProjectInfo(project.id)}
              />
            ))}
      </div>

          {/* Image Banner */}
          <div className="mt-12">
            <img 
              src="/images/belka.png" 
              alt="Banner" 
              className="w-full h-auto object-cover max-w-full mx-auto rounded-lg shadow-lg"
              style={{
                maxHeight: '120px',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Modal okno z informacjami o projekcie */}
      {selectedProject && (
        <ProjectInfoModal
          project={selectedProject}
          onClose={closeProjectInfo}
        />
      )}
    </div>
  );
}
