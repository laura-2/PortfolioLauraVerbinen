import wpp from "../../assets/whatsapp.png";
import insta from "../../assets/instagram.png";
import link from "../../assets/linkedin.png";
import github from "../../assets/github.png";

interface FooterProps {
  alt?: string;
}

export default function Footer({ alt="Icons media social"}: FooterProps) {
  const icones = [
    {
      iconName: "Whatsapp",
      link: 'https://wa.me/qr/ADKM3VXC7FQ7B1',
      url: wpp,
    },
    {
      iconName: "Instagram",
      link: 'https://instagram.com/lauraheleverbinen?igshid=YTQwZjQ0NmI0OA==',
      url: insta,
    },
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
    <section className="flex flex-wrap justify-center gap-10 my-5 mx-10 md:mx-0 md:gap-2 xl:gap-20" id="Footer">
        {icones.map((vector, index) => {
          return (
            <a
              className="flex items-center gap-1"
              key={index}
              href={vector.link}
            >
              <img alt={alt} src={vector.url} className="m-2" />
              <p className="text-xl">{vector.iconName}</p>
            </a>
          );
        })}

    </section>
  );
}
