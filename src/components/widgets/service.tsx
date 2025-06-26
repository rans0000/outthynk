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
                <h2 className='app-title2 text-appgray mb-2'>What We Do</h2>
                <p>We offer end-to-end digital solutions including custom web development, mobile app design, SEO optimization, and business strategy. Whether you're launching a new product or scaling your digital presence, we turn ideas into powerful, results-driven solutions.</p>
            </motion.div>
            <div className='flex flex-col md:w-8/12'>
                <ul className='flex flex-col gap-1 font-koho text-2xl text-appgray'>
                    <li>Custom Web Development</li>
                    <li>User Interface & Experience (UI/UX) Design</li>
                    <li>Content Management Systems (CMS)</li>
                    <li>Digital Business Consulting</li>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Mobile App Development</li>
                    <li>Software Development</li>
                    <li>IT & Software Consultancy</li>
                    <li>Agile Project Management</li>
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