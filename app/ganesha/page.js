import bg from "@/public/background-burnt-damaged-grunge.jpg";
import hanuman from "@/public/ganesh.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative text-center min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>

      {/* Content */}

      <main className=" bg-white bg-opacity-80 p-4 sm:p-8 rounded shadow-md mx-auto max-w-4xl">
        <h1 className="text-4xl mb-5 text-accent-400 font-medium">
          श्री गणेश आरती
        </h1>
        <div className="flex justify-center items-center mb-8">
          <Image
            src={hanuman}
            alt="Lord Hanuman"
            className="rounded-lg"
            placeholder="blur"
            width={600}
            height={600}
          />
        </div>

        <p className="text-primary-200 text-lg mb-10">
          जय गणेश जय गणेश, जय गणेश देवा । <br />
          माता जाकी पार्वती, पिता महादेवा ॥ <br />
          <br />
          एक दंत दयावंत, चार भुजा धारी । <br />
          माथे सिंदूर सोहे, मूसे की सवारी ॥ <br />
          <br />
          जय गणेश जय गणेश, जय गणेश देवा । <br />
          माता जाकी पार्वती, पिता महादेवा ॥ <br />
          <br />
          पान चढ़े फल चढ़े, और चढ़े मेवा । <br />
          लड्डुअन का भोग लगे, संत करें सेवा ॥<br /> <br />
          जय गणेश जय गणेश, जय गणेश देवा ।<br /> माता जाकी पार्वती, पिता महादेवा
          ॥ <br />
          <br />
          अंधन को आंख देत, कोढ़िन को काया । <br />
          बांझन को पुत्र देत, निर्धन को माया ॥ <br />
          <br />
          जय गणेश जय गणेश, जय गणेश देवा । <br />
          माता जाकी पार्वती, पिता महादेवा ॥ <br />
          <br />
          'सूर' श्याम शरण आए, सफल कीजे सेवा ।<br />
          माता जाकी पार्वती, पिता महादेवा ॥ <br />
          <br />
          जय गणेश जय गणेश, जय गणेश देवा । <br />
          माता जाकी पार्वती, पिता महादेवा ॥ <br />
          <br />
          दीनन की लाज रखो, शंभु सुतकारी । <br />
          कामना को पूर्ण करो, जाऊं बलिहारी ॥ <br />
          <br />
          जय गणेश जय गणेश, जय गणेश देवा । <br />
          माता जाकी पार्वती, पिता महादेवा ॥
        </p>
      </main>
    </div>
  );
}
