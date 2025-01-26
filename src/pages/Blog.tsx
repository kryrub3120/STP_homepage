import React, { useState } from 'react';
import { Search, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LazyImage } from '../components/LazyImage';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
}

const POSTS_PER_PAGE = 6;

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Jak AI rewolucjonizuje skauting piłkarski?',
    description: 'Odkryj, jak sztuczna inteligencja zmienia sposób identyfikacji młodych talentów w piłce nożnej.',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1560525821-d5615ef80c69?auto=format&fit=crop&q=80',
    category: 'Technologia'
  },
  {
    id: '2',
    title: 'Predykcja sukcesu sportowego - mity i fakty',
    description: 'Analiza najnowszych badań dotyczących przewidywania potencjału sportowego młodych zawodników.',
    date: '2024-03-12',
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80',
    category: 'Badania'
  },
  {
    id: '3',
    title: 'Rozwój motoryczny młodych piłkarzy',
    description: 'Kompleksowy przewodnik po kluczowych aspektach rozwoju fizycznego młodych sportowców.',
    date: '2024-03-08',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80',
    category: 'Poradniki'
  },
  {
    id: '4',
    title: 'Machine Learning w sporcie',
    description: 'Jak uczenie maszynowe pomaga w analizie potencjału sportowego?',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
    category: 'Technologia'
  },
  {
    id: '5',
    title: 'Sukces młodych talentów',
    description: 'Historie sukcesu zawodników zidentyfikowanych przez systemy predykcyjne.',
    date: '2024-03-01',
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80',
    category: 'Historie'
  }
];

export function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on search query
  const filteredPosts = BLOG_POSTS.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6 animate-fade-in">
              Odkryj świat predykcji sportowej
            </h1>
            <p className="text-xl text-muted animate-slide-up">
              Ekspertowe analizy, wywiady i poradniki, które wspierają rozwój młodych talentów sportowych
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="max-w-2xl mx-auto animate-slide-up">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
            <input
              type="text"
              placeholder="Szukaj artykułów..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-white/10 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                       text-text placeholder-muted transition-all duration-300
                       hover:border-white/20"
            />
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                       transition-all duration-300 transform hover:-translate-y-1
                       animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <LazyImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 
                           transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full
                                shadow-lg backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <time className="text-sm text-muted">{formatDate(post.date)}</time>
                <h2 className="text-xl font-bold text-text mt-2 mb-3 line-clamp-2 
                             group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-muted mb-4 line-clamp-3">{post.description}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 
                           transition-colors group/link"
                >
                  <span>Czytaj więcej</span>
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-card border border-white/10 text-text 
                       hover:bg-white/5 transition-all duration-300 disabled:opacity-50 
                       disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex flex-wrap items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-300
                            transform hover:scale-105 active:scale-95
                            ${currentPage === i + 1 
                              ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                              : 'bg-card border border-white/10 text-text hover:bg-white/5'
                            }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-card border border-white/10 text-text 
                       hover:bg-white/5 transition-all duration-300 disabled:opacity-50 
                       disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}