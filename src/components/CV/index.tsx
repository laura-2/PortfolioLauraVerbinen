
interface CVProps {
    cvtitle: string
}

export default function CV({cvtitle}: CVProps) {
  return (
    <p className="questionDload">{cvtitle} 
    <a download="CVLauraVerbinen.pdf" href="https://drive.google.com/file/d/1k-IbU_I9b09fa7Cgyi99bsone_cwwHVz/view?usp=sharing"
    className="dloadFile"> Click here</a></p>
  );
}
