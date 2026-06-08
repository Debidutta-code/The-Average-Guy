import React from 'react';
import { blogPosts } from '@/data/siteData';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Skin Health Blog | Expert Dermatology Advice",
  description: "Read the latest articles on skin care, hair treatments, and aesthetic medicine from our expert dermatologists.",
};

export default async function BlogListing({
  searchParams
}: {
  searchParams: Promise<{ category?: string; q?: string }>
}) {
  const { category = "All", q = "" } = await searchParams;
  const categories = ["All", "Acne", "Hair Care", "Skin Care", "Cosmetic Dermatology", "Anti Aging", "Laser Treatments"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = category === "All" || post.category === category;
    const matchesSearch = q === "" ||
      post.title.toLowerCase().includes(q.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(q.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900">Skin Health Blog</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Expert insights and advice to help you maintain healthy, beautiful skin and hair.</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20 bg-slate-50/50 p-6 rounded-[2rem] border border-slate-100">
          <form className="relative w-full md:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
            <input
              name="q"
              type="text"
              defaultValue={q}
              placeholder="Search articles..."
              className="w-full pl-14 pr-6 py-4 rounded-full bg-white border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-sm font-medium"
            />
            <input type="hidden" name="category" value={category} />
          </form>
          <div className="flex flex-wrap gap-3 justify-center md:justify-end w-full">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${cat}${q ? `&q=${q}` : ''}`}
                className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${cat === category ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-white text-slate-500 border border-slate-100 hover:border-primary hover:text-primary"}`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.length > 0 ? filteredPosts.map((post) => (
            <article key={post.slug} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1594433834139-12117a0d647e?w=800&h=600&fit=crop"
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
                  {post.category}
                </div>
              </Link>
              <div className="p-8 space-y-5">
                <div className="flex items-center space-x-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center space-x-2">
                    <Calendar size={14} className="text-primary" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Clock size={14} className="text-primary" />
                    <span>{post.readingTime}</span>
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-6 flex items-center justify-between border-t border-slate-50">
                  <div className="flex items-center space-x-3 text-sm font-bold text-slate-900">
                    <div className="w-9 h-9 rounded-full bg-slate-100 overflow-hidden relative border border-slate-100">
                      <Image src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=50&h=50&fit=crop" alt={post.author} fill className="object-cover" />
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="w-10 h-10 flex items-center justify-center bg-primary/5 text-primary rounded-full hover:bg-primary hover:text-white transition-all">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </article>
          )) : (
            <div className="col-span-full text-center py-20 bg-slate-50 rounded-[40px] border border-dashed border-slate-300">
              <p className="text-slate-500 font-bold">No articles found matching your criteria.</p>
              <Link href="/blog" className="text-primary mt-2 inline-block font-bold">Clear all filters</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
