import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const posts = [
    { id: "001", title: "The Evolution of VFX: From Practical to Digital", date: "2024-03-01", category: "Industry" },
    { id: "002", title: "Understanding Camera Tracking in Modern VFX", date: "2024-02-25", category: "Technical" },
    { id: "003", title: "Unreal Engine in Film Production: A Game Changer", date: "2024-02-20", category: "Technology" },
    { id: "004", title: "The Art of Layout: Composition in VFX", date: "2024-02-15", category: "Creative" },
    { id: "005", title: "FPV Drones: Revolutionizing Cinematography", date: "2024-02-10", category: "Innovation" },
    { id: "006", title: "Virtual Production: The Future of Filmmaking", date: "2024-02-05", category: "Industry" },
    { id: "007", title: "Body Tracking: Techniques and Best Practices", date: "2024-01-30", category: "Technical" },
    { id: "008", title: "Creating Efficient VFX Pipelines", date: "2024-01-25", category: "Workflow" },
    { id: "009", title: "The Role of AI in Modern VFX", date: "2024-01-20", category: "Technology" },
    { id: "010", title: "Balancing Art and Technology in VFX", date: "2024-01-15", category: "Creative" }
  ];

  return (
    <div className="container mx-auto px-4 py-16 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-[#D3E4FD]">Blog Posts</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="bg-white/5 backdrop-blur-lg border-none transform transition-all duration-300 hover:scale-[1.01]">
            <CardHeader>
              <div className="flex justify-between items-center">
                <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                <span className="text-sm text-muted-foreground">#{post.id}</span>
              </div>
              <CardTitle className="text-xl text-[#D3E4FD]">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#C8C8C9]">Coming soon...</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">Read More</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;