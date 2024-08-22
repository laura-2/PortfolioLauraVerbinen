
interface CVProps {
    cvtitle: string
}

export default function CV({cvtitle}: CVProps) {
  return (
    <p className="questionDload">{cvtitle} 
    <a download="CVLauraVerbinen.pdf" href="https://drive.google.com/file/d/1JEARylrYD0ouRWkFh75xuRGwybTBIxYq/view?usp=sharing"
    className="dloadFile"> Click here</a></p>
  );
}
