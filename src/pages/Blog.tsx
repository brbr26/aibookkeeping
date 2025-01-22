import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BlogPost } from "@/components/blog/BlogPost";
import { blogPosts } from "@/data/blog-posts";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>Blog - AI Bookkeeping Insights & Updates</title>
        <meta name="description" content="Stay updated with the latest in AI-powered bookkeeping, financial management tips, and industry insights from AI Bookkeeping experts." />
        <meta name="keywords" content="AI bookkeeping blog, financial insights, bookkeeping tips, business finance, AI technology" />
        <meta property="og:title" content="Blog - AI Bookkeeping Insights & Updates" />
        <meta property="og:description" content="Stay updated with the latest in AI-powered bookkeeping, financial management tips, and industry insights from AI Bookkeeping experts." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - AI Bookkeeping Insights & Updates" />
        <meta name="twitter:description" content="Stay updated with the latest in AI-powered bookkeeping, financial management tips, and industry insights." />
      </Helmet>
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-white mb-12 font-oxanium">Latest Insights</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPost key={post.id} {...post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;