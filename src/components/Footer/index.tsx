import link from "../../assets/linkedin.png";
import github from "../../assets/github.png";

interface FooterProps {
  alt?: string;
}

export default function Footer({ alt="Icons media social"}: FooterProps) {
  const icones = [
    {
      iconName: "Github",
      link: 'https://github.com/laura-2',
      url: github,
    },
    {
      iconName: "Linkedin",
      link: 'https://www.linkedin.com/in/laura-helena-verbinen-8b5308211/',
      url: link,
    },
  ];
  return (
    <section className="flex flex-wrap justify-center gap-2 my-2 md:mx-0 md:gap-5 xl:gap-20" id="Footer">
        {icones.map((vector, index) => {
          return (
            <a
              className="flex items-center gap-1"
              key={index}
              href={vector.link}
            >
              <img alt={alt} src={vector.url} className="m-2 w-3/12 md:w-6/12"/>
              <p className="text-sm md:text-xl">{vector.iconName}</p>
            </a>
          );
        })}

    </section>
  );
}
