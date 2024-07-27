import bg from "@/public/background-burnt-damaged-grunge.jpg";
import vishu from "@/public/vishu.jpeg";
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
          जय जगदीश आरती
        </h1>
        <div className="flex justify-center items-center mb-8">
          <Image
            src={vishu}
            alt="Lord Vishnu"
            className="rounded-lg"
            placeholder="blur"
            width={600}
            height={500}
          />
        </div>

        <p className="text-primary-200 text-lg mb-10">
          ॐ जय जगदीश हरे, स्वामी! जय जगदीश हरे।
          <br />
          भक्तजनों के संकट क्षण में दूर करे॥ <br />
          <br />
          जो ध्यावै फल पावै, दुख बिनसे मन का।
          <br />
          सुख-संपत्ति घर आवै, कष्ट मिटे तन का॥
          <br />
          <br /> ॐ जय...॥ <br />
          <br />
          मात-पिता तुम मेरे, शरण गहूं किसकी।
          <br /> तुम बिनु और न दूजा, आस करूं जिसकी॥ <br />
          <br />ॐ जय...॥
          <br />
          <br /> तुम पूरन परमात्मा, तुम अंतरयामी॥
          <br /> पारब्रह्म परेमश्वर, तुम सबके स्वामी॥
          <br />
          <br /> ॐ जय...॥
          <br />
          <br />
          तुम करुणा के सागर तुम पालनकर्ता।
          <br /> मैं मूरख खल कामी, कृपा करो भर्ता॥
          <br />
          <br /> ॐ जय...॥
          <br />
          <br /> तुम हो एक अगोचर, सबके प्राणपति।
          <br /> किस विधि मिलूं दयामय! तुमको मैं कुमति॥ <br />
          <br />ॐ जय...॥ <br />
          <br />
          दीनबंधु दुखहर्ता, तुम ठाकुर मेरे।
          <br /> अपने हाथ उठाओ, द्वार पड़ा तेरे॥
          <br />
          <br /> ॐ जय...॥
          <br />
          <br /> विषय विकार मिटाओ, पाप हरो देवा।
          <br /> श्रद्धा-भक्ति बढ़ाओ, संतन की सेवा॥
          <br />
          <br /> ॐ जय...॥
          <br />
          <br /> तन-मन-धन और संपत्ति, सब कुछ है तेरा।
          <br /> तेरा तुझको अर्पण क्या लागे मेरा॥ <br />
          <br />ॐ जय...॥ <br />
          <br />
          जगदीश्वरजी की आरती जो कोई नर गावे।
          <br /> कहत शिवानंद स्वामी, मनवांछित फल पावे॥
          <br />
          <br /> ॐ जय...॥
        </p>
      </main>
    </div>
  );
}
