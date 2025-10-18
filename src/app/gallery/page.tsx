
import Image from "next/image";
import Navebar from "@/Component/Nave";
import { client, urlFor } from "../lib/sanity.config";


async function getGalleryImages() {
  const query = `*[_type == "galleryImage"] | order(order asc) {
    title,
    image
  }`
  return await client.fetch(query)
}



export default async function GalleryPage() {

      const galleryImages = await getGalleryImages()


  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-130  md:h-[87vh] w-full">
        <Navebar />
        <Image
          src="https://res.cloudinary.com/diatamf9x/image/upload/v1760680238/MKN05613_hme9sj.webp"
          alt="Gallery Hero"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-8xl font-bold text-center mb-10 relative inline-block mx-auto">GALLERY</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="text-center py-12 px-6 bg-black">
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Get the latest updates and deeper coffee experience from IMAJI Coffee
        </p>
      </section>

      {/* Gallery Grid */}
 <section className="py-1 md:px-4 lg:px-20 w-full flex justify-center md:h-650 mb-10 md:mb-0 sm:px-8 md:px-8  lg:px-30">

                            {/* Masonry Grid */}
                            <div className="hidden md:grid grid-cols-1">
                                {/* Grid Layout */}
                                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                                    {/* Row 1 */}
                                    <div className="md:col-span-2 relative rounded-2xl overflow-hidden bg-white h-[250px] md:h-[300px] group">
                                        <Image
                                            src={urlFor(galleryImages[0].image).url() ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={500}
                                            loading='lazy'
                                            className="h-[250px] md:h-[300px] w-full object-cover"
                                        />

                                    </div>
                                
                                    <div className=" rounded-2xl overflow-hidden">
                                        <Image
                                            src={urlFor(galleryImages[1].image).url() ?? ""}
                                            alt="spot"
                                            width={400}
                                            height={700}
                                            loading='lazy'
                                            className="h-[700px] md:h-[675px] w-full object-cover"
                                        />
                                    </div>
                                
                                    {/* Row 2 */}
                                     <div className="rounded-2xl bottom-93 relative overflow-hidden bg-white ">
                                              <Image
                                                src={urlFor(galleryImages[2].image).url() ?? ""}
                                                alt="spot"
                                                width={400}
                                                height={300}
                                                loading='lazy'
                                                className="h-[250px] md:h-[350px] w-full object-cover"
                                              />
                                            </div>
                                            <div className="rounded-2xl bottom-93 relative overflow-hidden">
                                              <Image
                                                src={urlFor(galleryImages[3].image).url() ?? ""}
                                                alt="spot"
                                                width={400}
                                                height={300}
                                                loading='lazy'
                                                className="h-[250px] md:h-[350px] w-full object-cover"
                                              />
                                            </div>
                                            <div />

                                        {/* Row 3 */}
                                            <div className="md:col-span-3 relative bottom-93 rounded-2xl overflow-hidden">
                                            <Image
                                                src={urlFor(galleryImages[7].image).url() ?? ""}
                                                alt="spot"
                                                width={1200}
                                                height={400}
                                                loading='lazy'
                                                className="h-[300px] md:h-[350px] w-full object-cover"
                                            />
                                            </div>

                                        {/* Row 4 */}
                                        <div className="relative flex justify-center w-full col-span-3  gap-5 w-full">
                                            <div className="rounded-2xl bottom-93 relative overflow-hidden bg-white ">
                                              <Image
                                                src={urlFor(galleryImages[8].image).url() ?? ""}
                                                alt="spot"
                                                width={800}
                                                height={300}
                                                loading='lazy'
                                                className="h-[250px] md:h-[350px]  object-cover"
                                              />
                                            </div>
                                            <div className="rounded-2xl bottom-93 relative overflow-hidden">
                                              <Image
                                                src={urlFor(galleryImages[5].image).url() ?? ""}
                                                alt="spot"
                                                width={800}
                                                height={300}
                                                loading='lazy'
                                                className="h-[250px] md:h-[350px] object-cover"
                                              />
                                            </div>
                                        </div>


                                    <div className="relative bottom-93 rounded-2xl flex flex-row justify-center w-full col-span-3  gap-5 overflow-hidden">
                                    <div className=" rounded-2xl overflow-hidden  bg-white h-[700px] md:h-[675px] group">
                                        <Image
                                            src={urlFor(galleryImages[6].image).url() ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={700}
                                            loading='lazy'
                                            className="h-[700px] md:h-[675px] object-cover"
                                        />
                                    </div>

                                    <div className="relative flex flex-col rounded-2xl overflow-hidden gap-5 group w-full">
                                        <Image
                                            src={urlFor(galleryImages[4].image).url() ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={500}
                                            loading='lazy'
                                            className="h-[250px] md:h-[327px] w-full object-cover"
                                        />

                                

                                        <Image
                                            src={urlFor(galleryImages[10].image).url() ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={500}
                                            loading='lazy'
                                            className="h-[250px] md:h-[327px] w-full object-cover"
                                        />
                                    </div>



                                    </div>

                                                                              <div className="md:col-span-3 relative bottom-93 rounded-2xl overflow-hidden">
                                            <Image
                                                src={urlFor(galleryImages[9].image).url() ?? ""}
                                                alt="spot"
                                                width={1200}
                                                height={400}
                                                loading='lazy'
                                                className="h-[300px] md:h-[350px] w-full object-cover"
                                            />
                                        </div>  
                                        
                                </div>
                            </div>

                                 <div className="mt-6 space-y-3 block md:hidden bg-black ">
                                    {/* Row 1 */}
                                    <div className="grid grid-cols-2 gap-3">
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src={urlFor(galleryImages[2].image).url() ?? ""}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          loading='lazy'
                                          className="object-cover w-full h-[150px]"
                                        />

                                      </div>
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src= {urlFor(galleryImages[1].image).url() ?? ""}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          loading='lazy'
                                          className="object-cover w-full h-[150px]"
                                        />

                                      </div>
                                    </div>
                            
                                    {/* Row 2 (wide image) */}
                                    <div className="relative rounded-lg overflow-hidden">
                                      <Image
                                        src={urlFor(galleryImages[0].image).url() ?? ""}
                                        alt="Tangalle"
                                        width={600}
                                        height={300}
                                        loading='lazy'
                                        className="object-cover w-full h-[150px]"
                                      />

                                    </div>
                            
                                    {/* Row 3 */}
                                    <div className="grid grid-cols-2 gap-3">
                                      <div className="relative rounded-lg overflow-hidden gap-3 flex flex-col">
                                        <div className="relative rounded-lg overflow-hidden">
                                          <Image
                                            src={urlFor(galleryImages[3].image).url() ?? ""}
                                            alt="Tangalle"
                                            width={400}
                                            height={300}
                                            loading='lazy'
                                            className="object-cover w-full h-[150px] rounded-lg"
                                          />

                                        </div>
                                        <div className="relative rounded-lg overflow-hidden">
                                          <Image
                                            src={urlFor(galleryImages[4].image).url() ?? ""}
                                            alt="Tangalle"
                                            width={400}
                                            height={300}
                                            loading='lazy'
                                            className="object-cover w-full h-[150px] rounded-lg"
                                          />

                                        </div>
                                      </div>
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src={urlFor(galleryImages[5].image).url() ?? ""}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          loading='lazy'
                                          className="object-cover w-full h-[312px]"
                                        />

                                      </div>
                                    </div>

                                     <div className="grid grid-cols-2 gap-3">
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src= {urlFor(galleryImages[6].image).url() ?? ""}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          loading='lazy'
                                          className="object-cover w-full h-[150px]"
                                        />

                                      </div>
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src= {urlFor(galleryImages[8].image).url() ?? ""}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          loading='lazy'
                                          className="object-cover w-full h-[150px]"
                                        />

                                      </div>
                                    </div>
                            
                                    {/* Row 2 (wide image) */}
                                    <div className="relative rounded-lg overflow-hidden">
                                      <Image
                                        src={urlFor(galleryImages[9].image).url() ?? ""}
                                        alt="Tangalle"
                                        width={600}
                                        height={300}
                                        loading='lazy'
                                        className="object-cover w-full h-[150px]"
                                      />

                                    </div>
                            
                                    {/* Row 3 */}
                                    <div className="grid grid-cols-2 gap-3">
                                      <div className="relative rounded-lg overflow-hidden gap-3 flex flex-col">
                                        <div className="relative rounded-lg overflow-hidden">
                                          <Image
                                            src={urlFor(galleryImages[7].image).url() ?? ""}
                                            alt="Tangalle"
                                            width={400}
                                            height={300}
                                            loading='lazy'
                                            className="object-cover w-full h-[150px] rounded-lg"
                                          />

                                        </div>
                                        <div className="relative rounded-lg overflow-hidden">
                                          <Image
                                            src={urlFor(galleryImages[11].image).url() ?? ""}
                                            alt="Tangalle"
                                            width={400}
                                            height={300}
                                            loading='lazy'
                                            className="object-cover w-full h-[150px] rounded-lg"
                                          />

                                        </div>
                                      </div>
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src={urlFor(galleryImages[10].image).url() ?? ""}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          loading='lazy'
                                          className="object-cover w-full h-[312px]"
                                        />

                                      </div>
                                    </div>
                                  </div>
                        </section>


    </div>
  );
}
