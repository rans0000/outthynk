
import { motion } from "motion/react";

function AboutUs() {
    return (
        <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col justify-center gap-2 m-auto w-full max-w-lg mb-8">
                <h2 className="app-title2 text-appdark text-center">About Us</h2>
                <p className="text-center">We're a team of creative designers, developers, and strategists passionate about building custom web and mobile solutions. Our mission is to help startups and businesses grow by creating intuitive, scalable, and high-converting digital experiences.</p>
            </div>

            <figure className="rounded-4xl flex flex-col overflow-hidden md:flex-nowrap md:flex-row md:bg-[#140A35]">
                <div className="m-8 flex justify-center">
                    <img className="rounded-2xl aspect-square overflow-hidden" src="images/office.png" width="300" height="300" alt="Our office" />
                </div>
                <figcaption className="p-16 flex flex-col justify-center grow md:bg-[#191927] md:text-white">
                    <h3 className="app-title2 mb-4">Our Vision</h3>
                    <div className="max-w-sm">
                        <p>To empower businesses with innovative technology and user-centric design. We envision a world where every brand has a digital presence that performs as great as it looks.</p>
                    </div>
                </figcaption>
            </figure>
        </motion.article>
    )
}

export default AboutUs