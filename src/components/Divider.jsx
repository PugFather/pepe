import dividerImage from "../assets/divider.png";

const Divider = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "18px",
        backgroundImage: `url(${dividerImage})`,
        backgroundRepeat: "repeat-x",
      }}
    />
  );
};

export default Divider;
