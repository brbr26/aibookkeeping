import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BlogPost } from "@/components/blog/BlogPost";
import { blogPosts } from "@/data/blog-posts";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Helmet>
        <title>AI Bookkeeping Blog: Expert Financial Insights & Industry Updates</title>
        <meta name="description" content="Stay informed with expert insights on AI-powered bookkeeping, financial management strategies, and industry trends. Learn how to optimize your business finances." />
        <meta name="keywords" content="AI bookkeeping blog, financial management tips, business accounting insights, automated bookkeeping guides, financial technology trends" />
        <meta property="og:title" content="AI Bookkeeping Blog: Expert Financial Insights" />
        <meta property="og:description" content="Expert insights on AI-powered bookkeeping and financial management strategies for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Bookkeeping Blog: Expert Financial Insights" />
        <meta name="twitter:description" content="Expert insights on AI-powered bookkeeping and financial management." />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <link rel="canonical" href="https://aibookkeeping.com/blog" />
      </Helmet>
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-white mb-12 font-oxanium">Latest Financial Insights & Updates</h1>
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