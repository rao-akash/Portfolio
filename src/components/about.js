import Image from "next/image"
import { about } from "@/constants.js/assets"
import styles from "@/constants.js/styles"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"



export default function About() {
    const words = [
        {
          text: "I",
          className: "text-white",
        },
        {
          text: "'m a",
          className: "text-white",
        },
        {
          text: "Full Stack Developer",
          className: "text-blue",
        },
      ];
    const info = "I'm a passionate and creative web developer with 5 months of experience, specializing in frontend technologies. I thrive on turning ideas into beautiful and functional websites. In addition to my professional experience, I've been freelancing for the past year, honing my skills and expanding my repertoire."

    return (
        <section id="about" className="w-full py-3 px-6" style={{paddingBottom: "5rem"}}>
            <div className="container flex flex-row about items-center justify-center gap-4 px-4 text-center md:px-6 xl:gap-10">
                <div className="grid gap-3 text-left">
                    <p className="text-sm font-medium tracking-wide uppercase text-gray-500 ">About Me</p>
                    <div className="space-y-2">
                        <h2 className={styles.subheading}>
                            <span className="text-blue">
                            राधे,राधे
                            </span> <TypewriterEffectSmooth words={words} />
                        </h2>
                        <p className="text-gray-400 text-lg text-justify" alt={info}>
                            {info}
                        </p>
                    </div>
                </div>
                <Image src={about} />

            </div>
        </section>
    )
  }
  
  