import { useInView } from "react-intersection-observer";
import rick_and_morty from "../assets/rick_and_morty.wav";

const Discovery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section id="discovery" className="my-20">
      <div className="flex flex-col items-center justify-center" ref={ref}>
        <h2 className="text-xl text-black">LISTEN</h2>
        <div className="mt-5 flex w-full items-center rounded-full">
          <div className="ml-20 flex-1 border-b border-dashed border-gray-300"></div>
          <span className="px-4">
            <svg
              width="41"
              height="62"
              viewBox="0 0 41 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.46338 40.9345C5.64193 40.9345 6.67991 40.4062 7.36851 39.5966V40.0138C7.36851 41.993 9.05209 43.5979 11.1268 43.5979C12.3053 43.5979 13.3457 43.0693 14.0345 42.2585V43.259C14.0345 45.2371 15.7173 46.8424 17.7922 46.8424C18.8889 46.8424 19.942 46.385 20.6238 45.6685L20.6238 57.8798C20.6238 59.9553 22.2265 61.6379 24.3012 61.6379C26.3759 61.6379 27.8774 59.9552 27.8774 57.8798L27.8774 33.6739C29.753 37.5684 31.9742 41.1779 34.1001 43.6445C35.4552 45.2144 37.8268 45.3926 39.4008 44.0378C40.9723 42.683 41.1481 40.3104 39.7938 38.7378C37.5277 36.1093 35.718 29.2618 33.5948 24.4112C29.9802 13.9464 25.3675 12.9848 25.3675 4.37998L6.13921 4.37998C6.13921 8.54093 0.7195 14.0648 0.7195 21.0078C0.7195 23.4136 0.7195 26.0015 0.7195 28.2922C0.717244 28.3374 0.704836 28.3818 0.704836 28.4299L0.704836 37.3502C0.705118 39.3291 2.38785 40.9345 4.46338 40.9345Z"
                fill="#bada55"
              />
              <path
                d="M6.01046 4.10791C5.23388 4.10791 4.60519 3.47923 4.60519 2.70349V1.90393C4.60519 1.12749 5.23388 0.498666 6.01046 0.498666L26.4727 0.498666C27.2487 0.498666 27.8777 1.12749 27.8777 1.90393V2.70349C27.8777 3.47923 27.2487 4.10791 26.4727 4.10791L6.01046 4.10791Z"
                fill="#bada55"
              />
            </svg>
          </span>
          <div className="mr-20 flex-1 border-b border-dashed border-gray-300"></div>
        </div>
        <audio
          controls
          className={`${inView ? "animate__animated animate__zoomIn animate__slow" : ""} mt-10`}
        >
          <source src={rick_and_morty} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
};

export default Discovery;
