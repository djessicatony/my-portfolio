"use client";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { ClientOnly } from "@/components/client-only";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

function LocationBlock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const almaty = new Date(utc + 5 * 3600000);
      setTime(almaty.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };
    update();
    const interval = setInterval(update, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center gap-2 text-muted-foreground text-base mt-4">
      <Globe className="w-5 h-5" />
      <div>
        <span>Currently in <span className="font-semibold text-primary">Almaty, Kazakhstan</span></span>
        <div className="text-sm mt-0.5">{time} local time</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ClientOnly>
      <main className="min-h-screen bg-background text-foreground flex items-start justify-center pt-20 md:pt-32 font-sans">
        <ModeToggle className="absolute top-4 right-4" />
        <div className="flex flex-col md:flex-row items-start gap-20 w-full max-w-6xl px-6">
          <div className="max-w-xl w-full space-y-10">
            <div className="space-y-2">
              <div className="font-mono font-bold text-2xl md:text-3xl text-primary flex items-center gap-2">
                HEY, I&apos;M KIRILL <span className="text-lg">👋</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold font-mono leading-tight flex items-center gap-3 tracking-tight text-primary">
              </h1>
              <p className="text-xl text-foreground leading-relaxed mb-4">
                I&apos;m a high school student (graduating this year) passionate about building cool things with code :)
              </p>
              <p className="text-lg text-foreground mb-4">
                Currently working on <a href="https://zeraku.com" target="_blank" rel="noopener noreferrer" className="hover:underline">@Zeraku</a> — platform is where developers turn their learning plans into action — upload roadmaps, track every step, and grow with clarity.
              </p>
              <p className="text-lg text-foreground mb-4">
                Tech I use: <span className="inline-flex items-center gap-1">🍃 Spring Boot</span>, <span className="inline-flex items-center gap-1">🚀 Next.js</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6 mb-4">
              <a href="https://x.com/djessicatony" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                <span>x.com/djessicatony</span>
              </a>
              <a href="https://github.com/djessicatony" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                <span>github.com/djessicatony</span>
              </a>
              <a href="https://www.linkedin.com/in/kirill-ml" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                <span>linkedin.com/in/kirill-ml</span>
              </a>
              <a href="mailto:kirill@djess.net" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                <span>kirill@djess.net</span>
              </a>
            </div>
            <div className="mt-6">
              <LocationBlock />
            </div>
          </div>
          <div className="flex-1 flex justify-center items-start pt-4">
            <Image
              src="/luffy.jpg"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-lg shadow-2xl border border-border bg-background/40 object-cover animate-bounce-y"
              priority
            />
          </div>
        </div>
      </main>
    </ClientOnly>
  );
}
