"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbarr } from "../Navbar/Navbarr";
import { Button } from "../Button";
import NewFooter from "../NewFooter";
import { client } from "../../lib/sanity";

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
    <div className="bg-gray-100 rounded-full p-6 mb-6">
      <svg
        className="w-16 h-16 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
        ></path>
      </svg>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">No Blog Posts Yet</h3>
    <p className="text-gray-600 mb-6">
      We&lsquo;re working on creating amazing content for you. Check back soon!
    </p>
    <Link
      href="/"
      className="text-[#FB4E29] hover:text-[#FB4E29]/80 font-medium"
    >
      Return to Home
    </Link>
  </div>
);

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const blogsQuery = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          mainImage,
          excerpt,
          publishedAt,
          readTime,
          "author": author->name,
          "category": category->title
        }`;

        const newsQuery = `*[_type == "news"] | order(publishedAt desc)[0...2] {
          _id,
          title,
          slug,
          mainImage,
          excerpt,
          publishedAt,
          readTime,
          "author": author->name,
          "category": category->title
        }`;

        const [blogsData, newsData] = await Promise.all([
          client.fetch(blogsQuery),
          client.fetch(newsQuery),
        ]);

        setBlogs(blogsData);
        setNews(newsData);
        setError(null);
      } catch (error) {
        console.error("Error fetching content:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen mt-[80px] w-[90vw]">
        <Navbarr />

        <div className="py-16">
          <div className="mb-16">
            <div className="h-10 bg-gray-300 rounded-md w-1/4 mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded-md w-3/4 animate-pulse"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 space-y-8">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5">
                    <div className="aspect-[4/3] bg-gray-300 animate-pulse"></div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="h-6 bg-gray-300 rounded-md w-3/4 mb-4 animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded-md w-full mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded-md w-2/3 mb-4 animate-pulse"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 bg-gray-300 rounded-md w-1/4 animate-pulse"></div>
                      <div className="h-4 bg-gray-300 rounded-md w-1/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:w-1/3 space-y-8">
              <div>
                <div className="h-6 bg-gray-300 rounded-md w-1/2 animate-pulse"></div>
              </div>

              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg overflow-hidden"
                >
                  <div className="aspect-[16/9] bg-gray-300 animate-pulse"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded-md w-3/4 mb-4 animate-pulse"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 bg-gray-300 rounded-md w-1/4 animate-pulse"></div>
                      <div className="h-4 bg-gray-300 rounded-md w-1/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex relative flex-col home-font gap-32 items-center justify-between">
      <Navbarr />

      <div className="py-16 z-10 w-screen bg-[#FAFAFA] min-h-screen">
        <div className="w-[90vw] mx-auto mt-[70px]">
          {blogs.length > 0 && !loading && (
            <div className="mb-16">
              <h1 className="text-[56px] font-bold text-gray-900 mb-4">Blog</h1>
              <p className="text-lg text-gray-600">
                Empowering Your Digital Journey with Insights and Innovation
              </p>
            </div>
          )}
          {error && (
            <div className="mt-4 p-3 bg-orange-100 text-orange-700 rounded-md mb-16">
              <p>Error loading blog posts: {error}</p>
            </div>
          )}

          {blogs.length === 0 && !loading && !error ? (
            <EmptyState />
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Side */}
              <div className="lg:w-2/3 space-y-10">
                {blogs.slice(0, 5).map((blog) => (
                  <div
                    key={blog._id}
                    className="overflow-hidden flex flex-col md:flex-row"
                    style={{
                      background:
                        "linear-gradient(113.44deg, rgba(255, 255, 255, 0.4) 22.6%, rgba(255, 255, 255, 0.1) 92.47%)",
                      boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
                      backdropFilter: "blur(15px)",
                      borderRadius: "12px",
                    }}
                  >
                    <div className="md:w-2/5 relative">
                      <div className="aspect-[4/3] bg-gray-300 w-full h-full">
                        {blog.mainImage ? (
                          <Image
                            src={`https://cdn.sanity.io/images/ye739xfs/production/${blog.mainImage.asset._ref.replace("image-", "").replace("-jpg", ".jpg").replace("-png", ".png").replace("-webp", ".webp")}`}
                            alt={blog.title}
                            className="object-cover w-full h-full"
                            width={400}
                            height={300}
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <svg
                              className="w-16 h-16 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="md:w-3/5 p-6 flex flex-col justify-between h-auto">
                      <div className="flex-1">
                        <div className="flex gap-2 mb-2">
                          <span className="text-sm text-[#FB4E29]">
                            {blog.category}
                          </span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">
                            By {blog.author}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2 normal-case">
                          <Link
                            href={`/blog/${blog.slug.current}`}
                            className="hover:text-[#FB4E29] transition-colors"
                          >
                            {blog.title}
                          </Link>
                        </h2>
                        <p className="text-[#6E605D] mb-4 line-clamp-2">
                          {blog.excerpt}
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[#26120D] text-sm">
                          {formatDate(blog.publishedAt)}
                        </span>
                        <span className="text-[#6E605D] text-sm">
                          {blog.readTime} min read
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side Column */}
              <div className="lg:w-1/3 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 capitalize">
                    Stay Informed
                  </h2>
                </div>

                {news.map((newsItem) => (
                  <div
                    key={newsItem._id}
                    className="overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(113.44deg, rgba(255, 255, 255, 0.4) 22.6%, rgba(255, 255, 255, 0.1) 92.47%)",
                      boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
                      backdropFilter: "blur(15px)",
                      borderRadius: "12px",
                    }}
                  >
                    <div className="relative">
                      <div className="aspect-[16/9] bg-gray-300">
                        {newsItem.mainImage ? (
                          <Image
                            src={`https://cdn.sanity.io/images/ye739xfs/production/${newsItem.mainImage.asset._ref
                              .replace("image-", "")
                              .replace("-jpg", ".jpg")
                              .replace("-png", ".png")
                              .replace("-webp", ".webp")}`}
                            alt={newsItem.title}
                            className="object-cover w-full h-full"
                            width={400}
                            height={300}
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <svg
                              className="w-16 h-16 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex gap-2 mb-2">
                        <span className="text-sm text-[#FB4E29]">
                          {newsItem.category}
                        </span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">
                          By {newsItem.author}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2 normal-case">
                        <Link
                          href={`/news/${newsItem.slug.current}`}
                          className="hover:text-[#FB4E29] transition-colors"
                        >
                          {newsItem.title}
                        </Link>
                      </h2>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-[#26120D] text-sm">
                          {formatDate(newsItem.publishedAt)}
                        </span>
                        <span className="text-[#6E605D] text-sm">
                          {newsItem.readTime} min read
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Newsletter Subscription */}
                <div
                  className="py-8 px-6 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(0deg, #FEC8BD 0%, #FFFFFF 100%)",
                    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Stay Ahead of the Curve!
                  </h3>
                  <p className="text-[#26120D] text-sm mb-6">
                    Get your latest insights and tips on website design, SEO,
                    and data analytics
                  </p>

                  <form className="space-y-5">
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div className="flex justify-center w-fit">
                      <Button
                        variant="primary navigation"
                        title="Subscribe Now"
                        link="/contact"
                        rounded={true}
                        type="submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex min-h-screen w-full bg-transparent"></div>
      <NewFooter />
    </div>
  );
};

export default Blogs;
