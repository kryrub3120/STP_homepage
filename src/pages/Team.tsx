import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Globe2, 
  BookOpen,
  Brain,
  Users,
  Medal,
  Building2,
  Trophy,
  Star
} from 'lucide-react';

export function Team() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
              Nasz Zespół
            </h1>
            <p className="text-xl text-muted">
              Poznaj ekspertów stojących za sukcesem Sportpredictor
            </p>
          </div>
        </div>
      </div>

      {/* Lead Scientist Profile */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 p-8">
                  <div className="aspect-square rounded-xl overflow-hidden mb-6">
                    <img 
                      src="/images/krystian.webp"
                      alt="dr Krystian Rubajczyk"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="font-semibold text-text">Wykształcenie</h3>
                        <p className="text-sm text-muted">Doktor nauk o sporcie</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Brain className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="font-semibold text-text">Specjalizacja</h3>
                        <p className="text-sm text-muted">Analiza danych sportowych, Identyfikacja talentów</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="font-semibold text-text">Stanowisko</h3>
                        <p className="text-sm text-muted">Główny Naukowiec, Współzałożyciel</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-8 bg-background">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-text mb-4">dr Krystian Rubajczyk</h2>
                    <p className="text-muted leading-relaxed mb-6">
                      Dr Krystian Rubajczyk to uznany ekspert w dziedzinie analizy danych sportowych 
                      i identyfikacji talentów. Łączy głęboką wiedzę akademicką z praktycznym 
                      doświadczeniem w pracy z młodymi sportowcami.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-text mb-2">Osiągnięcia Naukowe</h3>
                        <p className="text-sm text-muted">
                          Autor ponad 30 publikacji naukowych w prestiżowych czasopismach międzynarodowych. 
                          Laureat nagrody za innowacje w sporcie (2022).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-text mb-2">Współpraca Międzynarodowa</h3>
                        <p className="text-sm text-muted">
                          Współpraca z UEFA Youth Development Program i wiodącymi akademiami piłkarskimi w Europie.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Medal className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-text mb-2">Doświadczenie Praktyczne</h3>
                        <p className="text-sm text-muted">
                          10 lat doświadczenia w pracy z młodymi sportowcami. Konsultant ds. rozwoju 
                          talentów dla krajowych związków sportowych.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Football Consultant Profile */}
      <div className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-background rounded-2xl shadow-md overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-2/5 p-8">
                  <div className="aspect-square rounded-xl overflow-hidden mb-6">
                    <img 
                      src="/images/jarek.webp"
                      alt="dr Jarosław Gambal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="font-semibold text-text">Wykształcenie</h3>
                        <p className="text-sm text-muted">Doktor nauk o kulturze fizycznej</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Trophy className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="font-semibold text-text">Obecne stanowisko</h3>
                        <p className="text-sm text-muted">Szef Skautów w Cracovii Kraków</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="font-semibold text-text">Specjalizacja</h3>
                        <p className="text-sm text-muted">Identyfikacja talentów w piłce nożnej</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-text mb-4">dr Jarosław Gambal</h2>
                    <p className="text-muted leading-relaxed mb-6">
                      Dr Jarosław Gambal to doświadczony ekspert w dziedzinie identyfikacji talentów 
                      piłkarskich. Łączy wiedzę akademicką z bogatym doświadczeniem w praktyce sportowej.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-start gap-3">
                      <Medal className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-text mb-2">Osiągnięcia Zawodowe</h3>
                        <p className="text-sm text-muted">
                          Współtwórca sukcesów Rakowa Częstochowa, w tym zdobycia mistrzostwa Polski 
                          i historycznego awansu do fazy grupowej Ligi Europy.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Building2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-text mb-2">Doświadczenie Kierownicze</h3>
                        <p className="text-sm text-muted">
                          Pełnił funkcje szefa skautingu i dyrektora sportowego w wiodących klubach Ekstraklasy.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-text mb-2">Ekspertyza</h3>
                        <p className="text-sm text-muted">
                          Specjalizuje się w analizie danych sportowych i identyfikacji talentów 
                          w piłce nożnej.
                        </p>
                      </div>
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
