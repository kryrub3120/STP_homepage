import React from 'react';
import { ProjectInfo } from './ProjectInfoModal';
import { Target, FileText, Users, Trophy, CheckCircle, Clock, Brain } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectInfo;
  onInfoClick: () => void;
}

export function ProjectCard({ project, onInfoClick }: ProjectCardProps) {
  // Wybór ikony statusu projektu
  const StatusIcon = project.status === 'current' ? Clock : CheckCircle;
  const statusColor = project.status === 'current' ? 'text-primary' : 'text-green-500';
  const statusText = project.status === 'current' ? 'Projekt w trakcie realizacji' : 'Projekt zakończony';

  // Mapowanie zadań na ikony (to jest uproszczone, można rozszerzyć w miarę potrzeb)
  const getIconForTask = (index: number) => {
    const icons = [Target, FileText, Users, Trophy, Brain];
    return icons[index % icons.length];
  };

  return (
    <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-6">
          <StatusIcon className={`w-6 h-6 ${statusColor}`} />
          <span className={`text-sm font-medium ${statusColor}`}>{statusText}</span>
        </div>
        
        <h2 className="text-xl font-bold text-text mb-6 leading-tight">
          {project.title}
        </h2>

        <div className="bg-background/50 rounded-xl p-6 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted mb-2">Wartość projektu</p>
              <p className="text-2xl font-bold text-primary">{project.totalValue}</p>
            </div>
            <div>
              <p className="text-muted mb-2">Dofinansowanie UE</p>
              <p className="text-2xl font-bold text-primary">{project.euFunding}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {project.tasks.slice(0, 3).map((task, index) => {
            const TaskIcon = getIconForTask(index);
            return (
              <div key={index} className="flex items-start gap-3">
                <TaskIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted">{task}</p>
              </div>
            );
          })}
        </div>

        <button
          onClick={onInfoClick}
          className="w-full py-3 px-4 bg-primary text-white rounded-lg
                   hover:bg-primary/90 transition-transform hover:scale-[1.02]
                   shadow-md hover:shadow-primary/20 font-medium flex items-center justify-center gap-2"
        >
          <FileText className="w-5 h-5" />
          Informacje o projekcie
        </button>
      </div>
    </div>
  );
}
