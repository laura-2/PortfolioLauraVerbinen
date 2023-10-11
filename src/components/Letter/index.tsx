interface LetterProps {
    image: string,
    alt?: string,
    title: string,
    text: string
}

export default function Letter({image, alt="Image girl on the computer", title, text}: LetterProps){
    return(
        <>
        <section className="flex flex-col p-10 gap-10 items-center xl:hidden" id="page-H">
            <div className="flex flex-col text-center">
                <h1 className="uppercase font-bold text-5xl md:text-6xl">{title}</h1>
                <p className="text-2xl">{text}</p>
            </div>
            <div className="w-5/6 lg:w-2/4">
                <img alt={alt} src={image}/>
            </div>
        </section>
        <section className="xl:flex flex-row p-10 gap-10 items-center mx-20 sm:hidden mobileNavBar" id="page-H">
        <div className="w-4/6">
            <img alt={alt} src={image}/>
        </div>
        <div className="flex flex-col text-center">
            <h1 className="uppercase font-bold text-8xl">{title}</h1>
            <p className="text-2xl">{text}</p>
        </div>
    </section>
    </>
    )
}