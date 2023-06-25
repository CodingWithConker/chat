import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center mb-10 pt-3 w-full">
        <img src={logo} alt="sumz_logo" className="w-28 object contain" />

        <button
          type="button"
          onClick={() => {
            window.open("https://valleydigitalmarketing.net", "_blank");
          }}
          className="black_btn"
        >
          Valley Digital Marketing
        </button>
      </nav>

      <h1
        style={{ textShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)" }}
        className="head_text"
      >
        Summarize Articles with <br />{" "}
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2
        style={{ textShadow: "0px 1px 1px rgba(0, 0, 0, 0.75)" }}
        className="desc"
      >
        Simplify your reading with Summize, an open-source article summarizer
        that transfforms your articles into readable text.
      </h2>
    </header>
  );
};

export default Hero;
