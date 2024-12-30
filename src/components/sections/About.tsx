export const About = () => {
  return (
    <div className="container mx-auto px-4 pt-28 max-w-3xl">
      <div className="prose prose-lg">
        <h1 className="text-3xl font-light mb-8">About Me</h1>
        <div className="space-y-6 text-gray-700">
          <p>
            Hello! My name is Ranjith KT and I am a VFX artist currently working at Framestore.
            I have had the opportunity to work in both feature films and television, and have experience working
            with various studios. I enjoy creating work inspired by life and the people around me that feels fun,
            expressive, and inventive.
          </p>
          <p>
            I currently live in London but will always be a Kerala boy at heart!
          </p>
          <div className="mt-12">
            <h2 className="text-xl font-medium mb-4">Contact</h2>
            <p className="text-base">
              Email: <a href="mailto:contact@ranjithkt.com" className="text-blue-600 hover:underline">contact@ranjithkt.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};