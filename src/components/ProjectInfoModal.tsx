import React from 'react';
import { X } from 'lucide-react';

export interface ProjectInfo {
  id: string;
  title: string;
  status: 'current' | 'completed';
  totalValue: string;
  euFunding: string;
  tasks: string[];
  description: {
    targetGroups: string;
    goals: string;
    effects: string;
  };
  hashtags: string[];
}

interface ProjectInfoModalProps {
  project: ProjectInfo;
  onClose: () => void;
}

export function ProjectInfoModal({ project, onClose }: ProjectInfoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="bg-card rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center p-4 border-b border-border">
          <h2 className="text-xl font-bold text-text">Informacje o projekcie</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-background rounded-full transition-colors"
            aria-label="Zamknij"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Title */}
          <div>
            <h3 className="text-sm font-medium text-muted mb-1">Tytuł projektu</h3>
            <p className="text-lg font-semibold text-text">{project.title}</p>
          </div>

          {/* Logos */}
          <div>
            <h3 className="text-sm font-medium text-muted mb-3">Dofinansowanie</h3>
            <div className="flex flex-wrap gap-6 items-center">
              {/* Logo pionowe dla większych ekranów */}
              <img 
                src="/images/Logo_UE_RGB_UE_Dofinansowane_RGB-3_pionowe.png" 
                alt="Logo Unii Europejskiej - Dofinansowane" 
                className="hidden md:block h-28 w-auto"
              />
              
              {/* Logo poziome dla mniejszych ekranów */}
              <img 
                src="/images/Logo_UE_RGB_UE_Dofinansowane_RGB-3.png" 
                alt="Logo Unii Europejskiej - Dofinansowane" 
                className="md:hidden h-16 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted">Wartość projektu</span>
                <span className="text-lg font-bold text-primary">{project.totalValue}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted">Dofinansowanie UE</span>
                <span className="text-lg font-bold text-primary">{project.euFunding}</span>
              </div>
            </div>
          </div>

          {/* Tasks */}
          <div>
            <h3 className="text-sm font-medium text-muted mb-3">Zadania realizowane w projekcie</h3>
            <ul className="list-disc pl-5 space-y-2">
              {project.tasks.map((task, index) => (
                <li key={index} className="text-text">{task}</li>
              ))}
            </ul>
          </div>

          {/* Target Groups */}
          <div>
            <h3 className="text-sm font-medium text-muted mb-1">Grupy docelowe</h3>
            <p className="text-text">{project.description.targetGroups}</p>
          </div>

          {/* Goals */}
          <div>
            <h3 className="text-sm font-medium text-muted mb-1">Cele projektu</h3>
            <p className="text-text">{project.description.goals}</p>
          </div>

          {/* Effects */}
          <div>
            <h3 className="text-sm font-medium text-muted mb-1">Efekty projektu</h3>
            <p className="text-text">{project.description.effects}</p>
          </div>

          {/* Hashtags */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-2">
              {project.hashtags.map((hashtag, index) => (
                <span 
                  key={index} 
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {hashtag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
