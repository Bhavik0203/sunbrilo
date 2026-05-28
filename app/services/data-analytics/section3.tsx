"use client";

import Image from "next/image";
import Link from "next/link";

import { SectionReveal } from "./SectionReveal";

import { caseStudies } from "../../lib/case-studies2";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#f5f3f3] px-4 py-12 md:px-8 md:py-16">
      <main className="mx-auto max-w-7xl">
        {/* Header */}
        {/* <SectionReveal className="mb-12 w-full">
          <header className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest">
              <span className="bg-gradient-to-r from-[#3B3808] to-[#5BA3E8] bg-clip-text text-transparent">
                - CASE STUDY
              </span>
            </p>

            <h1 className="mt-2 text-3xl font-bold text-[#3B3808] md:text-4xl">
              Client Success Stories
            </h1>
          </header>
        </SectionReveal> */}
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-raleway">
        Strategic Pillars: Modernizing the Data-to-Decisions Lifecycle.
         </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-raleway">
           We provide end-to-end data lifecycle management, ensuring your data is accurate, secure, and highly visual.
             </p>
            </div>

        {/* Cards */}
        <div className="space-y-12 md:space-y-16">
          {caseStudies.map((study, idx) => {
            const isRight = idx % 2 === 1;

            return (
              <SectionReveal key={study.id} className="w-full" delay={idx * 0.06}>
              <article
                key={study.id}
                className={`relative mx-auto max-w-6xl bg-white px-6 py-10 md:px-12 md:py-14 overflow-hidden ${
                  isRight
                    ? "rounded-2xl md:rounded-l-[32px] md:rounded-r-full bg-[radial-gradient(circle_at_85%_50%,#5BA3E85C,transparent_55%),linear-gradient(to_left,_#5BA3E840_0%,_#5BA3E81F_26%,_#5BA3E80D_48%,_#f0f7ff_64%,_#f5f3f3_78%,_#f5f3f3_100%)]"
                    : "rounded-2xl md:rounded-r-[32px] md:rounded-l-full bg-[radial-gradient(circle_at_15%_50%,#5BA3E85C,transparent_55%),linear-gradient(to_right,_#5BA3E840_0%,_#5BA3E81F_26%,_#5BA3E80D_48%,_#f0f7ff_64%,_#f5f3f3_78%,_#f5f3f3_100%)]"
                }`}
              >
                <div className="relative z-10 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
                  {/* Image */}
                  <div
                    className={`flex justify-center ${
                      isRight
                        ? "md:order-2 md:justify-end"
                        : "md:order-1 md:justify-start"
                    }`}
                  >
                    <div className="relative">
                      {/* Outer circle */}
                      <div className="absolute -inset-6 rounded-full bg-white" />

                      {/* Image */}
                      <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full bg-white">
                        <Image
                          src={study.image}
                          alt={study.heading}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`${
                      isRight ? "md:order-1 text-left" : "md:order-2 text-left"
                    }`}
                  >
                    <div className="max-w-xl">
                      <div className="inline-flex rounded-full bg-[#ffee50] px-4 py-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#3B3808]">
                          {study.label}
                        </span>
                      </div>

                      <h2 className="mt-5 text-2xl font-bold text-[#3B3808] md:text-3xl">
                        {study.heading}
                      </h2>

                      <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                        {study.description}
                      </p>

                   
                    </div>
                  </div>
                </div>
              </article>
              </SectionReveal>
            );
          })}
        </div>
      </main>
    </div>
  );
}