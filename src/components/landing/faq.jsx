import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq () {
    return (

        <>
        <h2 className="text-2xl max-w-3xl mx-auto space-y-6 px-4 font-bold text-white text-left py-20">Frequently Asked Questions (FAQ)</h2>
        <div className="max-w-3xl mx-auto space-y-6 px-4">
            <Accordion
                type="single"
                collapsible
                className="w-full rounded-xl shadow-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                defaultValue="item-1"
            >
                <AccordionItem
                    value="item-1"
                    className="border-b border-zinc-200 dark:border-zinc-800"
                >
                    <AccordionTrigger className="flex items-center justify-between px-6 py-5 text-lg font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors rounded-t-xl">
                        Product Information
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance px-6 pb-6 text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-950 rounded-b-xl">
                        <p>
                            Our flagship product combines cutting-edge technology with sleek
                            design. Built with premium materials, it offers unparalleled
                            performance and reliability.
                        </p>
                        <p>
                            Key features include advanced processing capabilities, and an
                            intuitive user interface designed for both beginners and experts.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem
                    value="item-2"
                    className="border-b border-zinc-200 dark:border-zinc-800"
                >
                    <AccordionTrigger className="flex items-center justify-between px-6 py-5 text-lg font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                        Shipping Details
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance px-6 pb-6 text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-950">
                        <p>
                            We offer worldwide shipping through trusted courier partners.
                            Standard delivery takes 3-5 business days, while express shipping
                            ensures delivery within 1-2 business days.
                        </p>
                        <p>
                            All orders are carefully packaged and fully insured. Track your
                            shipment in real-time through our dedicated tracking portal.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="flex items-center justify-between px-6 py-5 text-lg font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors rounded-b-xl">
                        Return Policy
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance px-6 pb-6 text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-950">
                        <p>
                            We stand behind our products with a comprehensive 30-day return
                            policy. If you&apos;re not completely satisfied, simply return the
                            item in its original condition.
                        </p>
                        <p>
                            Our hassle-free return process includes free return shipping and
                            full refunds processed within 48 hours of receiving the returned
                            item.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        </>
    )
}
