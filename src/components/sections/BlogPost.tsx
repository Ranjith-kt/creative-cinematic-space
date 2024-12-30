import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPostProps {
  title: string;
  description: string;
  content: string;
  image: string;
}

export const BlogPost = ({ title, description, content, image }: BlogPostProps) => {
  return (
    <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="prose prose-sm max-w-none">
          {content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-600">{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};