import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/siteData";
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin, HelpCircle } from "lucide-react";
import JSONLD from "@/components/JSONLD";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0]; // Fallback for demo

  return {
    title: `${post.title} | SkinCare Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": "https://images.unsplash.com/photo-1594433834139-12117a0d647e?w=1200&h=800&fit=crop",
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "SkinCare Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.skincareclinic.com/logo.png"
      }
    },
    "datePublished": post.date,
    "description": post.excerpt
  };

  return (
    <div className="pt-32 pb-24">
      <JSONLD data={articleSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-6 mb-12">
          <Link href={`/blog?category=${post.category}`} className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
            {post.category}
          </Link>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=100&h=100&fit=crop" alt={post.author} fill />
              </div>
              <div>
                <p className="font-bold text-slate-900">{post.author}</p>
                <div className="flex items-center space-x-3 text-xs text-slate-500">
                  <span className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{post.readingTime}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
               <button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><Facebook size={20} className="text-slate-600" /></button>
               <button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><Twitter size={20} className="text-slate-600" /></button>
               <button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><Linkedin size={20} className="text-slate-600" /></button>
               <button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><Share2 size={20} className="text-slate-600" /></button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl mb-16">
          <Image
            src="https://images.unsplash.com/photo-1594433834139-12117a0d647e?w=1200&h=800&fit=crop"
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table of Contents (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-6">
              <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest border-b border-slate-100 pb-4">On this page</h4>
              <nav className="space-y-4">
                <a href="#overview" className="block text-sm text-slate-600 hover:text-primary transition-colors">Overview</a>
                <a href="#causes" className="block text-sm text-slate-600 hover:text-primary transition-colors">Understanding Causes</a>
                <a href="#solutions" className="block text-sm text-slate-600 hover:text-primary transition-colors">Effective Solutions</a>
                <a href="#faq" className="block text-sm text-slate-600 hover:text-primary transition-colors">Common FAQs</a>
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-9 prose prose-slate prose-lg max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Achieving clear skin isn&apos;t just about the products you use, but understanding the science behind skin health. In this guide, we dive deep into {post.category.toLowerCase()} management.
            </p>
            <h2 id="overview">Overview</h2>
            <p>
              Dermatological health is a cornerstone of overall well-being. Whether you&apos;re dealing with persistent breakouts or looking for anti-aging strategies, a clinical approach ensures the best results.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2 id="causes">Understanding Causes</h2>
            <p>
              Many factors contribute to skin concerns, from genetics and hormonal fluctuations to environmental stressors like UV radiation and pollution.
            </p>
            <blockquote>
              &quot;Consistency is the most important factor in any skincare regimen. Clinical treatments provide the boost, but daily care maintains the results.&quot; — Dr. Elena Vance
            </blockquote>
            <h2 id="solutions">Effective Solutions</h2>
            <p>
              Modern dermatology offers a wide range of treatments including:
            </p>
            <ul>
              <li>Medical-grade chemical peels</li>
              <li>Advanced laser therapy</li>
              <li>Targeted topical medications</li>
              <li>Lifestyle and dietary adjustments</li>
            </ul>

            <div className="my-16 bg-slate-50 p-8 rounded-[32px] border border-slate-100 not-prose">
              <h3 className="text-2xl font-playfair font-bold mb-6" id="faq">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {post.faqs.map((faq, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-bold text-slate-900 flex items-center space-x-2">
                      <HelpCircle className="text-primary flex-shrink-0" size={18} />
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-slate-600 ml-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Author Profile */}
            <div className="not-prose mt-24 bg-white border border-slate-100 rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8">
               <div className="w-32 h-32 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=200&h=200&fit=crop" alt={post.author} fill className="object-cover" />
               </div>
               <div className="text-center md:text-left space-y-4">
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">About the Author</p>
                  <h3 className="text-2xl font-playfair font-bold">{post.author}</h3>
                  <p className="text-slate-600">Dr. Elena Vance is a board-certified dermatologist with over 15 years of experience in medical and aesthetic dermatology. She specializes in advanced laser treatments and holistic skin rejuvenation.</p>
                  <Link href="/about" className="inline-block text-primary font-bold hover:underline">View Professional Profile</Link>
               </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-32 pt-24 border-t border-slate-100">
          <h2 className="text-3xl font-playfair font-bold mb-12">More from the Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((p) => (
              <article key={p.slug} className="group bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 hover:shadow-xl transition-all p-4 flex gap-6 items-center">
                 <div className="w-32 h-32 rounded-2xl overflow-hidden relative flex-shrink-0">
                    <Image src="https://images.unsplash.com/photo-1594433834139-12117a0d647e?w=200&h=200&fit=crop" alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                 </div>
                 <div className="space-y-2">
                    <Link href={`/blog/${p.slug}`} className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {p.title}
                    </Link>
                    <p className="text-xs text-slate-500">{p.date} • {p.readingTime}</p>
                 </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
