import joinus from "../assets/joinus.png";

const Banner = () => {
  return (
    <section id="banner" className="mt-10">
      <div className="container flex items-center justify-center">
        <img src={joinus} />
      </div>
    </section>
  );
};

export default Banner;
