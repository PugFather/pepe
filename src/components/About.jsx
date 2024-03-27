import { useInView } from "react-intersection-observer";

import mmga from "../assets/mmga.png";
import dextSVG from "../assets/dext-black.svg";
import externalSVG from "../assets/external-link.svg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="about" className="relative mb-20 mt-32">
      <div
        className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between px-4 md:px-0 lg:flex-row"
        ref={ref}
      >
        <img
          src={mmga}
          className={`${inView ? "animate__animated animate__fadeInLeft animate__slow" : ""}  order-2 w-full max-w-[563px] lg:order-1`}
        />
        <div className="order-1 flex flex-col items-center lg:order-2">
          <h2 className="text-shadow font-evermore text-[36px] md:text-[3.5rem] ">
            about
          </h2>
          <div
            className={`${inView ? "animate__animated animate__fadeInRight animate__slow" : ""} mt-8 w-full font-comfortaa md:w-[588px] [&>*:not(:first-child)]:mt-3`}
          >
            <div className="flex h-auto w-full flex-col items-start rounded-lg bg-white/10 p-4 md:h-[5.5rem] md:flex-row md:items-center md:p-6">
              <div className="flex h-auto w-full min-w-44 items-center border-b border-b-white/50 pb-3 font-bold md:h-[30px] md:w-auto md:border-b-0 md:border-r md:border-r-white/20 md:pb-0 md:pr-6">
                Interdimensional Memery
              </div>
              <p className="mt-4 text-sm md:ml-6 md:mt-0">
                PEPE S-137 isn’t just another memecoin; it’s a portal to
                unparalleled hilarity. Don’t chase profits—chase punchlines.
              </p>
            </div>
            <div className="flex h-auto w-full flex-col items-start rounded-lg bg-white/10 p-6 md:h-[5.5rem] md:flex-row md:items-center">
              <div className="flex h-auto w-full min-w-44 items-center border-b border-b-white/50 pb-3 font-bold md:h-[30px] md:w-auto md:border-b-0 md:border-r md:border-r-white/20 md:pb-0 md:pr-6">
                Chaotically Coded
              </div>
              <p className="mt-4 text-sm md:ml-6 md:mt-0">
                No developers, no roadmaps. PEPE S-137 thrives in the wild,
                unpredictable cosmos of memes and mirth.
              </p>
            </div>
            <div className="flex h-auto w-full flex-col items-start rounded-lg bg-white/10 p-6 md:h-[5.5rem] md:flex-row md:items-center">
              <div className="flex h-auto w-full min-w-44 items-center border-b border-b-white/50 pb-3 font-bold md:h-[30px] md:w-auto md:border-b-0 md:border-r md:border-r-white/20 md:pb-0 md:pr-6">
                Multiverse of Memes
              </div>
              <p className="mt-4 text-sm md:ml-6 md:mt-0">
                Connect with fellow memers across dimensions. Share laughs, swap
                stories, and revel in the community’s collective creativity.
              </p>
            </div>
            <div className="flex h-auto w-full flex-col items-start rounded-lg bg-white/10 p-6 md:h-[5.5rem] md:flex-row md:items-center">
              <div className="flex h-auto w-full min-w-44 items-center border-b border-b-white/50 pb-3 font-bold md:h-[30px] md:w-auto md:border-b-0 md:border-r md:border-r-white/20 md:pb-0 md:pr-6">
                Embrace the PEPE S-137
              </div>
              <p className="mt-4 text-sm md:ml-6 md:mt-0">
                Dive into the meme multiverse. Let’s vibe, share
                interdimensional humor, and celebrate the meme that rules them
                all!
              </p>
            </div>
          </div>
          <a
            className={`${inView ? "animate__animated animate__zoomIn animate__slow" : ""} mt-8 flex h-14 cursor-pointer items-center justify-between gap-8 rounded-full bg-white px-6 text-black`}
            target="_blank"
          >
            <div className="flex items-center font-evermore">
              <img src={dextSVG} />
              <p className=" ml-3 whitespace-nowrap text-xs font-medium">
                DEXTools chart
              </p>
            </div>
            <img src={externalSVG} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
