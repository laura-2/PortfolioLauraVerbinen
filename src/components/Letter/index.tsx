interface LetterProps {
    imagem: string,
    alt?: string,
    titulo: string,
    texto: string
}

export default function Letter({imagem, alt, titulo, texto}: LetterProps){
    return(
        <section className="flex justify-center items-center ml-48 my-10">
            <div className="block self-center gap-3">
                <h1 className="uppercase font-bold text-7xl">{titulo}</h1>
                <p className="text-xl">{texto}</p>
            </div>
            <div className="flex">
                <img alt={alt} src={imagem}/>
            </div>
        </section>
    )
}