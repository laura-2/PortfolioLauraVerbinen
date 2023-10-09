interface HeaderProps {
    image: string,
    alt?: string
}

export default function Header({image, alt="Logo image"}: HeaderProps){
    const option = ['Home', 'About', 'Skills', 'Projects', 'Contact']

    return(
        <header className="flex py-5 px-20" id="Home">
            <div className="flex">
                <img alt={alt} src={image} className="w-1/5"/>
            </div>
            <div className="flex gap-12 items-center">
                {option.map((item, index)=>{
                    return <a className="text-xl text-white" key={index}
                    href={`#page-${item[index]}`}
                     >{item}</a>
                })}
            </div>
        </header>
    )
}