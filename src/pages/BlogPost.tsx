import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ChevronLeft,
  Tag,
  Clock
} from 'lucide-react';
import { LazyImage } from '../components/LazyImage';

interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
    conclusion: string;
  };
  date: string;
  image: string;
  category: string;
  author: Author;
  readingTime: string;
}

// Sample blog post data
const BLOG_POST: BlogPost = {
  id: '1',
  title: 'Jak AI rewolucjonizuje skauting piłkarski?',
  description: 'Odkryj, jak sztuczna inteligencja zmienia sposób identyfikacji młodych talentów w piłce nożnej.',
  content: {
    introduction: `Sztuczna inteligencja rewolucjonizuje sposób, w jaki identyfikujemy i rozwijamy młode talenty piłkarskie. 
    W tym artykule przyjrzymy się, jak zaawansowane algorytmy i analiza danych wspierają proces skautingu, 
    czyniąc go bardziej precyzyjnym i efektywnym niż kiedykolwiek wcześniej.`,
    sections: [
      {
        title: 'Rola AI w nowoczesnym skautingu',
        content: `Sztuczna inteligencja wprowadza nową jakość do procesu skautingu piłkarskiego. 
        Algorytmy uczenia maszynowego potrafią analizować ogromne ilości danych dotyczących 
        występów zawodników, ich parametrów fizycznych i technicznych, a także potencjału rozwojowego. 
        To pozwala na bardziej obiektywną i kompleksową ocenę młodych talentów.`
      },
      {
        title: 'Analiza danych w czasie rzeczywistym',
        content: `Współczesne systemy AI umożliwiają analizę występów zawodników w czasie rzeczywistym. 
        Dzięki zaawansowanym czujnikom i systemom śledzenia ruchu, możemy gromadzić precyzyjne dane 
        dotyczące każdego aspektu gry zawodnika - od prędkości biegu, przez dokładność podań, 
        aż po taktyczne decyzje podejmowane na boisku.`
      },
      {
        title: 'Predykcja rozwoju zawodnika',
        content: `Jedną z najważniejszych zalet wykorzystania AI w skautingu jest możliwość 
        przewidywania potencjału rozwojowego zawodnika. Algorytmy, bazując na historycznych 
        danych tysięcy piłkarzy, potrafią wskazać prawdopodobną ścieżkę rozwoju młodego 
        talentu i pomóc w optymalizacji procesu treningowego.`
      }
    ],
    conclusion: `Wykorzystanie sztucznej inteligencji w skautingu piłkarskim to nie przyszłość, 
    ale teraźniejszość. Kluby i akademie, które adaptują te innowacyjne rozwiązania, zyskują 
    przewagę konkurencyjną w identyfikacji i rozwoju młodych talentów. AI nie zastępuje 
    tradycyjnego skautingu, ale znacząco go wspiera i uzupełnia, dostarczając obiektywnych 
    danych i analiz.`
  },
  date: '2024-03-15',
  image: '/images/ezgif-1-3969b59b.webp',
  category: 'Technologia',
  author: {
    id: '1',
    name: 'dr Krystian Rubajczyk',
    role: 'Główny Analityk Sportowy',
    avatar: '/images/krystian.webp'
  },
  readingTime: '5 min'
};

// Sample related posts
const RELATED_POSTS = [
  {
    id: '2',
    title: 'Machine Learning w sporcie',
    description: 'Jak uczenie maszynowe pomaga w analizie potencjału sportowego?',
    date: '2024-03-05',
    image: '/images/ezgif-1-3969b59b.webp',
    category: 'Technologia'
  },
  {
    id: '3',
    title: 'Predykcja sukcesu sportowego',
    description: 'Analiza najnowszych badań dotyczących przewidywania potencjału sportowego.',
    date: '2024-03-12',
    image: '/images/photo-1551958219-acbc608c6377.webp',
    category: 'Badania'
  },
  {
    id: '4',
    title: 'Wywiad z trenerem reprezentacji',
    description: 'Rozmowa o wykorzystaniu nowoczesnych technologii w procesie selekcji.',
    date: '2024-03-10',
    image: '/images/ezgif-1-3969b59b.webp',
    category: 'Wywiady'
  }
];

export function BlogPost() {
  // const { id: postId } = useParams(); // Uncomment when implementing dynamic post fetching
  const post = BLOG_POST; // In real app, fetch post by id

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(post.title);

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <LazyImage
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 
                         transition-colors group"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Powrót do bloga</span>
              </Link>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <time>{formatDate(post.date)}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readingTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  <span>{post.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Author */}
          <div className="flex items-center gap-4 mb-8 p-6 bg-card rounded-xl">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <User className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-text">{post.author.name}</h3>
              </div>
              <p className="text-sm text-muted">{post.author.role}</p>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-invert prose-primary max-w-none">
            <p className="text-xl text-muted leading-relaxed mb-8">
              {post.content.introduction}
            </p>

            {post.content.sections.map((section, index) => (
              <section key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-text mb-4">{section.title}</h2>
                <p className="text-muted leading-relaxed">{section.content}</p>
              </section>
            ))}

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-text mb-4">Podsumowanie</h2>
              <p className="text-muted leading-relaxed">{post.content.conclusion}</p>
            </section>
          </article>

          {/* Share Section */}
          <div className="border-t border-white/10 pt-8 mb-16">
            <h3 className="text-lg font-semibold text-text mb-4">Udostępnij artykuł</h3>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-white/5 rounded-lg transition-colors"
                aria-label="Udostępnij na Facebook"
              >
                <Facebook className="w-6 h-6 text-[#1877F2]" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-white/5 rounded-lg transition-colors"
                aria-label="Udostępnij na Twitter"
              >
                <Twitter className="w-6 h-6 text-[#1DA1F2]" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-white/5 rounded-lg transition-colors"
                aria-label="Udostępnij na LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-[#0A66C2]" />
              </a>
            </div>
          </div>

          {/* Related Posts */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-8">Powiązane artykuły</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {RELATED_POSTS.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group block bg-card rounded-xl overflow-hidden hover:shadow-xl 
                           transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <LazyImage
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 
                               transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full 
                                   shadow-lg backdrop-blur-sm">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <time className="text-sm text-muted">
                      {formatDate(relatedPost.date)}
                    </time>
                    <h3 className="text-lg font-semibold text-text mt-2 mb-2 line-clamp-2 
                                group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-2">
                      {relatedPost.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
