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
      {/* Header Section */}
      <div className="bg-card py-12">
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
                {project.id === 'wdrożenie_Soccer_Talent_Predictor' ? (
                  <>
                    <h2 className="text-xl font-bold text-text mb-4">Dofinansowanie z Unii Europejskiej</h2>
                    <div className="bg-background/50 p-6 rounded-lg">
                      <div className="flex flex-wrap justify-center gap-6 mb-6">
                        {/* 
                          Wymagane logotypy według specyfikacji (sekcja "b" w opisie projektu):
                          - Logo Funduszy Europejskich (do dodania)
                          - Logo Barw Rzeczypospolitej Polskiej (do dodania)
                          - Logo Unii Europejskiej (jest)
                          - Herb Województwa Wielkopolskiego (do dodania)
                        */}
                        
                        {/* Logo UE - pionowe dla większych ekranów */}
                        <img 
                          src="/images/Logo_UE_RGB_UE_Dofinansowane_RGB-3_pionowe.png" 
                          alt="Logo Unii Europejskiej - Dofinansowane" 
                          className="hidden md:block h-32 w-auto"
                        />
                        
                        {/* Logo UE - poziome dla mniejszych ekranów */}
                        <img 
                          src="/images/Logo_UE_RGB_UE_Dofinansowane_RGB-3.png" 
                          alt="Logo Unii Europejskiej - Dofinansowane" 
                          className="md:hidden h-20 w-auto"
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mt-8">
                        <div className="bg-card p-4 rounded-lg">
                          <p className="text-muted mb-2">Całkowita wartość projektu</p>
                          <p className="text-2xl font-bold text-primary">{project.totalValue}</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg">
                          <p className="text-muted mb-2">Kwota dofinansowania UE</p>
                          <p className="text-2xl font-bold text-primary">{project.euFunding}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-text mb-4">Projekt B+R „SPORTPREDICTOR-STP" – współfinansowany z Funduszy Europejskich</h2>
                    <div className="bg-background/50 p-6 rounded-lg">
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm font-medium text-muted mb-1">Tytuł projektu</p>
                          <p className="text-lg font-semibold text-text mb-4">{project.title}</p>
                          
                          <p className="text-sm font-medium text-muted mb-1">Okres realizacji projektu</p>
                          <p className="text-text mb-4">01.01.2022 – 31.12.2022</p>
                        </div>
                        
                        <div>
                          <div className="grid grid-cols-1 gap-4">
                            <div className="bg-card p-4 rounded-lg">
                              <p className="text-muted mb-2">Całkowity koszt projektu</p>
                              <p className="text-xl font-bold text-primary">{project.totalValue}</p>
                            </div>
                            <div className="bg-card p-4 rounded-lg">
                              <p className="text-muted mb-2">Dofinansowanie z Funduszy Europejskich</p>
                              <p className="text-xl font-bold text-primary">{project.euFunding}</p>
                            </div>
                          </div>
                        </div>
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

            {/* Banner - różne belki dla różnych projektów */}
            <div className="mt-12">
              <img 
                src={
                  project.id === 'wdrożenie_Soccer_Talent_Predictor' 
                    ? '/images/belka.png' // Biała belka UE dla projektu UE
                    : '/images/belka NCBIR.jpeg' // Belka NCBIR dla projektu badawczego
                } 
                alt={
                  project.id === 'wdrożenie_Soccer_Talent_Predictor'
                    ? 'Banner - dofinansowanie UE'
                    : 'Banner NCBIR'
                }
                className="w-full h-auto object-cover max-w-full mx-auto rounded-lg shadow-md"
                style={{
                  maxHeight: '120px',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
