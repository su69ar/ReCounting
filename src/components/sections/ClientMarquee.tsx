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
            <div className="relative flex max-w-[100vw] overflow-hidden group mask-marquee">
                <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
                    {/* First set of logos */}
                    <div className="flex items-center space-x-16 px-8 min-w-max">
                        {clients.map((client) => (
                            <div key={client.name} className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                                <Image
                                    src={client.src}
                                    alt={client.name}
                                    width={240}
                                    height={100}
                                    className="object-contain h-[90px] w-auto max-w-[220px]"
                                    priority
                                />
                            </div>
                        ))}
                    </div>
                    {/* Second set of logos (Duplicate for infinite seamless scrolling) */}
                    <div className="flex items-center space-x-16 px-8 min-w-max" aria-hidden="true">
                        {clients.map((client) => (
                            <div key={client.name + '-copy'} className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                                <Image
                                    src={client.src}
                                    alt={client.name}
                                    width={240}
                                    height={100}
                                    className="object-contain h-[90px] w-auto max-w-[220px]"
                                    priority
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .mask-marquee {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />
        </div>
    );
}
