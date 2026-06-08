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
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <form className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              name="q"
              type="text"
              defaultValue={q}
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <input type="hidden" name="category" value={category} />
          </form>
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${cat}${q ? `&q=${q}` : ''}`}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${cat === category ? "bg-primary text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? filteredPosts.map((post) => (
            <article key={post.slug} className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1594433834139-12117a0d647e?w=800&h=600&fit=crop"
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase">
                  {post.category}
                </div>
              </Link>
              <div className="p-8 space-y-4">
                <div className="flex items-center space-x-4 text-xs font-medium text-slate-500">
                  <span className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readingTime}</span>
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-slate-600 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center space-x-2 text-sm font-bold text-slate-900">
                    <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden relative">
                      <Image src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=50&h=50&fit=crop" alt={post.author} fill />
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-primary p-2 hover:bg-primary/5 rounded-full transition-colors">
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
