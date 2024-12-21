import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogs = [
  {
    title: "The Future of Work: Remote Teams and Digital Transformation",
    excerpt: "Explore how businesses are adapting to the new normal with remote work solutions and digital transformation strategies.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
    date: "Dec 15, 2023"
  },
  {
    title: "Optimizing Business Processes for Growth",
    excerpt: "Learn about the key strategies for streamlining your business processes to achieve sustainable growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    date: "Dec 10, 2023"
  },
  {
    title: "Building Strong Teams Through Strategic Recruitment",
    excerpt: "Discover effective strategies for recruiting and retaining top talent in today's competitive market.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
    date: "Dec 5, 2023"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with our latest thoughts and industry trends
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">{blog.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link
                  to="/blog"
                  className="text-brand hover:text-brand-dark font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;