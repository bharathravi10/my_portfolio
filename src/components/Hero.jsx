// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/bharath_resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h1 className="mb-[20px]">
            {hero.firstName}
            <span className="text-dark_primary"> {hero.LastName}</span>
          </h1>
          <h2 className="text-[24px]">{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn" onClick={handleDownload}>
              Download Resume
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
