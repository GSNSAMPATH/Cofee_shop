import Navbar from "@/Component/Nave";
import Image from "next/image";

export default function MenuPage() {
    return (
        <section className=" h-auto bg-black w-full">
            <section className="relative h-160 bg-black w-full">
                <Navbar />
                <Image
                    src="/6d3d6aa76335ce8d7cdc10f75534bc4cfb0c5ecb.jpg"
                    alt="Coffee Background"
                    fill
                    className=" h-100 object-cover opacity-900 w-full"
                    priority
                 />
                <div className="w-full bottom-50 items-center justify-between md:flex md:max-w-7xl mx-auto ">
                    <div className="mt-0 md:flex md:justify-between mt-100 md:items-center lg:mx-0 mx-5">
                        <h2 className="text-white text-4xl sm:text-8xl font-bold text-center mb-10 relative inline-block mx-auto">
                        MENU
                            <span className="block w-16 h-[2px] bg-red-600 mt-2 "></span>
                        </h2>
                    </div>
                </div>
            </section>
        </section>
    )
}