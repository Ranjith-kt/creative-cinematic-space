import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";

const Tools = () => {
  const tools = [
    {
      id: 1,
      name: "Maya Camera Tracker",
      description: "A Python script for Maya that automates camera tracking workflow and exports data.",
      code: `import maya.cmds as cmds
import maya.mel as mel

def setup_camera_track():
    """
    Sets up camera tracking environment in Maya
    with proper scene settings and initial camera setup.
    """
    # Create a new camera
    camera = cmds.camera(name="trackingCam")[0]
    
    # Set camera attributes
    cmds.setAttr(camera + ".displayResolution", 1)
    cmds.setAttr(camera + ".displayGateMask", 1)
    cmds.setAttr(camera + ".overscan", 1.1)
    
    # Setup image plane
    image_plane = cmds.imagePlane(camera=camera)
    
    return camera, image_plane

def main():
    camera, image_plane = setup_camera_track()
    print("Camera tracking setup complete!")

if __name__ == "__main__":
    main()`
    },
    {
      id: 2,
      name: "Batch Render Manager",
      description: "Manages and optimizes batch rendering processes with progress tracking.",
      code: "# Code will be visible after download"
    },
    {
      id: 3,
      name: "Scene Cleanup Utility",
      description: "Cleans up unused nodes, optimizes scene hierarchy, and fixes common issues.",
      code: "# Code will be visible after download"
    },
    {
      id: 4,
      name: "Animation Export Tool",
      description: "Streamlines the process of exporting animations with custom settings.",
      code: "# Code will be visible after download"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-[#D3E4FD]">Tools & Scripts</h1>
      <div className="grid gap-6">
        {tools.map((tool) => (
          <Card key={tool.id} className="bg-white/5 backdrop-blur-lg border-none">
            <CardHeader>
              <CardTitle className="text-xl text-[#D3E4FD]">{tool.name}</CardTitle>
              <CardDescription className="text-[#C8C8C9]">{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black/30 p-4 rounded-md mb-4 overflow-x-auto">
                <pre className="text-sm text-[#C8C8C9]">
                  <code>{tool.code}</code>
                </pre>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Script
                </Button>
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tools;