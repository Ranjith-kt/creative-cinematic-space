import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/sections/Header";
import { useState } from "react";

const Blog = () => {
  const [activeSection, setActiveSection] = useState("blog");
  const blogPosts = [
    {
      id: 1,
      title: "Non-destructive Workflow in Layout",
      description: "Understanding the importance of non-destructive workflows in VFX layout",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      preview: "Non-destructive workflows are fundamental to modern VFX layout processes. By maintaining the original data and applying modifications as separate layers..."
    },
    {
      id: 2,
      title: "Tools for Every Artist",
      description: "Essential tools and software for modern VFX artists",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      preview: "The modern VFX artist's toolkit is vast and ever-evolving. From industry-standard software like Maya, Houdini, and Nuke to specialized tools..."
    },
    {
      id: 3,
      title: "Mindset in VFX",
      description: "Developing the right approach to VFX work and creative problem-solving",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      preview: "Success in VFX requires more than just technical skills - it demands the right mindset. This includes being detail-oriented while maintaining..."
    }
  ];

  return (
    <>
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="transition-transform hover:-translate-y-1">
              <Card className="h-full overflow-hidden hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">{post.preview}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;