
interface CVProps {
    cvtitle: string
}

export default function CV({cvtitle}: CVProps) {
  return (
    <p className="questionDload">{cvtitle} 
    <a download="LauraVerbinenEN.pdf" href="https://drive.google.com/file/d/18JVf5XlJtZ4mnfzThlv6-F28ex83gJQo/view?usp=sharing"
    className="dloadFile"> Click here</a></p>
  );
}
