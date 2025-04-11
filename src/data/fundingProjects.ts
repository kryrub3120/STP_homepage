export interface ProjectTask {
  title: string;
  description: string[];
}

export interface ProjectInfo {
  id: string;
  title: string;
  status: 'current' | 'completed';
  totalValue: string;
  euFunding: string;
  tasks: string[];
  detailedTasks?: ProjectTask[];
  description: {
    targetGroups: string;
    goals: string;
    effects: string;
  };
  hashtags: string[];
}

export const fundingProjects: ProjectInfo[] = [
  {
    id: 'wdrożenie_Soccer_Talent_Predictor',
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
    detailedTasks: [
      {
        title: "Zadanie 1",
        description: [
          "Zakup i uruchomienie wartości niematerialnej i prawnej w formie praw autorskich wraz z niezbędnymi licencjami na dedykowane oprogramowanie w postaci systemu predykcji i analizy potencjału motorycznego zawodników w piłce nożnej - Soccer Talent Predictor, który umożliwi wprowadzenie w wyniku realizacji projektu opisanych we wniosku innowacji procesowej oraz innowacji produktowych w postaci nowej i udoskonalonej usługi:",
          "NOWA USŁUGA - Dostęp do funkcjonalności oprogramowania prognostycznego Soccer Talent Predictor w chmurze oraz szkoleń on-line związanych z doskonaleniem parametrów i umiejętności zawodników",
          "UDOSKONALONA USŁUGA: Diagnostyka motoryczna świadczona z wykorzystaniem funkcjonalności systemu Soccer Talent Predictor"
        ]
      },
      {
        title: "Zadanie 2",
        description: [
          "W ramach Zadania 2 zaplanowano zakup trzech szkoleń specjalistycznych o następującej tematyce:",
          "1. Budowanie strategii biznesowe",
          "2. Strategia sprzedaży",
          "3. Specjalista e-commerce – skuteczne techniki sprzedaży w Internecie"
        ]
      }
    ],
    description: {
      targetGroups: 'Grupa docelowa - dzieci i młodzież uprawiający piłkę nożną w ramach zorganizowanych zajęć- klubów, akademii i szkółek piłkarskich.',
      goals: 'Celem projektu jest wprowadzenie na rynek zaawansowanego systemu informatycznego, w którym zaimplementowany będzie, będący wynikiem przeprowadzonych przez Sportpredictor Sp.z o.o. prac B+R, nowatorski model umożliwiający predykcję predyspozycji zawodnika do profesjonalnego uprawiania piłki nożnej, opartego o innowacyjne podejście do analizy poziomu motorycznego względem statusu biologicznego badanego.\nWdrażane rozwiązanie oparte będzie na nowatorskim podejściu do analizy: statusu biologicznego zawodnika względem populacji, poziomu motorycznego zawodnika względem populacji, stanu zdrowia i składu ciała względem populacji oraz klasyfikacji uzyskanych wyników. Model stanowi innowacyjne rozwiązanie umożliwiające ocenę potencjału zawodnika w kontekście predyspozycji do profesjonalnego uprawiania piłki nożnej. Realizacja tego celu strategicznego przyczyni się do rozwoju firmy, zwiększenia sprzedaży produktów i usług, wzmocnienia pozycji na rynku, optymalizacji kosztów i zachowania wysokiej jakości produktów/usług.',
      effects: 'Do kluczowych rezultatów projektu należy zaliczyć przede wszystkim:\n• komercjalizację innowacyjnych rozwiązań poprzez wdrożenie wyników prac B+R przeprowadzonych przez wnioskodawcę\n• wprowadzenie do działalności innowacyjnych rozwiązań opartych na wiedzy i technologiach ICT\n• wzrost zatrudnienia we wspieranym przedsiębiorstwie'
    },
    hashtags: ['#FunduszeUE', '#FunduszeEuropejskie', '#SportTech']
  },
  {
    id: 'opracowanie_algorymu_B+R',
    title: 'SPORTPREDICTOR-STP. Przeprowadzenie prac badawczych umożliwiających opracowanie innowacyjnego modelu predykcji predyspozycji do gry w piłkę nożną opartego o algorytm porównawczy względem statusu biologicznego badanego – Soccer Talent Predictor',
    status: 'completed',
    totalValue: '1 100 000,00 zł',
    euFunding: '880 000,00 zł',
    tasks: [
      'Przeprowadzenie badań laboratoryjnych i terenowych zdolności motorycznych dzieci i młodzieży',
      'Rozwój innowacyjnego modelu predykcyjnego (MLP 14-11-1)',
      'Opracowanie algorytmów porównawczych uwzględniających status biologiczny zawodników',
      'Budowa prototypu systemu oceniającego predyspozycje zawodnika',
      'Przygotowanie poradnika dla trenerów wspierającego proces selekcji'
    ],
    detailedTasks: [
      {
        title: "Opis projektu",
        description: [
          "Projekt zakładał przeprowadzenie zaawansowanych badań fizycznych i motorycznych dzieci i młodzieży w wieku 10–18 lat oraz stworzenie na ich podstawie modelu predykcyjnego wykorzystującego algorytm sieci neuronowej. Dzięki temu możliwa jest ocena potencjału sportowego młodych zawodników z uwzględnieniem ich indywidualnego statusu biologicznego."
        ]
      },
      {
        title: "Okres realizacji projektu",
        description: [
          "01.01.2022 – 31.12.2022"
        ]
      }
    ],
    description: {
      targetGroups: 'Trenerzy, akademie piłkarskie, specjaliści ds. rozwoju talentów sportowych.',
      goals: 'Stworzenie bazy danych zawierającej normy sprawności fizycznej, status zdrowotny i status biologiczny badanych. Opracowanie i testowanie modelu predykcyjnego (MLP 14-11-1) do przewidywania wyników motorycznych (np. czas biegu na 30 m). Budowa prototypu systemu oceniającego predyspozycje zawodnika do profesjonalnej gry w piłkę nożną. Przygotowanie poradnika dla trenerów wspierającego proces selekcji w akademiach piłkarskich.',
      effects: 'Ponad 1600 przebadanych dzieci i młodzieży w wieku 8-18 lat. Model predykcyjny z 90% trafnością klasyfikacji. Projekt realizowany przy wsparciu Funduszy Europejskich w ramach Programu Operacyjnego Inteligentny Rozwój 2014–2020, Działanie 1.3.1 – Wsparcie projektów badawczo-rozwojowych w fazie preseed przez fundusze zalążkowe – BRIdge Alfa.'
    },
    hashtags: ['#FunduszeUE', '#FunduszeEuropejskie', '#SoccerTalentPredictor', '#Sportpredictor']
  }
];
