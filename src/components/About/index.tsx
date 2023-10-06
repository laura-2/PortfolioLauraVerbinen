interface AboutProps {
    imagem: string,
    alt?: string,
    titulo: string,
    texto: string
}

export default function About({imagem, alt, titulo, texto}: AboutProps){
    return(
        <section className="flex justify-center items-center gap-36 mx-44 my-36" id="About">
            <div className="flex w-11/12">
                <img alt={alt} src={imagem}/>
            </div>
            <div className="block w-4/5">
                <h1 className="uppercase font-bold text-7xl">{titulo}</h1>
                <p>{texto}</p>
            </div>
        </section>
    )
}