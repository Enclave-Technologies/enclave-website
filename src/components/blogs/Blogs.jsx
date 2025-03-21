"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbarr } from "../Navbar/Navbarr";
import { Button } from "../Button";
import NewFooter from "../NewFooter";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (blogId) => {
    setImageErrors((prev) => ({
      ...prev,
      [blogId]: true,
    }));
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:1337/api/articles?populate=*"
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();
        setBlogs(data.data || []);
        setError(null);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const sampleBlogs = [
    {
      id: 1,
      title: "The Future of Digital Marketing: Trends to Watch in 2025",
      description:
        "Explore emerging trends that will shape the digital marketing landscape in the coming years.",
      updatedAt: "2023-01-15",
      readTime: "5 minute read",
      cover: {
        url: "https://picsum.photos/seed/marketing1/800/600",
      },
    },
    {
      id: 2,
      title:
        "How to Create a High-Converting Website: Design and Development Tips",
      description:
        "Learn best practices for designing and developing websites that convert visitors into customers.",
      updatedAt: "2023-02-10",
      readTime: "7 minute read",
    },
    {
      id: 3,
      title: "SEO Best Practices: Strategies for 2025",
      description:
        "Keyword research identifies relevant search terms potential customers use. By targeting the right keywords, businesses can improve content relevance, attract more visitors, and drive conversions.",
      updatedAt: "2023-03-08",
      readTime: "6 minute read",
      cover: {
        url: "https://picsum.photos/seed/seo1/800/600",
      },
    },
    {
      id: 4,
      title:
        "Data Analytics in Digital Marketing: Turning Insights into Action",
      description:
        "Understand how to leverage data analytics to drive better marketing decisions and improve ROI.",
      updatedAt: "2023-04-12",
      readTime: "8 minute read",
    },
    {
      id: 5,
      title:
        "The Role of AI in Digital Marketing: Opportunities and Challenges",
      description:
        "Examine how artificial intelligence is transforming digital marketing strategies and what it means for businesses.",
      updatedAt: "2023-05-20",
      readTime: "9 minute read",
      cover: {
        url: "https://picsum.photos/seed/ai1/800/600",
      },
    },
    {
      id: 6,
      title: "Building a Comprehensive Digital Marketing Strategy",
      description:
        "A complete guide to developing and implementing an effective digital marketing strategy for your business.",
      updatedAt: "2023-06-15",
      readTime: "7 minute read",
      cover: {
        url: "https://picsum.photos/seed/strategy1/800/600",
      },
    },
    {
      id: 7,
      title:
        "Website Performance Optimization: Techniques for Speed and Efficiency",
      description:
        "Learn how to optimize your website for faster loading times and better user experience.",
      updatedAt: "2023-07-10",
      readTime: "6 minute read",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  const displayBlogs = blogs.length > 0 ? blogs : sampleBlogs;

  if (loading) {
    return (
      <div className="min-h-screen mt-[80px] w-[90vw]">
        <Navbarr />

        <div className="py-16">
          <div className="mb-16">
            <div className="h-10 bg-gray-200 rounded-md w-1/4 mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 space-y-8">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5">
                    <div className="aspect-[4/3] bg-gray-200 animate-pulse"></div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-full mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-2/3 mb-4 animate-pulse"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 bg-gray-200 rounded-md w-1/4 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded-md w-1/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:w-1/3 space-y-8">
              <div>
                <div className="h-6 bg-gray-200 rounded-md w-1/2 animate-pulse"></div>
              </div>

              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg overflow-hidden"
                >
                  <div className="aspect-[16/9] bg-gray-200 animate-pulse"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-4 animate-pulse"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 bg-gray-200 rounded-md w-1/4 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded-md w-1/4 animate-pulse"></div>
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
    <div className="min-h-screen mt-[70px] w-[90vw]">
      <Navbarr />

      <div className="py-16">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600">
            Empowering Your Digital Journey with Insights and Innovation
          </p>
          {error && (
            <div className="mt-4 p-3 bg-orange-100 text-orange-700 rounded-md">
              <p>
                Using sample blog data for display. Strapi connection error:{" "}
                {error}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side */}
          <div className="lg:w-2/3 space-y-10">
            {displayBlogs.slice(0, 5).map((blog) => (
              <div
                key={blog.id}
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
                    {/* Placeholder for blog image */}
                    <div className="flex items-center justify-center h-full">
                      {blog?.cover?.url && !imageErrors[blog?.id] ? (
                        <Image
                          src={
                            blog?.cover?.url.startsWith("http")
                              ? blog?.cover?.url
                              : `http://localhost:1337${blog?.cover?.url}`
                          }
                          alt={blog?.title}
                          className="object-cover w-full h-full"
                          width={400}
                          height={300}
                          unoptimized={blog?.cover?.url.startsWith("http")}
                          onError={() => handleImageError(blog?.id)}
                        />
                      ) : (
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
                      )}
                    </div>
                  </div>
                </div>

                <div className="md:w-3/5 p-6 flex flex-col justify-between h-auto">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 normal-case">
                      <Link
                        href={`/blogs/${blog.id}`}
                        className="hover:text-[#FB4E29] transition-colors"
                      >
                        {blog?.title}
                      </Link>
                    </h2>
                    <p className="text-[#6E605D] mb-4 line-clamp-2">
                      {blog?.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#26120D] text-sm">
                      {blog?.updatedAt
                        ? formatDate(blog?.updatedAt)
                        : "DD/MM/YYYY"}
                    </span>
                    <span className="text-[#6E605D] text-sm">
                      {blog?.readTime || "XX minute read"}
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

            {displayBlogs.slice(5, 7).map((blog) => (
              <div
                key={blog.id}
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
                    <div className="flex items-center justify-center h-full">
                      {blog?.cover?.url && !imageErrors[blog?.id] ? (
                        <Image
                          src={
                            blog?.cover?.url.startsWith("http")
                              ? blog?.cover?.url
                              : `http://localhost:1337${blog?.cover?.url}`
                          }
                          alt={blog?.title}
                          className="object-cover w-full h-full"
                          width={400}
                          height={300}
                          unoptimized={blog?.cover?.url.startsWith("http")}
                          onError={() => handleImageError(blog?.id)}
                        />
                      ) : (
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
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 normal-case">
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="hover:text-[#FB4E29] transition-colors"
                    >
                      {blog?.title}
                    </Link>
                  </h2>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[#26120D] text-sm">
                      {blog?.updatedAt
                        ? formatDate(blog?.updatedAt)
                        : "DD/MM/YYYY"}
                    </span>
                    <span className="text-[#6E605D] text-sm">
                      {blog?.readTime || "XX minute read"}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Newsletter Subscription */}
            <div
              className="py-8 px-6 rounded-2xl"
              style={{
                background: "linear-gradient(0deg, #FEC8BD 0%, #FFFFFF 100%)",
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Stay Ahead of the Curve!
              </h3>
              <p className="text-[#26120D] text-sm mb-6">
                Get your latest insights and tips on website design, SEO, and
                data analytics
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
      </div>

      <NewFooter />
    </div>
  );
};

export default Blogs;
