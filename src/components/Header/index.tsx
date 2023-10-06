interface HeaderProps {
    imagem: string,
    alt?: string
}

export default function Header({imagem, alt}: HeaderProps){
    const option = ['Home', 'About', 'Projects', 'Contact', 'Skills']
        const handleClickScroll = (option: string) => {
          const element = document.getElementById(option);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } 
        }
    return(
        <header className="flex px-20 py-5" id="Home">
            <div className="flex">
                <img alt={alt} src={imagem} className="w-1/5"/>
            </div>
            <div className="flex gap-12 items-center">
                {option.map((item, index)=>{
                    return <p className="text-xl text-white" key={index} onClick={()=>handleClickScroll(item)}>{item}</p>
                })}
            </div>
        </header>
    )
}