import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { fundingProjects } from '../data/fundingProjects';

export function FundingProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = fundingProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="pt-16 min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-8">
              Projekt nie został znaleziony
            </h1>
            <Link 
              to="/finansowanie"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót do listy projektów
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Opis statusu projektu
  const statusText = project.status === 'current' ? 'Projekt w trakcie realizacji' : 'Projekt zakończony';
  const statusColor = project.status === 'current' ? 'text-primary' : 'text-green-500';

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header Section - biała belka na górze */}
      <div className="bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Link 
              to="/finansowanie"
              className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót do listy projektów
            </Link>
            
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-sm font-medium ${statusColor} px-3 py-1 rounded-full bg-background`}>
                {statusText}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-8">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-xl shadow-md p-8 mb-10">
              {/* Logos Section - zgodnie z wymaganiami o komunikacji dofinansowania */}
              <div className="mb-8">
                {project.id === 'wdrozenie_Soccer_Talent_Predictor' ? (
                  <>
                    <h2 className="text-xl font-bold text-text mb-4">Dofinansowanie z Unii Europejskiej</h2>
                    <div className="bg-background/50 p-6 rounded-lg">
                      {/* Biała belka dla projektu wdrożeniowego */}
                      <div className="flex justify-center w-full">
                        <img 
                          src="/images/belka.png" 
                          alt="Dofinansowanie z Unii Europejskiej" 
                          className="w-full h-auto object-contain max-h-36"
                        />
                      </div>
                      
                      {/* Wartości projektu przeniesione do czarnej belki na dole strony */}
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-text mb-4">Projekt B+R „SPORTPREDICTOR-STP" – współfinansowany z Funduszy Europejskich</h2>
                    <div className="bg-background/50 p-6 rounded-lg">
                      {/* Belka NCBIR dla projektu badawczego */}
                      <div className="flex justify-center w-full">
                        <img 
                          src="/images/belka NCBIR.jpeg" 
                          alt="Banner NCBIR" 
                          className="w-full h-auto object-contain max-h-36"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Tasks Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-text mb-4">Zadania realizowane w projekcie</h2>
                <div className="bg-background/50 p-6 rounded-lg">
                  {project.detailedTasks ? (
                    <div className="space-y-6">
                      {project.detailedTasks.map((taskGroup, groupIndex) => (
                        <div key={groupIndex}>
                          <h3 className="font-bold mb-3">{taskGroup.title}</h3>
                          <div className="space-y-2">
                            {taskGroup.description.map((desc, descIndex) => (
                              <p key={descIndex} className="text-text">{desc}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="list-disc pl-5 space-y-3">
                      {project.tasks.map((task, index) => (
                        <li key={index} className="text-text">{task}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Target Groups Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-text mb-4">Grupy docelowe</h2>
                <div className="bg-background/50 p-6 rounded-lg">
                  <p className="text-text">{project.description.targetGroups}</p>
                </div>
              </div>

              {/* Goals Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-text mb-4">Cele projektu</h2>
                <div className="bg-background/50 p-6 rounded-lg">
                  <p className="text-text">{project.description.goals}</p>
                </div>
              </div>

              {/* Effects Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-text mb-4">Efekty projektu</h2>
                <div className="bg-background/50 p-6 rounded-lg">
                  <p className="text-text">{project.description.effects}</p>
                </div>
              </div>

              {/* Hashtags */}
              <div className="mt-6">
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

      {/* Wartości projektu i logo na dole strony */}
      <div className="border-t border-gray-200 py-8 mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center gap-6">
              <div className="grid grid-cols-2 w-full gap-8">
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-muted mb-1">Wartość projektu</span>
                  <span className="text-xl font-bold text-primary">{project.totalValue}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-muted mb-1">Dofinansowanie UE</span>
                  <span className="text-xl font-bold text-primary">{project.euFunding}</span>
                </div>
              </div>
              
              {/* Logo UE - pionowe pod kwotami */}
              <div className="mt-8">
                <img 
                  src="/images/Logo_UE_RGB_UE_Dofinansowane_RGB-3_pionowe.png" 
                  alt="Logo Unii Europejskiej - Dofinansowane" 
                  className="h-24 w-auto grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}
