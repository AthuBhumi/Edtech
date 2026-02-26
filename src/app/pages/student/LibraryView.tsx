import React from 'react';
import { BookOpen, Clock, Star, Search } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

const borrowedBooks = [
  { title: 'The Alchemist', author: 'Paulo Coelho', dueDate: 'Feb 28', daysLeft: 5, cover: '📘' },
  { title: 'Harry Potter', author: 'J.K. Rowling', dueDate: 'Mar 5', daysLeft: 12, cover: '📗' },
];

const recommendedBooks = [
  { title: 'Atomic Habits', author: 'James Clear', rating: 4.8, category: 'Self-Help', available: true },
  { title: 'Brief History of Time', author: 'Stephen Hawking', rating: 4.9, category: 'Science', available: true },
  { title: 'Sapiens', author: 'Yuval Noah Harari', rating: 4.7, category: 'History', available: false },
  { title: '1984', author: 'George Orwell', rating: 4.6, category: 'Fiction', available: true },
];

const popularBooks = [
  { title: 'Rich Dad Poor Dad', borrowed: 42, category: 'Finance' },
  { title: 'The Theory of Everything', borrowed: 38, category: 'Science' },
  { title: 'Wings of Fire', borrowed: 45, category: 'Biography' },
];

export const LibraryView: React.FC = () => {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
          Library 📖
        </h1>
        <p className="text-white/60 text-sm lg:text-base">Browse and borrow books</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6">
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <BookOpen className="w-6 h-6 lg:w-8 lg:h-8 text-[#2563EB] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>2</p>
          <p className="text-xs text-white/60">Books Borrowed</p>
        </div>
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-[#F59E0B] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>5</p>
          <p className="text-xs text-white/60">Days Until Due</p>
        </div>
        <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
          <Star className="w-6 h-6 lg:w-8 lg:h-8 text-[#10B981] mb-3" />
          <p className="text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-mono)' }}>24</p>
          <p className="text-xs text-white/60">Books Read</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">Currently Borrowed</h2>
            <div className="space-y-3">
              {borrowedBooks.map((book, idx) => (
                <div key={idx} className="glass-card rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-4xl">{book.cover}</div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{book.title}</h3>
                      <p className="text-sm text-white/60 mb-2">{book.author}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className={`${
                          book.daysLeft <= 5 ? 'bg-[#F43F5E]/20 text-[#F43F5E]' : 'bg-[#10B981]/20 text-[#10B981]'
                        } border-none text-xs`}>
                          Due: {book.dueDate}
                        </Badge>
                        <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-none text-xs">
                          {book.daysLeft} days left
                        </Badge>
                      </div>
                    </div>
                    <Button size="sm" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs">
                      Renew
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg lg:text-xl font-semibold text-white">Search Books</h2>
            </div>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <Input 
                placeholder="Search by title, author, or category..." 
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </div>
            <div className="space-y-3">
              {recommendedBooks.map((book, idx) => (
                <div key={idx} className="glass-card rounded-xl p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1">{book.title}</h4>
                      <p className="text-xs text-white/60 mb-2">{book.author}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className="bg-[#7C3AED]/20 text-[#7C3AED] border-none text-xs">
                          {book.category}
                        </Badge>
                        <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-none text-xs flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          {book.rating}
                        </Badge>
                        {book.available ? (
                          <Badge className="bg-[#10B981]/20 text-[#10B981] border-none text-xs">
                            Available
                          </Badge>
                        ) : (
                          <Badge className="bg-[#F43F5E]/20 text-[#F43F5E] border-none text-xs">
                            Borrowed
                          </Badge>
                        )}
                      </div>
                    </div>
                    {book.available && (
                      <Button size="sm" variant="ghost" className="text-[#2563EB] hover:bg-[#2563EB]/10 text-xs">
                        Borrow
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Most Popular 🔥</h2>
            <div className="space-y-3">
              {popularBooks.map((book, idx) => (
                <div key={idx} className="glass-card rounded-xl p-3">
                  <h4 className="text-white font-semibold text-sm mb-1">{book.title}</h4>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#7C3AED]/20 text-[#7C3AED] border-none text-xs">
                      {book.category}
                    </Badge>
                    <span className="text-xs text-white/60">{book.borrowed} borrowed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl lg:rounded-2xl p-4 lg:p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Reading Goals</h2>
            <div className="glass-card rounded-xl p-4 mb-3">
              <p className="text-sm text-white/60 mb-2">Monthly Goal</p>
              <p className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                4/5 Books
              </p>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-[#10B981] h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
