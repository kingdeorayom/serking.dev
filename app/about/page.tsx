import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import serking from "@/public/serking.jpeg";
import graduation from "@/public/graduation.png";
import setup from "@/public/setup.jpg";
import yuko from "@/public/yuko.jpg";

export const metadata: Metadata = {
  title: "About - Serking de Orayom",
  description:
    "I build software, solve problems, and think about how things can be made better.",
};

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <p>
          Born in 2000, I was in my early teenage years when the world of
          computing opened its doors for me.
        </p>
        <p>
          Picture a younger version of me, huddled in a local computer
          shop&apos;s{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Pisonet"
            target="_blank"
            className="underline hover:opacity-75 transition-opacity italic"
          >
            pisonet
          </Link>
          , learning about computers by tinkering with PCs after playing{" "}
          <em>Grand Theft Auto: Vice City</em>.
        </p>
        <p>
          Years passed and I found myself changing the ROM of my then Samsung
          Galaxy Mini to a{" "}
          <Link
            href="https://en.wikipedia.org/wiki/CyanogenMod"
            target="_blank"
            className="underline hover:opacity-75 transition-opacity italic"
          >
            CyanogenMod
          </Link>
          . I had a lot of fun doing it, making me curious how software worked
          in general. It was a wild introduction to computing technology.
        </p>
        <p>
          In 2022, I graduated with a Bachelor of Science in Information
          Technology, with academic distinction of <em>Magna Cum Laude</em>.
        </p>
        {/* <div className="py-4 grid grid-cols-2 gap-x-2">
          <Image
            src={graduation}
            alt="Serking standing outside the Philippine International Convention Center at his college graduation"
            className="w-full md:max-w-md"
          />
          <Image
            src={setup}
            alt="Serking's desk setup"
            className="w-full md:max-w-md"
          />
        </div> */}
        <p>
          Outside of work, I mostly spend my time playing games on my Nintendo
          Switch 2, whether it&apos;s Pok&eacute;mon or Zelda, or indie titles
          like Stardew Valley and Hades.
        </p>
        <p>
          I also enjoy reading books, or occasionally doomscrolling through
          social media. Music is another big part of my life, particularly
          classic rock and oldies from the &apos;60s to the early &apos;90s. My
          favorite album is{" "}
          <Link
            href="https://music.apple.com/ph/album/rubber-soul/1441164359"
            target="_blank"
            className="underline hover:opacity-75 transition-opacity italic"
          >
            Rubber Soul
          </Link>
          .
        </p>
        {/* <div className="py-4">
          <iframe
            allow="autoplay *; encrypted-media *;"
            height="450"
            style={{
              width: "100%",
              maxWidth: "660px",
              overflow: "hidden",
              background: "transparent",
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/ph/album/rubber-soul/1441164359"
          ></iframe>
        </div> */}
        <p>
          Most of the time, you&apos;ll probably find me doing one of these
          things with my dog, Yuko, keeping me company. He&apos;s pretty much a
          constant part of my everyday life, whether I&apos;m relaxing at home
          or just taking a break from everything else.
        </p>
        {/* <div className="py-4 grid grid-cols-2 gap-x-2">
          <Image
            src={serking}
            alt="Serking de Orayom sitting at a pancake house"
            className="w-full md:max-w-md"
          />
          <Image
            src={yuko}
            alt="Yuko with Laguna Lake as his background"
            className="w-full md:max-w-md"
          />
        </div> */}
        <p>
          These days, I&apos;m focusing on my work as a software engineer, and
          thinking about how to make things better than I found them.
        </p>
      </div>
    </>
  );
}
