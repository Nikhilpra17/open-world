import bg from "@/public/background-burnt-damaged-grunge.jpg";
import gayatri from "@/public/gayatri.jpg";
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
          माता गायत्री आरती
        </h1>
        <div className="flex justify-center items-center mb-8">
          <Image
            src={gayatri}
            alt="Gayatri Mata"
            className="rounded-lg"
            placeholder="blur"
            width={550}
            height={500}
          />
        </div>

        <p className="text-primary-200 text-lg mb-10">
          जयति जय गायत्री माता, जयति जय गायत्री माता । <br />
          सत् मारग पर हमें चलाओ, जो है सुखदाता ॥<br />
          <br /> ॥ जयति जय गायत्री माता..॥ <br />
          <br />
          आदि शक्ति तुम अलख निरंजन जगपालक क‌र्त्री ।<br /> दु:ख शोक, भय, क्लेश
          कलश दारिद्र दैन्य हत्री ॥ <br />
          <br />॥ जयति जय गायत्री माता..॥ <br />
          <br />
          ब्रह्म रूपिणी, प्रणात पालिन जगत धातृ अम्बे ।<br /> भव भयहारी,
          जन-हितकारी, सुखदा जगदम्बे ॥<br />
          <br /> ॥ जयति जय गायत्री माता..॥
          <br />
          <br /> भय हारिणी, भवतारिणी, अनघेअज आनन्द राशि । <br />
          अविकारी, अखहरी, अविचलित, अमले, अविनाशी ॥ <br />
          <br />॥ जयति जय गायत्री माता..॥ <br />
          <br />
          कामधेनु सतचित आनन्द जय गंगा गीता । <br />
          सविता की शाश्वती, शक्ति तुम सावित्री सीता ॥<br />
          <br />
          ॥ जयति जय गायत्री माता..॥ <br />
          <br />
          ऋग, यजु साम, अथर्व प्रणयनी, प्रणव महामहिमे ।<br />
          कुण्डलिनी सहस्त्र सुषुमन शोभा गुण गरिमे ॥<br />
          <br /> ॥ जयति जय गायत्री माता..॥
          <br />
          <br />
          स्वाहा, स्वधा, शची ब्रह्माणी राधा रुद्राणी ।<br /> जय सतरूपा, वाणी,
          विद्या, कमला कल्याणी ॥ <br />
          <br />॥ जयति जय गायत्री माता..॥ <br />
          <br />
          जननी हम हैं दीन-हीन, दु:ख-दरिद्र के घेरे ।<br /> यदपि कुटिल, कपटी कपूत
          तउ बालक हैं तेरे ॥<br />
          <br /> ॥ जयति जय गायत्री माता..॥ <br />
          <br />
          स्नेहसनी करुणामय माता चरण शरण दीजै । <br />
          विलख रहे हम शिशु सुत तेरे दया दृष्टि कीजै ॥ <br />
          <br />॥ जयति जय गायत्री माता..॥
          <br />
          <br /> काम, क्रोध, मद, लोभ, दम्भ, दुर्भाव द्वेष हरिये । <br />
          शुद्ध बुद्धि निष्पाप हृदय मन को पवित्र करिये ॥<br />
          <br /> ॥ जयति जय गायत्री माता..॥ <br />
          <br />
          जयति जय गायत्री माता, जयति जय गायत्री माता । <br />
          सत् मारग पर हमें चलाओ, जो है सुखदाता ॥
        </p>
      </main>
    </div>
  );
}
