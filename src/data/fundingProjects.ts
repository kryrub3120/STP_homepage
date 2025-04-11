import { ProjectInfo } from '../components/ProjectInfoModal';

export const fundingProjects: ProjectInfo[] = [
  {
    id: 'project-1',
    title: 'Wdrożenie wyników prac B+R poprzez wsparcie inwestycji SPORTPREDICTOR Sp. z o.o. w dedykowany system predykcji i analizy potencjału motorycznego zawodników w piłce nożnej – Soccer Talent Predictor',
    status: 'current',
    totalValue: '734 520 PLN',
    euFunding: '514 164 PLN',
    tasks: [
      'Opracowanie i wdrożenie innowacyjnego systemu analitycznego do predykcji potencjału motorycznego',
      'Stworzenie narzędzia raportowego wspierającego pracę trenerów i skautów',
      'Implementacja algorytmów uczenia maszynowego do analizy danych motorycznych i technicznych',
      'Przeprowadzenie testów walidacyjnych w środowisku rzeczywistym',
      'Opracowanie dokumentacji technicznej i wdrożeniowej systemu'
    ],
    description: {
      targetGroups: 'Kluby piłkarskie, akademie piłkarskie, trenerzy, skauting, rodzice młodych piłkarzy, zawodnicy indywidualni oraz federacje piłkarskie zainteresowane rozwojem młodych talentów.',
      goals: 'Wdrożenie innowacyjnego, opartego na danych systemu predykcji talentu sportowego, który umożliwi efektywniejsze wykorzystanie potencjału młodych zawodników i optymalizację procesu treningowego w klubach piłkarskich.',
      effects: 'Stworzenie kompleksowego systemu Soccer Talent Predictor, udostępnienie narzędzia dla klubów partnerskich, zwiększenie skuteczności procesu selekcji młodych talentów o 35%, skrócenie czasu analizy danych motorycznych o 70% oraz generowanie spersonalizowanych raportów dostosowanych do potrzeb różnych grup interesariuszy.'
    },
    hashtags: ['#FunduszeUE', '#FunduszeEuropejskie', '#SportTech']
  },
  {
    id: 'project-2',
    title: 'Przeprowadzenie prac badawczych umożliwiających opracowanie innowacyjnego modelu predykcji predyspozycji do gry w piłkę nożną opartego o innowacyjny algorytm porównawczy względem statusu biologicznego badanego - Soccer Talent Predictor',
    status: 'completed',
    totalValue: '1 100 000 PLN',
    euFunding: '780 000 PLN',
    tasks: [
      'Przeprowadzenie badań laboratoryjnych i terenowych zdolności motorycznych młodych piłkarzy',
      'Rozwój innowacyjnego modelu predykcyjnego z wykorzystaniem uczenia maszynowego',
      'Opracowanie algorytmów porównawczych uwzględniających status biologiczny zawodników',
      'Analiza korelacji między potencjałem motorycznym a umiejętnościami technicznymi',
      'Walidacja modelu w praktyce sportowej na grupie kontrolnej'
    ],
    description: {
      targetGroups: 'Jednostki badawcze, kluby sportowe, trenerzy, naukowcy zajmujący się sportem oraz instytucje zajmujące się rozwojem talentów sportowych w Polsce i Europie.',
      goals: 'Stworzenie naukowych podstaw do opracowania systemu identyfikacji i rozwoju talentów sportowych, bazującego na obiektywnych danych motorycznych i uwzględniającego indywidualny status biologiczny zawodników.',
      effects: 'Opracowanie innowacyjnego algorytmu predykcyjnego, publikacja 3 artykułów naukowych, stworzenie prototypu narzędzia analitycznego, nawiązanie współpracy z 12 klubami testującymi rozwiązanie oraz zebranie obszernej bazy danych motorycznych od ponad 500 młodych zawodników.'
    },
    hashtags: ['#FunduszeUE', '#BadaniaRozwoj', '#SportScienceTech']
  }
];
