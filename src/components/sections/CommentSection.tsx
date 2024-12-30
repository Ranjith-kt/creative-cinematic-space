import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface Comment {
  id: number;
  name: string;
  comment: string;
  timestamp: string;
}

export const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      name,
      comment,
      timestamp: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setName("");
    setComment("");
    
    toast({
      title: "Success",
      description: "Comment added successfully!",
    });
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Comments</h3>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="max-w-md"
        />
        <Textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px]"
        />
        <Button type="submit">Post Comment</Button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold">{comment.name}</h4>
                <span className="text-sm text-gray-500">{comment.timestamp}</span>
              </div>
              <p className="text-gray-600">{comment.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};