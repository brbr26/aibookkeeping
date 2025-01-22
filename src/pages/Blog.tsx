import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { BookOpen } from "lucide-react";
import { BlogPost } from "@/components/blog/BlogPost";
import { blogPosts } from "@/data/blog-posts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Bookkeeping Blog - Latest Insights & Updates</title>
        <meta 
          name="description" 
          content="Stay updated with the latest trends in AI-powered bookkeeping, financial management tips, and industry insights from AI Bookkeeping experts."
        />
        <meta 
          name="keywords" 
          content="AI bookkeeping blog, financial insights, bookkeeping tips, business automation, financial management, accounting technology, business growth strategies, tax planning tips, small business finance, AI accounting"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Bookkeeping Blog - Latest Insights & Updates" />
        <meta 
          property="og:description" 
          content="Stay updated with the latest trends in AI-powered bookkeeping, financial management tips, and industry insights from AI Bookkeeping experts."
        />
        <meta property="og:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Bookkeeping Blog - Latest Insights & Updates" />
        <meta 
          name="twitter:description" 
          content="Stay updated with the latest trends in AI-powered bookkeeping, financial management tips, and industry insights from AI Bookkeeping experts."
        />
        <meta name="twitter:image" content="/lovable-uploads/e086e3c7-5d90-4e0f-bb00-cdb4859a19f0.png" />
      </Helmet>
      
      <Header />
      
      <main className="pt-32 md:pt-40 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-primary mr-2" />
              <h1 className="text-4xl font-oxanium font-bold text-gray-900">
                AI Bookkeeping Blog
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the latest insights, tips, and trends in AI-powered financial management
            </p>
          </div>

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