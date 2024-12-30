import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-20">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((post) => (
          <Card key={post} className="bg-white/5 backdrop-blur-lg border-none">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-gray-600">Blog posts will be available soon.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;