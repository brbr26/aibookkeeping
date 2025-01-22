export interface BlogPost {
  id: string;
  title: string;
  preview: string;
  image: string;
  date: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
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