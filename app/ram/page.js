import bg from "@/public/background-burnt-damaged-grunge.jpg";
import ram from "@/public/ram.jpg";
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
          श्री राम चंद्र आरती
        </h1>
        <div className="flex justify-center items-center mb-8">
          <Image
            src={ram}
            alt="Lord Ram"
            className="rounded-lg"
            placeholder="blur"
            width={500}
            height={500}
          />
        </div>

        <p className="text-primary-200 text-lg mb-10">
          श्री राम चंद्र कृपालु भजमन हरण भाव भय दारुणम्।
          <br />
          नवकंज लोचन कंज मुखकर, कंज पद कन्जारुणम्।। <br />
          <br />
          कंदर्प अगणित अमित छवी नव नील नीरज सुन्दरम्।
          <br />
          पट्पीत मानहु तडित रूचि शुचि नौमी जनक सुतावरम्।।
          <br />
          <br />
          भजु दीन बंधु दिनेश दानव दैत्य वंश निकंदनम्।
          <br />
          रघुनंद आनंद कंद कौशल चंद दशरथ नन्दनम्।।
          <br />
          <br />
          सिर मुकुट कुण्डल तिलक चारु उदारू अंग विभूषणं।
          <br />
          आजानु भुज शर चाप धर संग्राम जित खर-धूषणं।।
          <br />
          <br />
          इति वदति तुलसीदास शंकर शेष मुनि मन रंजनम्।
          <br />
          मम ह्रदय कुंज निवास कुरु कामादी खल दल गंजनम्।।
          <br />
          <br />
          छंद <br />
          <br />
          मनु जाहिं राचेऊ मिलिहि सो बरु सहज सुंदर सावरों।
          <br />
          करुना निधान सुजान सिलू सनेहू जानत रावरो।।
          <br />
          <br />
          एही भांती गौरी असीस सुनी सिय सहित हिय हरषी अली।
          <br />
          तुलसी भवानी पूजि पूनी पूनी मुदित मन मंदिर चली।।
          <br />
          <br />
          ।।सोरठा।।
          <br />
          <br />
          जानि गौरी अनुकूल सिय हिय हरषु न जाइ कहि।
          <br />
          मंजुल मंगल मूल वाम अंग फरकन लगे।।
          <br />
          <br />
        </p>
      </main>
    </div>
  );
}
