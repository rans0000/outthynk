import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function Contact() {
    return (
        <article className="py-5 flex flex-col flex-nowrap gap-4 md:flex-row md:justify-between md:py-[calc(100svh/6)]">
            <div>
                <h4 className="app-title2 text-appdark mb-2">Interested in working with us?</h4>
                <p className="max-w-96">We design and build custom websites to drive leads, close deals and grow your business</p>
            </div>
            <div>
                <Button variant="outline" className="btn-outline">Contact Us <span className="text-gray-400">|</span> <ArrowRight /></Button>
            </div>
        </article>
    )
}

export default Contact