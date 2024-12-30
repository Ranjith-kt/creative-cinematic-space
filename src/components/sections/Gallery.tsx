import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface GalleryProps {
  category: string;
}

export const Gallery = ({ category }: GalleryProps) => {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const media = [
    // Images
    { type: "image", url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
    { type: "image", url: "https://images.unsplash.com/photo-1493962853295-0fd70327578a" },
    { type: "image", url: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f" },
    { type: "video", url: "https://player.vimeo.com/video/496740824" },
    { type: "image", url: "https://images.unsplash.com/photo-1438565434616-3ef039228b15" },
    { type: "image", url: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
    { type: "video", url: "https://player.vimeo.com/video/209550508" },
    { type: "image", url: "https://images.unsplash.com/photo-1469041797191-50ace28483c3" },
    { type: "image", url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
    { type: "video", url: "https://player.vimeo.com/video/77424642" },
    { type: "image", url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
    { type: "image", url: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9" },
  ];

  const handlePrevious = () => {
    setSelectedMedia((prev) => 
      prev === null ? null : prev === 0 ? media.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedMedia((prev) => 
      prev === null ? null : prev === media.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="container mx-auto px-4 pt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {media.map((item, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden cursor-pointer group relative"
            onClick={() => setSelectedMedia(index)}
          >
            {item.type === "image" ? (
              <img
                src={item.url}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-black/90 flex items-center justify-center group-hover:bg-black/70 transition-colors">
                <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog open={selectedMedia !== null} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-[95vw] h-[90vh] p-0 bg-black/90">
          {selectedMedia !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
                className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              {media[selectedMedia].type === "image" ? (
                <img
                  src={media[selectedMedia].url}
                  alt={`Full screen view ${selectedMedia + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <iframe
                  src={`${media[selectedMedia].url}?autoplay=1&background=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              )}

              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};