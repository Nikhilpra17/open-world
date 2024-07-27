import bg from "@/public/background-burnt-damaged-grunge.jpg";
import krishna from "@/public/krishna.jpg";
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
          आरती कुंजबिहारी की
        </h1>
        <div className="flex justify-center items-center mb-8">
          <Image
            src={krishna}
            alt="Lord Krishna"
            className="rounded-lg"
            placeholder="blur"
            width={700}
            height={650}
          />
        </div>

        <p className="text-primary-200 text-lg mb-10">
          आरती कुंजबिहारी की, श्री गिरिधर कृष्ण मुरारी की ॥<br />
          गले में बैजंती माला, बजावै मुरली मधुर बाला ।<br />
          <br />
          श्रवण में कुण्डल झलकाला, नंद के आनंद नंदलाला ।<br />
          गगन सम अंग कांति काली, राधिका चमक रही आली ।<br />
          <br />
          लतन में ठाढ़े बनमाली
          <br />
          भ्रमर सी अलक,
          <br /> कस्तूरी तिलक,
          <br />
          चंद्र सी झलक,
          <br /> ललित छवि श्यामा प्यारी की,
          <br />
          <br />
          श्री गिरिधर कृष्ण मुरारी की ॥<br />
          आरती कुंजबिहारी की, श्री गिरिधर कृष्ण मुरारी की ॥<br />
          <br />
          कनकमय मोर मुकुट बिलसै, देवता दरसन को तरसैं ।<br />
          गगन सों सुमन रासि बरसै ।<br />
          <br />
          बजे मुरचंग,
          <br /> मधुर मिरदंग,
          <br />
          ग्वालिन संग,
          <br /> अतुल रति गोप कुमारी की,
          <br />
          <br />
          श्री गिरिधर कृष्णमुरारी की ॥<br />
          आरती कुंजबिहारी की, श्री गिरिधर कृष्ण मुरारी की ॥<br />
          <br />
          जहां ते प्रकट भई गंगा, सकल मन हारिणि श्री गंगा ।<br />
          स्मरन ते होत मोह भंगा बसी शिव सीस,
          <br />
          <br />
          जटा के बीच,
          <br /> हरै अघ कीच,
          <br />
          चरन छवि श्रीबनवारी की,
          <br /> <br />
          श्री गिरिधर कृष्णमुरारी की ॥<br />
          आरती कुंजबिहारी की, श्री गिरिधर कृष्ण मुरारी की ॥<br />
          <br />
          चमकती उज्ज्वल तट रेनू, बज रही वृंदावन बेनू ।<br />
          चहुं दिसि गोपि ग्वाल धेनू हंसत मृदु मंद,
          <br />
          <br />
          चांदनी चंद, <br />
          कटत भव फंद,
          <br />
          टेर सुन दीन दुखारी की,
          <br />
          <br /> श्री गिरिधर कृष्णमुरारी की ॥
          <br />
          आरती कुंजबिहारी की, श्री गिरिधर कृष्ण मुरारी की ॥<br />
          <br />
          आरती कुंजबिहारी की, श्री गिरिधर कृष्ण मुरारी की ॥<br />
          आरती कुंजबिहारी की, श्री गिरिधर कृष्ण मुरारी की ॥<br />
        </p>
      </main>
    </div>
  );
}
