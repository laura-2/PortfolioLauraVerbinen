import { useState } from "react"
import menu from "../../assets/botao-menu.png"
import closeIcon from "../../assets/fechar.png"

interface HeaderProps {
    image: string,
    alt?: string
}

export default function Header({image, alt="Logo image"}: HeaderProps){
    const [openMenu, setOpenMenu] = useState(false);
    const option = ['Home', 'About', 'Skills', 'Projects', 'Contact']

    return(
        <header className="flex py-5 px-10 items-center" id="Home">
            <div>
                <img alt={alt} src={image} className="w-2/5 md:w-3/5 lg:w-2/5 xl:w-1/5"/>
            </div>
            <nav className="md:hidden">
                <img alt="Menu" src={menu} onClick={()=>setOpenMenu(!openMenu)}/>
            </nav>
            {openMenu && (
            <div className="navBar">
                <img alt="Close" src={closeIcon} className="self-auto" onClick={()=>setOpenMenu(false)}/>
                {option.map((item, index)=>{
                    return <a className="text-3xl navColor" key={index}
                    href={`#page-${item[index]}`}
                     >{item}</a>
                })}
            </div>
            )}
            <div className="sm:hidden md:flex gap-10 py-5 navBarDesktop">
                {option.map((item, index)=>{
                    return <a className="text-xl text-white" key={index}
                    href={`#page-${item[index]}`}
                     >{item}</a>
                })}
            </div>
        </header>
    )
}