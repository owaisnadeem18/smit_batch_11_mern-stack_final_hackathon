import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 px-6 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            Saylani: Dukhi Dilon Ka Sahara
          </h1>
          <p className="text-lg lg:text-xl mb-8 leading-relaxed drop-shadow-md">
            Empowering communities, spreading smiles, and providing relief where it's needed most. Join hands with Saylani to make a difference today.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Button className="bg-white text-blue-600 px-6 py-3 font-semibold text-lg hover:bg-blue-600 hover:text-white transition rounded-lg shadow-lg">
              Donate Now
            </Button>
            <Button className="bg-transparent border border-white px-6 py-3 font-semibold text-lg hover:bg-white hover:text-blue-600 transition rounded-lg shadow-lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
          <div className="rounded-full bg-white/10 p-8 shadow-lg">
            <img
              src="https://cdn.pixabay.com/photo/2021/04/09/11/01/donation-6164135_960_720.png"
              alt="Saylani Relief"
              className="rounded-lg shadow-xl border-4 border-white/30 hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>

      {/* Decorative Background Effect */}
      {/* <div className="absolute top-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-3xl opacity-50 transform -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-30 transform translate-x-16 translate-y-16"></div> */}
    </div>
  );
}
