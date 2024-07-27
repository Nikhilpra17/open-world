import bg from "@/public/background-burnt-damaged-grunge.jpg";
import durga from "@/public/durgaMaa.jpg";
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
          अम्बे माता आरती
        </h1>
        <div className="flex justify-center items-center mb-8">
          <Image
            src={durga}
            alt="Lordess Durga"
            className="rounded-lg"
            placeholder="blur"
          />
        </div>
        <h3 className="mb-5 text-accent-400 font-medium font-bold">दोहा</h3>

        <p className="text-primary-200 text-lg mb-10">
          जय अम्बे गौरी, मैया जय श्यामा गौरी ।<br /> तुमको निशदिन ध्यावत, हरि
          ब्रह्मा शिवरी ॥<br /> <br />ॐ जय अम्बे गौरी..॥ <br />
          <br />
          मांग सिंदूर विराजत, टीको मृगमद को । <br />
          उज्ज्वल से दोउ नैना, चंद्रवदन नीको ॥<br />
          <br /> ॐ जय अम्बे गौरी..॥ <br />
          <br />
          कनक समान कलेवर, रक्ताम्बर राजै । <br />
          रक्तपुष्प गल माला, कंठन पर साजै ॥<br />
          <br /> ॐ जय अम्बे गौरी..॥ <br />
          <br />
          केहरि वाहन राजत, खड्ग खप्पर धारी ।<br /> सुर-नर-मुनिजन सेवत, तिनके
          दुखहारी ॥<br />
          <br /> ॐ जय अम्बे गौरी..॥ <br />
          <br />
          कानन कुण्डल शोभित, नासाग्रे मोती । <br />
          कोटिक चंद्र दिवाकर, सम राजत ज्योती ॥ <br />
          <br />ॐ जय अम्बे गौरी..॥ <br />
          <br />
          शुंभ-निशुंभ बिदारे, महिषासुर घाती ।<br /> धूम्र विलोचन नैना, निशदिन
          मदमाती ॥<br />
          <br /> ॐ जय अम्बे गौरी..॥
          <br />
          <br /> चण्ड-मुण्ड संहारे, शोणित बीज हरे । <br />
          मधु-कैटभ दोउ मारे, सुर भयहीन करे ॥ <br />
          <br />ॐ जय अम्बे गौरी..॥ <br />
          <br />
          ब्रह्माणी, रूद्राणी, तुम कमला रानी । <br />
          आगम निगम बखानी, तुम शिव पटरानी ॥ <br />
          <br />ॐ जय अम्बे गौरी..॥ <br />
          <br />
          चौंसठ योगिनी मंगल गावत, नृत्य करत भैरों ।<br /> बाजत ताल मृदंगा, अरू
          बाजत डमरू ॥ <br />
          <br />ॐ जय अम्बे गौरी..॥
          <br />
          <br /> तुम ही जग की माता, तुम ही हो भरता,
          <br />
          भक्तन की दुख हरता । सुख संपति करता ॥<br />
          <br /> ॐ जय अम्बे गौरी..॥ <br />
          <br />
          भुजा चार अति शोभित, खडग खप्पर धारी । <br />
          मनवांछित फल पावत, सेवत नर नारी ॥ <br />
          <br />ॐ जय अम्बे गौरी..॥ <br />
          <br />
          कंचन थाल विराजत, अगर कपूर बाती । <br />
          श्रीमालकेतु में राजत, कोटि रतन ज्योती ॥ <br />
          <br />ॐ जय अम्बे गौरी..॥ <br />
          <br />
          श्री अंबेजी की आरति, जो कोइ नर गावे ।<br />
          कहत शिवानंद स्वामी, सुख-संपति पावे ॥ <br />
          <br />ॐ जय अम्बे गौरी..॥ <br />
          <br />
          जय अम्बे गौरी, मैया जय श्यामा गौरी ।
        </p>
      </main>
    </div>
  );
}
