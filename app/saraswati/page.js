import bg from "@/public/background-burnt-damaged-grunge.jpg";
import saraswati from "@/public/sawarsati.jpg";
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
          सरस्वती माता आरती
        </h1>
        <div className="flex justify-center items-center mb-8">
          <Image
            src={saraswati}
            alt="saraswati Mata"
            className="rounded-lg"
            placeholder="blur"
            width={600}
            height={500}
          />
        </div>

        <p className="text-primary-200 text-lg mb-10">
          ॐ जय सरस्वती माता, जय जय सरस्वती माता।
          <br />
          सद्‍गुण वैभव शालिनी, त्रिभुवन विख्याता॥
          <br />
          <br />
          चंद्रवदनि पद्मासिनी, ध्रुति मंगलकारी।
          <br />
          सोहें शुभ हंस सवारी, अतुल तेजधारी ॥ जय…..
          <br />
          <br />
          बाएं कर में वीणा, दाएं कर में माला।
          <br />
          शीश मुकुट मणी सोहें, गल मोतियन माला ॥ जय…..
          <br />
          <br />
          देवी शरण जो आएं, उनका उद्धार किया।
          <br />
          पैठी मंथरा दासी, रावण संहार किया ॥ जय…..
          <br />
          <br />
          विद्या ज्ञान प्रदायिनी, ज्ञान प्रकाश भरो।
          <br />
          मोह, अज्ञान, तिमिर का जग से नाश करो ॥ जय…..
          <br />
          <br />
          धूप, दीप, फल, मेवा मां स्वीकार करो।
          <br />
          ज्ञानचक्षु दे माता, जग निस्तार करो ॥ जय…..
          <br />
          <br />
          मां सरस्वती की आरती जो कोई जन गावें।
          <br />
          हितकारी, सुखकारी, ज्ञान भक्ती पावें ॥ जय…..
          <br />
          <br />
          जय सरस्वती माता, जय जय सरस्वती माता।
          <br />
          सद्‍गुण वैभव शालिनी, त्रिभुवन विख्याता॥ जय…..
          <br />
          <br />
          ॐ जय सरस्वती माता, जय जय सरस्वती माता ।<br />
          सद्‍गुण वैभव शालिनी, त्रिभुवन विख्याता॥ जय…..
        </p>
      </main>
    </div>
  );
}
