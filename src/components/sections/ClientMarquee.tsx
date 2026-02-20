"use client";

import Image from "next/image";

const clients = [
    { name: 'Bali Micro House', src: '/clients/BaliMicroHouse.png' },
    { name: 'Bali Micro Technology', src: '/clients/BaliMicroTechnology.png' },
    { name: 'Dotdev Asia', src: '/clients/DotdevAsia.png' },
    { name: 'Keong Rote Island', src: '/clients/KeongRoteISland.png' },
    { name: 'Lingkar Hijau Hub', src: '/clients/LingkarHijauHub.png' },
    { name: 'Little One Day Care', src: '/clients/LittleOneDayCare.png' },
    { name: 'Nataloka Investment', src: '/clients/NatalokaInvestment.png' },
    { name: 'Ngalung Kalla Eco Retreat', src: '/clients/NgalungKallaEcoRetreat.png' },
    { name: 'Spiro Bali', src: '/clients/SpiroBali.png' },
    { name: 'The Shampoo Lounge', src: '/clients/TheShampooLounge.png' },
    { name: 'Visa Agency Bali', src: '/clients/VisaAgencyBali.png' },
];

export function ClientMarquee() {
    return (
        <div className="w-full overflow-hidden mt-16 py-10 flex flex-col items-center">
            <div className="flex w-[200%] md:w-[200%] animate-marquee">
                <div className="flex w-1/2 justify-around items-center">
                    {clients.map((client) => (
                        <div key={client.name} className="flex-shrink-0 px-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <Image src={client.src} alt={client.name} width={160} height={70} className="object-contain max-h-[70px] w-auto max-w-[160px]" />
                        </div>
                    ))}
                </div>
                <div className="flex w-1/2 justify-around items-center">
                    {clients.map((client) => (
                        <div key={client.name + '-copy'} className="flex-shrink-0 px-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <Image src={client.src} alt={client.name} width={160} height={70} className="object-contain max-h-[70px] w-auto max-w-[160px]" />
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
        </div>
    );
}
