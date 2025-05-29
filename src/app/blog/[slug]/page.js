"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbarr } from "../../../components/Navbar/Navbarr";
import { useParams } from "next/navigation";
import { client } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";

const components = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed text-[#121212]">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-5 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mb-4 mt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold mb-4 mt-6">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#FB4E29] pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
};

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        // Query to get the blog post and its related content
        const query = `*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          excerpt,
          mainImage,
          publishedAt,
          readTime,
          body,
          "author": author->name,
          "category": category->title,
          "relatedPosts": *[_type == "post" && slug.current != $slug][0...4]{
            _id,
            title,
            excerpt,
            mainImage,
            slug
          }
        }`;

        const data = await client.fetch(query, { slug: params.slug });
        setBlog(data);
        setRelatedPosts(data?.relatedPosts || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center mt-[80px] w-[90vw] text-[#121212]">
        <Navbarr />
        <div className="w-full max-w-3xl mx-auto pt-12 animate-pulse">
          <div className="h-6 bg-gray-300 w-1/3 mb-4 rounded"></div>
          <div className="h-12 bg-gray-300 w-full mb-4 rounded"></div>
          <div className="h-8 bg-gray-300 w-2/3 mb-4 rounded"></div>
          <div className="h-4 bg-gray-300 w-1/4 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center mt-[80px] w-[90vw] text-[#121212]">
        <Navbarr />
        <div className="w-full max-w-3xl mx-auto pt-12">
          <div className="bg-red-100 text-red-700 p-4 rounded">
            Error loading blog post: {error}
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center mt-[80px] w-[90vw] text-[#121212]">
        <Navbarr />
        <div className="w-full max-w-3xl mx-auto pt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
            <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center mt-[80px] w-[90vw] text-[#121212]">
      <Navbarr />

      {/* Header Section */}
      <div className="max-w-3xl w-full mx-auto pt-12 pb-6 px-4 text-center">
        <div className="text-sm mb-2 flex flex-col items-center gap-1">
          <span>
            {blog.category} • {blog.readTime} mins
          </span>
        </div>
        <h1 className="text-3xl md:text-6xl font-medium mb-2 mt-2">
          {blog.title}
        </h1>
        <p className="text-lg md:text-2xl mb-4">{blog.excerpt}</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs mb-4">
          <span>By {blog.author}</span>
          <span className="hidden md:inline">•</span>
          <span>{formatDate(blog.publishedAt)}</span>
        </div>
      </div>

      {/* Main Image and CTA */}
      <div className="w-full">
        {blog.mainImage && (
          <Image
            src={`https://cdn.sanity.io/images/ye739xfs/production/${blog.mainImage.asset._ref
              .replace("image-", "")
              .replace("-jpg", ".jpg")
              .replace("-png", ".png")
              .replace("-webp", ".webp")}`}
            alt={blog.title}
            width={800}
            height={400}
            className="rounded-2xl w-full h-[350px] object-cover"
          />
        )}
      </div>

      <div className="w-full mx-auto px-4 mt-8 flex flex-col md:flex-row gap-8 max-w-6xl">
        {/* Main Content */}
        <div className="flex-[2] w-full px-4 mt-8 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <PortableText value={blog.body} components={components} />
          </div>
          {/* CTA Card for mobile (hidden on desktop) */}
          <div className="block md:hidden w-full">
            <div className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col gap-3 mt-4">
              <h3 className="font-bold text-lg">
                Want something more tailored for your business?
              </h3>
              <p className="text-sm">
                Do you not feel confident that AI can understand and replicate
                your brand&apos;s identity with your website? Our expert team
                can help you amplify your brand with a custom design for your
                website.
              </p>
              <div className="flex gap-2 mt-2">
                <button className="bg-[#FB4E29] text-white px-4 py-2 rounded font-semibold">
                  Consult Us
                </button>
                <button className="bg-white border border-[#FB4E29] text-[#FB4E29] px-4 py-2 rounded font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-[1] flex flex-col w-full mt-6 md:mt-0 z-10">
          <div className="bg-[#FFEDEA] text-black rounded-xl shadow-lg p-6 flex flex-col gap-3">
            <h3 className="font-bold text-lg">
              Want something more tailored for your business?
            </h3>
            <p className="text-sm">
              Do you not feel confident that AI can understand and replicate
              your brand&apos;s identity on your website?
            </p>

            <p className="text-sm">
              Don&apos;t worry, our experts can help you amplify your brand with
              a custom design for your website.
            </p>
            <div className="flex gap-4 mt-2 w-full">
              <button className="bg-[#FB4E29] text-white px-4 py-2 rounded font-semibold w-full">
                Consult Us
              </button>
              <button className="bg-white border border-[#FB4E29] text-[#FB4E29] px-4 py-2 rounded font-semibold w-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cards Section */}
      <div className="w-full max-w-8xl mx-auto mt-16 px-4">
        <h3 className="text-[28px] font-bold mb-4 px-4">
          You Might Be Interested In
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {relatedPosts.map((post, idx) => (
            <div
              key={post._id}
              className="flex flex-col items-center rounded-2xl p-4 min-h-[200px]"
            >
              <div className="flex flex-col items-center flex-grow">
                {post.mainImage && (
                  <Image
                    src={`https://cdn.sanity.io/images/ye739xfs/production/${post.mainImage.asset._ref
                      .replace("image-", "")
                      .replace("-jpg", ".jpg")
                      .replace("-png", ".png")
                      .replace("-webp", ".webp")}`}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="rounded-[48px] w-full h-40 object-cover mb-4"
                  />
                )}
                <h4 className="font-medium text-lg mb-2 text-center">
                  {post.title}
                </h4>
                <p className="text-[#121212] text-sm mb-4 text-center">
                  {post.excerpt}
                </p>
              </div>
              <button className="bg-[#FB4E29] text-white px-8 py-2 rounded font-semibold w-full">
                Read
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
