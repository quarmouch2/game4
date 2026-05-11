import { useState } from 'react';
import { Link } from 'react-router';
import { Gamepad2, Search, User, Menu, Star, Users, TrendingUp, Flame } from 'lucide-react';
import tomodachiLifeImg from '../../imports/MjAyNjA0NzM0ZmZkY2I3ZDRhNGJkMWQ2OGU2MTg2MzFmMjJhNTQ.jpg';

const categories = ['All Games', 'Action', 'Adventure', 'Strategy', 'RPG', 'Sports', 'Racing'];

const games = [
  { id: 1, title: 'Tomodachi Life', category: 'Adventure', rating: 4.7, players: '1.9M', image: tomodachiLifeImg, featured: true },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All Games');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === 'All Games' || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredGame = games.find(game => game.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-8 h-8 text-purple-400" />
              <span className="font-bold text-xl text-white">Games4All</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Games</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Community</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Support</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="text-gray-300 hover:text-white">
                <User className="w-5 h-5" />
              </button>
              <button className="md:hidden text-gray-300 hover:text-white">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {featuredGame && (
        <section className="relative h-96 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${featuredGame.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="text-orange-500 font-semibold">Featured Game</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">{featuredGame.title}</h1>
              <p className="text-gray-300 mb-6">Experience the ultimate gaming adventure with stunning graphics and immersive gameplay.</p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-semibold">{featuredGame.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-white">{featuredGame.players} Players</span>
                </div>
              </div>
              <Link to="/offer">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                  Play Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                {game.trending && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    Trending
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white mb-2">{game.title}</h3>
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-purple-400">{game.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white">{game.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                  <Users className="w-4 h-4" />
                  <span>{game.players} Players</span>
                </div>
                <Link to="/offer">
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition">
                    Play Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Gamepad2 className="w-6 h-6 text-purple-400" />
                <span className="font-bold text-lg text-white">Games4All</span>
              </div>
              <p className="text-gray-400 text-sm">Your ultimate destination for the best online games.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Games</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Action</a></li>
                <li><a href="#" className="hover:text-white transition">Adventure</a></li>
                <li><a href="#" className="hover:text-white transition">Strategy</a></li>
                <li><a href="#" className="hover:text-white transition">RPG</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Community Guidelines</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Games4All. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
