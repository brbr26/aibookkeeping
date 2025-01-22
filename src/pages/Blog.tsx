import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  preview: string;
  image: string;
  date: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How AI is Revolutionizing Small Business Bookkeeping",
    preview: "Discover how artificial intelligence is transforming traditional bookkeeping practices and helping small businesses save time and money.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    date: "March 15, 2024",
    slug: "ai-revolution-bookkeeping"
  },
  {
    id: "2",
    title: "The Future of Financial Management: AI-Powered Solutions",
    preview: "Explore the latest trends in AI-powered financial management and how they're shaping the future of business accounting.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: "March 10, 2024",
    slug: "future-financial-management"
  },
  {
    id: "3",
    title: "5 Ways AI Bookkeeping Reduces Human Error",
    preview: "Learn how automated AI systems are helping businesses minimize errors and improve accuracy in their financial records.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "March 5, 2024",
    slug: "reduce-human-error"
  },
  {
    id: "4",
    title: "Integrating AI Bookkeeping with Your Existing Systems",
    preview: "A comprehensive guide to seamlessly incorporating AI bookkeeping solutions into your current business processes.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    date: "March 1, 2024",
    slug: "integration-guide"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Bookkeeping Blog - Latest Insights & Updates</title>
        <meta 
          name="description" 
          content="Stay updated with the latest trends in AI-powered bookkeeping, financial management tips, and industry insights from AI Bookkeeping experts."
        />
      </Helmet>
      
      <Header />
      
      <main className="pt-28 pb-12 px-4">
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
              <article 
                key={post.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-xl font-oxanium font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.preview}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary hover:text-primary-light font-semibold transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;