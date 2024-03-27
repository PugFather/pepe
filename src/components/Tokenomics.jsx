import pepememe from "../assets/pepememe.png";

import { useInView } from "react-intersection-observer";

const Tokenomics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="tokenomics" className="pb-20 pt-32" ref={ref}>
      <h2 className="text-shadow flex flex-col items-center px-4 font-evermore text-[30px] md:text-[3.5rem]">
        Tokenomics
      </h2>
      <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-0">
        <div className="mt-12 flex w-full flex-col items-center gap-10 md:flex-row">
          <div className="flex flex-col items-center gap-6 md:w-2/3">
            <h3 className="text-shadow flex flex-col items-center gap-4 font-evermore">
              <span className="text-lg md:text-xl">Token Supply:</span>
              <span className="text-xl md:text-2xl">420,690,000,000</span>
            </h3>
            <div
              className={`${inView ? "animate__animated animate__flipInY animate__slow" : ""} border-2 bg-[#264a20] p-8 font-comfortaa text-base shadow-custom md:text-xl`}
            >
              <p>No Taxes, No Bullshit. It’s that simple.</p>
              <br />
              <p>LP tokens are locked, and mint authority is renounced. </p>
            </div>
          </div>
          <img
            src={pepememe}
            className={`${inView ? "animate__animated animate__zoomIn animate__slow" : ""} w-full max-w-96 md:w-1/3`}
          />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
