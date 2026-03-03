"use client";
import { steps } from "@/data/process";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function ProductionProcess() {
    const { ref, visible } = useReveal(0.1);

    return (
        <section id="process" ref={ref} className="relative">
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 max-w-6xl mx-auto text-center px-6 py-20">
                <h2
                    className={`text-4xl font-bold mb-16 text-white reveal ${visible ? "visible" : ""
                        }`}
                >
                    Production Process
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300 reveal ${visible ? "visible" : ""
                                }`}
                            style={{ transitionDelay: `${index * 0.12}s` }}
                        >
                            <div className="relative h-72 w-full">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="p-6 text-left">
                                <div className="text-sm text-gray-500 mb-2">
                                    Step {index + 1}
                                </div>
                                <h3 className="font-semibold text-gray-700 text-lg">
                                    {step.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}