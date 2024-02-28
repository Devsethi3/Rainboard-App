import { FollowingPointer } from "./components/followingPointer/FollowingPointer";
import { Header } from "./components/navbar/Navbar"
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect"

const page = () => {
  const words = [
    {
      text: "Collabrative",
    },
    {
      text: "Whiteboarding",
    },
    {
      text: "with",
    },
    {
      text: "Rainboard.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];


  return (
    <div>
      <Header />
      <div className="min-h-screen w-full text-black dark:text-white bg-white dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="flex flex-col min-h-screen items-center justify-center">
          <div className="flex h-screen flex-col justify-center gap-10 items-center">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
              The road to freedom starts from here
            </p>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold">Experience the Future of</h1>
              <TypewriterEffectSmooth words={words} />
            </div>
            <div className="flex flex-col gap-[1rem] md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
              <button className="py-3 pt-[1rem] rounded-full px-8 dark:bg-white dark:text-black font-medium text-white bg-black">Join Now</button>
              <button className="py-3 pt-[1rem] rounded-full px-8 text-white bg-[#4F46E5]">Get Started</button>
            </div>
          </div>
          <div>
            <FollowingPointer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page