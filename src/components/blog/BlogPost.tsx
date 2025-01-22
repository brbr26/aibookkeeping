import { Link } from "react-router-dom";

interface BlogPostProps {
  id: string;
  title: string;
  preview: string;
  image: string;
  date: string;
  slug: string;
}

export const BlogPost = ({ id, title, preview, image, date, slug }: BlogPostProps) => {
  return (
    <article 
      key={id} 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h2 className="text-xl font-oxanium font-semibold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-4">
          {preview}
        </p>
        <Link
          to={`/blog/${slug}`}
          className="text-primary hover:text-primary-light font-semibold transition-colors"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};