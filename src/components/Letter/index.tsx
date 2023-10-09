interface LetterProps {
    image: string,
    alt?: string,
    title: string,
    text: string
}

export default function Letter({image, alt="Image girl on the computer", title, text}: LetterProps){
    return(
        <section className="flex py-20 mx-44" id="page-H">
            <div className="block self-center">
                <h1 className="uppercase font-bold text-7xl">{title}</h1>
                <p className="text-xl">{text}</p>
            </div>
            <div className="w-3/4">
                <img alt={alt} src={image}/>
            </div>
        </section>
    )
}