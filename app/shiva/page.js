import bg from "@/public/background-burnt-damaged-grunge.jpg";
import shiva from "@/public/siva.jpg";
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
          श्री शिव आरती
        </h1>
        <div className="flex justify-center items-center mb-8">
          <Image
            src={shiva}
            alt="Lord shiva"
            className="rounded-lg"
            placeholder="blur"
            width={600}
            height={600}
          />
        </div>

        <p className="text-primary-200 text-lg mb-10">
          ओम जय शिव ओंकारा, स्वामी जय शिव ओंकारा। <br />
          ब्रह्मा, विष्णु, सदाशिव, अर्द्धांगी धारा॥ <br />
          <br />
          ओम जय शिव ओंकारा॥ <br />
          <br />
          एकानन चतुरानन पञ्चानन राजे।
          <br />
          हंसासन गरूड़ासन वृषवाहन साजे॥ <br />
          <br />
          ओम जय शिव ओंकारा॥
          <br />
          <br />
          दो भुज चार चतुर्भुज दसभुज अति सोहे।
          <br />
          त्रिगुण रूप निरखत त्रिभुवन जन मोहे॥
          <br />
          <br />
          ओम जय शिव ओंकारा॥ <br />
          <br />
          अक्षमाला वनमाला मुण्डमालाधारी। <br />
          त्रिपुरारी कंसारी कर माला धारी॥ <br />
          <br />
          ओम जय शिव ओंकारा॥ <br />
          <br />
          श्वेताम्बर पीताम्बर बाघंबर अंगे।
          <br />
          सनकादिक गरुड़ादिक भूतादिक संगे॥
          <br />
          <br />
          ओम जय शिव ओंकारा॥ <br />
          <br />
          कर के मध्य कमण्डल चक्र त्रिशूलधारी। <br />
          जगकर्ता जगभर्ता जगसंहारकर्ता॥ <br />
          <br />
          ओम जय शिव ओंकारा॥ <br />
          <br />
          ब्रह्मा विष्णु सदाशिव जानत अविवेका। <br />
          प्रणवाक्षर के मध्ये ये तीनों एका॥ <br />
          <br />
          ओम जय शिव ओंकारा॥ <br />
          <br />
          पर्वत सोहैं पार्वती, शंकर कैलासा।
          <br />
          भांग धतूरे का भोजन, भस्मी में वासा॥ <br />
          <br />
          ओम जय शिव ओंकारा॥ <br />
          <br />
          जटा में गंग बहत है, गल मुण्डन माला।
          <br />
          शेष नाग लिपटावत, ओढ़त मृगछाला॥ <br />
          <br />
          ओम जय शिव ओंकारा॥ <br />
          <br />
          काशी में विराजे विश्वनाथ, नन्दी ब्रह्मचारी।
          <br />
          नित उठ दर्शन पावत, महिमा अति भारी॥ <br />
          <br />
          ओम जय शिव ओंकारा॥ <br />
          <br />
          त्रिगुणस्वामी जी की आरति जो कोइ नर गावे।
          <br />
          कहत शिवानन्द स्वामी, मनवान्छित फल पावे॥ <br />
          <br />
          ओम जय शिव ओंकारा॥ <br />
          स्वामी ओम जय शिव ओंकारा॥
        </p>
      </main>
    </div>
  );
}
