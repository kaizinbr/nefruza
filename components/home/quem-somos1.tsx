"use client";

import Image from "next/image";
import Link from "next/link";
import { LuUsers, LuFlag, LuHeartHandshake } from "react-icons/lu";

import { UsersGroupTwoRoundedIcon } from "@solar-icons/react/bold/users-group-two-rounded";
import { Flag2Icon } from "@solar-icons/react/bold/flag-2";
import { HandHeartIcon } from "@solar-icons/react/bold/hand-heart";

import { motion, useReducedMotion } from "motion/react";

export default function QuemSomos() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <>
            <div
                className={`
                    flex flex-row 
                    items-start justify-center 
                    w-full overflow-x-clip
                    px-4 relative 
                    py-24
                `}
            >
                <div
                    className={`
                        flex flex-col 
                        items-center justify-center 
                        w-full max-w-6xl mx-auto 
                        relative 
                    `}
                >
                    <div
                        className={`
                                flex flex-col
                                items-center justify-center
                                w-full mb-8 lg:mb-0 text-center
                            `}
                    >
                        <span className="text-sm font-bold text-nef-500 uppercase mb-1">
                            Quem somos
                        </span>
                        <h1 className="md:text-4xl lg:text-5xl text-3xl text-center mb-4 font-title">
                            Nefrologia com história e propósito
                        </h1>
                        <p className="text-center md:text-lg text-zinc-600">
                            Há 47 anos, a Nefruza acompanha pacientes e famílias
                            com experiência, proximidade e cuidado em cada etapa
                            do tratamento renal.
                        </p>
                    </div>

                    <div
                        className={`
                                flex flex-col
                                items-center justify-center
                                w-full lg:-top-8 relative
                            `}
                    >
                        <div className="w-full flex flex-col lg:flex-row justify-between relative z-10">
                            <div className="flex flex-col gap-6 mb-8 lg:mb-0 items-center relative translate-y-0 lg:translate-y-full">
                                <motion.div
                                    className="p-6 bg-white rounded-2xl border border-zinc-300 shadow-md text-center max-w-76"
                                    initial={
                                        prefersReducedMotion
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 24 }
                                    }
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.35 }}
                                    transition={{
                                        duration: 0.35,
                                        ease: "easeOut",
                                    }}
                                >
                                    <p className="font-extrabold font-title mb-3">
                                        Equipe
                                    </p>
                                    <p className="leading-6">
                                        Uma equipe experiente e próxima, que
                                        conhece cada paciente, acompanha sua
                                        história e cuida além do diagnóstico.
                                    </p>
                                </motion.div>
                                <div className="size-16 flex items-center justify-center rounded-full border border-zinc-300 bg-white shadow-md">
                                    <UsersGroupTwoRoundedIcon
                                        size={36}
                                        className="text-nef-600"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 items-center top-0 mb-8 lg:top-20 relative">
                                <motion.div
                                    className="p-6 bg-white rounded-2xl border border-zinc-300 shadow-md text-center max-w-76"
                                    initial={
                                        prefersReducedMotion
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 24 }
                                    }
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.35 }}
                                    transition={{
                                        duration: 0.35,
                                        ease: "easeOut",
                                    }}
                                >
                                    <p className="font-extrabold font-title mb-3">
                                        Pioneirismo
                                    </p>
                                    <p className="leading-6">
                                        A primeira clínica de hemodiálise da
                                        Paraíba, fundada em 1979
                                    </p>
                                </motion.div>
                                <div className="size-16 flex items-center justify-center  rounded-full border border-zinc-300 bg-white shadow-md">
                                    <Flag2Icon
                                        size={36}
                                        className="text-nef-600"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 mb-8 lg:mb-0 items-center relative translate-y-0 lg:translate-y-full">
                                <motion.div
                                    className="p-6 bg-white rounded-2xl border border-zinc-300 shadow-md text-center max-w-76"
                                    initial={
                                        prefersReducedMotion
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 24 }
                                    }
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.35 }}
                                    transition={{
                                        duration: 0.35,
                                        ease: "easeOut",
                                    }}
                                >
                                    <p className="font-extrabold font-title mb-3">
                                        Cuidado humanizado
                                    </p>
                                    <p className="leading-6">
                                        Um cuidado multidisciplinar pensado
                                        para as necessidades de cada paciente e
                                        para cada etapa de sua jornada.
                                    </p>
                                </motion.div>
                                <div className="size-16 flex items-center justify-center  rounded-full border border-zinc-300 bg-white shadow-md">
                                    <HandHeartIcon
                                        size={36}
                                        className="text-nef-600"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:hidden top-2 bg-linear-to-b from-nef-400 to-nef-900 to-75% w-4 rounded-full absolute z-0 h-7/10"></div>
                        <div className="w-full relative flex items-start justify-center lg:h-112 overflow-hidden">
                            <div
                                className={`
                                    w-full aspect-square sm:size-124 lg:size-244 rounded-full p-3
                                    bg-transparent
                                    bg-radial-[at_25%_25%] from-nef-300 via-nef-600 to-nef-900 to-75%
                                    flex justify-center items-center
                                    z-0
                                `}
                            >
                                <div
                                    className={`
                                        absolute
                                        w-9/10 z-0 aspect-square sm:size-120 lg:size-238 rounded-full bg-white
                                    `}
                                />
                                <div
                                    className={`
                                        absolute
                                        w-[95%] z-5 aspect-square sm:size-98 lg:size-214 rounded-full bg-white border border-nef-300/80
                                    `}
                                />
                                <div
                                    className={`
                                        absolute
                                        w-[95%] z-5 aspect-square sm:size-72 lg:size-190 rounded-full bg-white border border-nef-300/50
                                    `}
                                />
                                <div
                                    className={`
                                        absolute
                                        w-[95%] z-5 aspect-square sm:size-98 lg:size-164 rounded-full bg-white border border-nef-200
                                    `}
                                />
                                <div
                                    className={`
                                        absolute
                                        w-[95%] z-5 aspect-square sm:size-98 lg:size-140 rounded-full bg-white border border-nef-200/80
                                    `}
                                />
                                <div
                                    className={`
                                        absolute
                                        w-[95%] z-5 aspect-square sm:size-98 lg:size-116 rounded-full bg-white border border-nef-200/50
                                    `}
                                />
                                <div
                                    className={`
                                        absolute
                                        w-[95%] z-5 aspect-square sm:size-98 lg:size-92 rounded-full bg-white border border-nef-200/30
                                    `}
                                />
                                <div className="w-full z-20 aspect-square sm:size-120 lg:size-238 rounded-full  flex flex-col items-center justify-center lg:pt-44 lg:justify-start">
                                    <h1 className="text-2xl sm:text-4xl font-extrabold font-title text-center text-nef-600">
                                        47 anos cuidando <br /> de vidas na
                                        Paraíba
                                    </h1>
                                    <Link
                                        href="/institucional"
                                        className={`
                                                border border-nef-600 text-nef-600 font-bold
                                                py-3 px-8 w-fit h-fit rounded-full
                                                cursor-pointer hover:bg-nef-200/90 transition-colors
                                                mt-6
                                            `}
                                    >
                                        Conheça nossa história
                                    </Link>
                                </div>
                                <div className="hidden lg:flex bg-linear-to-t from-white to-transparent w-full h-44 absolute bottom-0 z-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
