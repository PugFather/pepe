import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Typewriter = ({ text = "", speed = 50 }) => {
  const [content, setContent] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  let i = 0;

  useEffect(() => {
    if (inView) {
      const typeWriter = () => {
        if (i < text.length) {
          setContent((prevContent) => prevContent + text.charAt(i));
          i++;
          setTimeout(typeWriter, speed);
        }
      };
      typeWriter();
    }
  }, [inView, text, speed, i]);

  return (
    <p ref={ref} className="blinking-cursor">
      {content}
    </p>
  );
};

export default Typewriter;
