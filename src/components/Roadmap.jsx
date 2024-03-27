import pepepissingnobackground from "../assets/pepepissingnobackground.png";
import pepebull from "../assets/pepebull.png";

import { useInView } from "react-intersection-observer";

const Roadmap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section id="roadmap" className="mb-20 pt-32" ref={ref}>
      <h2 className="text-shadow flex flex-col items-center font-evermore text-[36px] md:text-[3.5rem]">
        Roadmap
      </h2>
      <div className="mx-auto mt-10 flex max-w-[1200px] flex-col items-center justify-center px-4 md:flex-row md:gap-10 md:px-0">
        <img
          src={pepepissingnobackground}
          className={`${inView ? "animate__animated animate__slideInLeft animate__slow" : ""} order-2 md:order-1 md:w-1/4`}
        />
        <div
          className={`${inView ? "animate__animated animate__flipInY animate__slow" : ""} order-1 flex flex-col gap-2 border-2 bg-[#264a20]  p-8 font-comfortaa text-base shadow-custom md:order-2 md:w-2/4 md:text-xl`}
        >
          <p>Phase 1: Meme</p>
          <p>Phase 2: Vibe and HODL</p>
          <p>Phase 3: Meme Takeover</p>
        </div>
        <img
          src={pepebull}
          className={`${inView ? "animate__animated animate__slideInRight animate__slow" : ""} order-3 md:w-1/4`}
        />
      </div>
    </section>
  );
};

export default Roadmap;
