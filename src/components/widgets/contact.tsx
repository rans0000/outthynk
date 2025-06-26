import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react";

function Contact() {
    return (
        <article className="py-5 flex flex-col flex-nowrap gap-4 md:flex-row md:justify-between md:py-[calc(100svh/6)]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{ duration: .3 }}
            >
                <h4 className="app-title2 text-appdark mb-2">Ready to Build Something Exceptional?</h4>
                <p className="max-w-lg">Partner with us to bring your digital vision to life. Whether it's a custom website, a mobile app, or a software platform, we’ll help you craft solutions that drive results. Get in touch today to schedule a free consultation.</p>
            </motion.div>
            <div className="flex items-center">
                <Button variant="outline" className="btn-outline">Contact Us <span className="text-gray-400">|</span> <ArrowRight /></Button>
            </div>
        </article>
    )
}

export default Contact