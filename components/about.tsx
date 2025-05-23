"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function About() {
  const { t } = useLanguage()

  const skills = [
    t("unitySkill"),
    t("arVrSkill"),
    t("hololensSkill"),
    t("performanceSkill"),
    t("cleanCodeSkill"),
    t("agileSkill"),
    t("zenjectSkill"),
    t("uniRxSkill"),
  ]

  const companies = [
    {
      name: t("superswipeGames"),
      logo: "/images/superswipelogo.png",
      period: "03/2025 - current",
      role: t("unityDeveloper"),
    },
    {
      name: t("mercedesBenzTechMotion"),
      logo: "/images/mercedes_benz_tech_motion_logo.jpeg",
      period: "10/2021 - 10/2024",
      role: t("arEngineer"),
    },
    {
      name: t("technologyAndStrategy"),
      logo: "/images/technology-and-strategy-1622792748.jpg",
      period: "10/2021 - 10/2024",
      role: t("consultant"),
    },
    {
      name: t("fridie"),
      logo: "/images/FRIDIE_black_wordmark.svg",
      period: "02/2021 - 09/2021",
      role: t("unityDeveloper"),
    },
    {
      name: t("bosch"),
      logo: "/images/bosch_logo.jpeg",
      period: "01/2020 - 01/2021",
      role: t("softwareEngineer"),
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 dark:bg-orange-900/30 rounded-full translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 dark:bg-teal-900/30 rounded-full -translate-x-1/2 translate-y-1/2 opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 dark:bg-teal-900/50 rounded-full z-0"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/ggbavaria2.jpg"
                  alt="Fred Newton, Akdogan"
                  width={1000}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-100 dark:bg-orange-900/50 rounded-full z-0"></div>

              {/* Small frog decoration */}
              <div className="absolute bottom-0 right-0 w-16 h-16 z-20">
                <Image
                  src="/images/small-frog.png"
                  alt="Kleiner Frosch"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {t("aboutMe")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">Fred <i>"Freddy"</i> Newton, Akdogan</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{t("aboutMeDescription")}</p>

            <div className="mb-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{t("coreCompetencies")}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">{t("myExperience")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {companies.map((company, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full p-3 mb-4 flex items-center justify-center overflow-hidden">
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        width={120}
                        height={120}
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{company.name}</h4>
                    <p className="text-sm text-teal-600 dark:text-teal-400">{company.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
