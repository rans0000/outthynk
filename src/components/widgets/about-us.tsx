
function AboutUs() {
    return (
        <article>
            <div className="flex flex-col justify-center gap-2 m-auto w-full max-w-md mb-8">
                <h2 className="app-title2 text-appdark text-center">About Us</h2>
                <p className="text-center">We design and build custom websites to drive leads, close deals and grow your business</p>
            </div>

            <figure className="rounded-4xl flex flex-col overflow-hidden md:flex-nowrap md:flex-row md:bg-[#140A35]">
                <div className="m-8 flex justify-center">
                    <img className="rounded-2xl aspect-square overflow-hidden" src="images/office.png" width="300" height="300" alt="Our office" />
                </div>
                <figcaption className="p-16 flex flex-col justify-center grow md:bg-[#191927] md:text-white">
                    <h3 className="app-title2 mb-4">Our Vision</h3>
                    <div className="max-w-sm">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                </figcaption>
            </figure>
        </article>
    )
}

export default AboutUs