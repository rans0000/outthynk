
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

function Header() {

    const { scrollY } = useScroll()
    const [scrollDirection, setScrollDirection] = useState(-1)

    useMotionValueEvent(scrollY, "change", (current) => {
        const diff = current - scrollY?.getPrevious()
        console.log(":-- ", scrollY.get());

        setScrollDirection(current === 0 ? -1 : (diff > 0 ? 1 : -1))
    })

    console.log(scrollDirection);


    return (
        <header className='relative bg-[url(/images/hero-xl.png)] h-svh max-h-[640px] flex flex-col items-center justify-center rounded-b-xl lg:rounded-b-4xl'>
            <div className="fixed z-30 top-0 left-0 px-5 w-full flex justify-center">
                <div className={`relative max-w-[1200px] w-full h-24 flex justify-center items-center bg-[#0c1018] rounded-b-2xl transition-all duration-500 transform-gpu ${scrollDirection == 1 ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                    <a href="#" className='absolute left-5'><img src="images/outthynk-logo.svg" alt="outthynk logo" width={56} height={71} /></a>
                    <nav>
                        <ul className='flex gap-4'>
                            <li className="text-white after:content-['|'] after:ms-4">
                                <a className="!text-white !underline decoration-1 !underline-offset-5 transition-[text-decoration-color] !decoration-white/0 hover:!decoration-white/100" href="#">Home</a>
                            </li>
                            <li className="text-white after:content-['|'] after:ms-4">
                                <a className="!text-white !underline decoration-1 !underline-offset-5 transition-[text-decoration-color] !decoration-white/0 hover:!decoration-white/100" href="#">Service</a>
                            </li>
                            <li className="text-white after:content-['|'] after:ms-4">
                                <a className="!text-white !underline decoration-1 !underline-offset-5 transition-[text-decoration-color] !decoration-white/0 hover:!decoration-white/100" href="#">About</a>
                            </li>
                            <li>
                                <a className="!text-white !underline decoration-1 !underline-offset-5 transition-[text-decoration-color] !decoration-white/0 hover:!decoration-white/100" href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <h1 className='app-title mb-4 px-5'>A Design & Development Studio</h1>
            <p className='px-5 text-white text-base max-w-md text-center'>We design and build custom websites to drive leads, close deals and grow your business</p>
        </header>
    )
}

export default Header