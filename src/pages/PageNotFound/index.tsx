import page from "../../assets/page404.png"

export default function PageNotFound(){
    return(
        <section className="flex justify-center items-center mt-24">
            <img alt="Error 404" src={page} className="w-6/12 lg:w-4/12"/>
            <p className="text-xl text-center mt-20 absolute z-10 uppercase sm:text-2xl">Error 404</p>
        </section>
    )
}