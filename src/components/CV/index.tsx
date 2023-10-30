
interface CVProps {
    cvtitle: string
}

export default function CV({cvtitle}: CVProps) {
  return (
    <p className="questionDload">{cvtitle} 
    <a download="LauraVerbinenEN.pdf" href="https://drive.google.com/file/d/1DEZ0rV4k59hOfTA2zpmRsFKu7v5tMPLP/view?usp=sharing"
    className="dloadFile"> Click here</a></p>
  );
}
