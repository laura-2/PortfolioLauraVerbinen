interface LetterProps {
    image: string,
    alt?: string,
    title: string,
    text: string
}

export default function Letter({image, alt="Image girl on the computer", title, text}: LetterProps){
    return(
        <section className="flex flex-col p-10 gap-10 items-center xl:flex-row xl:mx-20" id="page-H">
            <div className="flex flex-col text-center">
                <h1 className="uppercase font-bold text-5xl">{title}</h1>
                <p className="text-2xl">{text}</p>
            </div>
            <div className="w-5/6 xl:w-2/4">
                <img alt={alt} src={image}/>
            </div>
        </section>
    )
}