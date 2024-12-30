import { useParams } from "react-router-dom";
import { BlogPost as BlogPostComponent } from "@/components/sections/BlogPost";
import { CommentSection } from "@/components/sections/CommentSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  
  const blogPosts = {
    1: {
      title: "Non-destructive Workflow in Layout",
      description: "Understanding the importance of non-destructive workflows in VFX layout",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      content: `Non-destructive workflows are fundamental to modern VFX layout processes. By maintaining the original data and applying modifications as separate layers or parameters, artists can work more efficiently and make changes at any point in the production pipeline.

      This approach allows for greater flexibility and iteration, which is crucial in collaborative environments where multiple artists may need to work on the same shot or sequence. It also makes it easier to respond to client feedback and make adjustments without starting from scratch.

      Key benefits include the ability to revert changes, experiment with different variations, and maintain consistency across multiple shots. This methodology has become industry standard because it significantly reduces risks and saves valuable production time.`
    },
    2: {
      title: "Tools for Every Artist",
      description: "Essential tools and software for modern VFX artists",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      content: `The modern VFX artist's toolkit is vast and ever-evolving. From industry-standard software like Maya, Houdini, and Nuke to specialized tools for specific tasks, having the right resources is crucial for success.

      Understanding when to use each tool is as important as knowing how to use them. This includes mastering core software while staying open to new technologies and workflows that can enhance productivity and creative possibilities.

      The key is not just collecting tools, but building an efficient workflow that allows you to focus on the creative aspects of your work rather than getting bogged down in technical details.`
    },
    3: {
      title: "Mindset in VFX",
      description: "Developing the right approach to VFX work and creative problem-solving",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      content: `Success in VFX requires more than just technical skills - it demands the right mindset. This includes being detail-oriented while maintaining a view of the bigger picture, staying curious and open to learning, and developing strong problem-solving abilities.

      Collaboration is key in VFX production. Understanding how your work fits into the larger pipeline and being able to effectively communicate with team members from different departments can make the difference between a good artist and a great one.

      Maintaining a growth mindset and staying adaptable in an industry that's constantly evolving is crucial for long-term success.`
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <Link to="/blog">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2" />
          Back to Blog
        </Button>
      </Link>
      <BlogPostComponent {...post} />
      <CommentSection />
    </div>
  );
};

export default BlogPost;