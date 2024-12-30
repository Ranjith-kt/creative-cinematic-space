import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryProps {
  category: string;
}

export const Gallery = ({ category }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    "https://images.unsplash.com/photo-1501286353178-1ec881214838",
    "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
  ];

  const handlePrevious = () => {
    setSelectedImage((prev) => 
      prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) => 
      prev === null ? null : prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="container mx-auto px-4 pt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] h-[90vh] p-0 bg-black/90">
          {selectedImage !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
                className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <img
                src={images[selectedImage]}
                alt={`Full screen view ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain"
              />
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