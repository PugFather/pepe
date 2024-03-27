import twitter01 from "../assets/twitter01.png";
import telegram01 from "../assets/telegram01.png";
import S137 from "../assets/S137.png";
import Typewriter from "./Typewriter";

const Contact = () => {
  return (
    <section id="contact" className="mt-28">
      <h2 className="text-shadow flex flex-col items-center font-evermore text-[36px] md:text-[3.5rem]">
        Contact
      </h2>
      <div className="mx-auto mt-8 flex max-w-[1200px] flex-col items-center gap-12 px-4 md:px-0">
        <img src={S137} className="max-w-64" />

        <div className="text-shadow taxt:base text-center font-comfortaa md:w-2/3 md:text-[20px]">
          <Typewriter
            text="$PEPE S137 is a memecoin crafted for entertainment, not investment.
          It holds no inherent value and should not be seen as a financial
          opportunity. There’s no official squad steering this ship or a charted
          course to follow. It’s a token from Solana multiverse, celebrating the
          joy of memes."
          />
        </div>

        <div className="flex items-center gap-7">
          <img src={telegram01} className="h-20 w-20" />
          <img src={twitter01} className="h-20 w-20" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
