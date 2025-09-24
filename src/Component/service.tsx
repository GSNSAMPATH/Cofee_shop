import Image from "next/image";


export default function Service() {
    return (
        <div className="flex flex-col items-center justify-center bg-black py-16 w-full relative  ">
            <Image src="/2e5deb5efe24c49057e9c5f28745302341bce7a9.png" alt="Service Image" width={700} height={100} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 700px" className="bottom-50"/>
            <div className="md:absolute  mt-20 md:mt-50 xl:w-300 h-200 md:flex md:flex-row  justify-between  rounded-lg p-5  w-full sm:p-0">
                <div className="flex md:h-sm w-full flex-col mt-1 sm:mt-0 ">
                    <div className="mt-10">
                        <Image src="/63cfb259def888f57248575810951366a06aeef4.png" alt="Service Icon" width={50} height={50} className="mt-10" />
                        <h2 className="text-white text-3xl font-bold text-center mb-1 relative inline-block mx-auto ">AUTHENTIC COFFEE</h2>
                        <p className="text-white leading-relaxed max-w-sm">Enjoy handcrafted espresso, pour over, and cold brew made with premium beans. Each cup highlights the rich, nuanced flavors of Sri Lanka’s highland coffee heritage.</p> 
                    </div>
                    <div className="mt-10">
                        <Image src="/63cfb259def888f57248575810951366a06aeef4.png" alt="Service Icon" width={50} height={50} className="mt-10" />
                        <h2 className="text-white text-3xl font-bold text-center mb-1 relative inline-block mx-auto ">AUTHENTIC COFFEE</h2>
                        <p className="text-white leading-relaxed max-w-sm">Enjoy handcrafted espresso, pour over, and cold brew made with premium beans. Each cup highlights the rich, nuanced flavors of Sri Lanka’s highland coffee heritage.</p> 
                    </div>
                </div>
                <div className="flex  w-full md:h-sm flex-col md:ml-50 xl:ml-100 md:mt-50 mt-20">
                    <div className="md:mt-10">
                        <Image src="/63cfb259def888f57248575810951366a06aeef4.png" alt="Service Icon" width={50} height={50} className="sm:mt-10" />
                        <h2 className="text-white text-3xl  font-bold text-center mb-1 relative inline-block mx-auto ">AUTHENTIC COFFEE</h2>
                        <p className="text-white leading-relaxed max-w-sm">Enjoy handcrafted espresso, pour over, and cold brew made with premium beans. Each cup highlights the rich, nuanced flavors of Sri Lanka’s highland coffee heritage.</p> 
                    </div>
                    <div className="mt-10">
                        <Image src="/63cfb259def888f57248575810951366a06aeef4.png" alt="Service Icon" width={50} height={50} className="mt-10" />
                        <h2 className="text-white text-3xl font-bold text-center mb-1 relative inline-block mx-auto ">AUTHENTIC COFFEE</h2>
                        <p className="text-white leading-relaxed max-w-sm">Enjoy handcrafted espresso, pour over, and cold brew made with premium beans. Each cup highlights the rich, nuanced flavors of Sri Lanka’s highland coffee heritage.</p> 
                    </div>
                </div>
            
            </div>
        </div>
    )
}

