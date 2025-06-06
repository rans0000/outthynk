
function Header() {
    return (
        <header className='relative bg-[url(/images/hero-xl.png)] h-svh max-h-[640px] flex flex-col items-center justify-center rounded-b-xl lg:rounded-b-4xl'>
            <div className="fixed top-0 left-0 w-full flex justify-center">
                <div className="relative max-w-[1200px] w-full px-5 h-20 flex justify-center items-center">
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