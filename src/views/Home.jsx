import fondo from "../components/fondo.jpeg";
import imagen1 from "../components/imagen1.jpg";
import imagen2 from "../components/imagen2.jpg";

const Home = () => {
    return (
        // Header
        <section>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img src={fondo} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
                <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
                </div>
                <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">React</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">MVC con API.</p>
                    </div>
                </div>

                <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={imagen1} alt="glasses photo" />
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={imagen2} alt="glasses photo" />
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Home;