interface AboutProps {
    image: string,
    alt?: string,
    title: string,
    text: string
}

export default function About({image, alt="Image girl listens to music.", title, text}: AboutProps){
    return(
        <section className="flex flex-col items-center gap-10 py-20 xl:flex-row xl:mx-28" id="page-b">
            <div className="flex w-11/12">
                <img alt={alt} src={image}/>
            </div>
            <div className="block w-4/5">
                <h1 className="uppercase font-bold text-7xl">{title}</h1>
                <p>{text}</p>
            </div>
        </section>
    )
}