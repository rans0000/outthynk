import { motion } from "motion/react";


function Service() {

    return (
        <motion.article
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1
            }}
            transition={{ duration: 1 }}
            className='relative px-20 py-24 flex flex-col gap-20 rounded-xl bg-[#ccc] lg:rounded-4xl md:flex-row md:flex-nowrap'
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='md:w-4/12 md:order-2 md:flex md:flex-col md:justify-center'>
                <h2 className='app-title2 text-appgray mb-2'>Our Service</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris</p>
            </motion.div>
            <div className='flex flex-col md:w-8/12'>
                <ul className='flex flex-col gap-1 font-koho text-2xl text-appgray'>
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>CMS</li>
                    <li>Business Consulting</li>
                    <li>SEO</li>
                    <li>Mobile App Development</li>
                    <li>Software Development</li>
                    <li>Software Consultancy</li>
                    <li>Project Management</li>
                </ul>
                <span className='my-16 h-[1px] bg-gray-400 block w-full'></span>
                <ul className='flex flex-wrap justify-center'>
                    <li className='flex justify-center items-center mb-4 basis-1/3 md:basis-1/4'><img src='images/logo-nextjs.png' width="64" height="64" alt='NextJs' /></li>
                    <li className='flex justify-center items-center mb-4 basis-1/3 md:basis-1/4'><img src='images/logo-react.png' width="64" height="64" alt='ReactJs' /></li>
                    <li className='flex justify-center items-center mb-4 basis-1/3 md:basis-1/4'><img src='images/logo-node.png' width="64" height="64" alt='NodeJs' /></li>
                    <li className='flex justify-center items-center mb-4 basis-1/3 md:basis-1/4'><img src='images/logo-laravel.png' width="64" height="64" alt='Laravel' /></li>
                    <li className='flex justify-center items-center mb-4 basis-1/3 md:basis-1/4'><img src='images/logo-wordpress.png' width="64" height="64" alt='Wordpress' /></li>
                    <li className='flex justify-center items-center mb-4 basis-1/3 md:basis-1/4'><img src='images/logo-strapi.png' width="64" height="64" alt='Strapi' /></li>
                    <li className='flex justify-center items-center mb-4 basis-1/3 md:basis-1/4'><img src='images/logo-java.png' width="64" height="64" alt='Java' /></li>
                    <li className='flex justify-center items-center mb-4 basis-1/3 md:basis-1/4'><img src='images/logo-python.png' width="64" height="64" alt='Python' /></li>
                </ul>
            </div>
        </motion.article>
    )
}

export default Service;