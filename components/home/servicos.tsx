import Image from "next/image";
import Link from "next/link";
import { BiSolidDonateBlood } from "react-icons/bi";
import {
    FaChevronLeft,
    FaChevronRight,
    FaHouseChimneyMedical,
    FaUserDoctor,
    FaKitMedical,
    FaHeartPulse,
    FaHospital,
} from "react-icons/fa6";
import { RiMentalHealthFill } from "react-icons/ri";
import { GiFruitBowl } from "react-icons/gi";
import { FaNotesMedical } from "react-icons/fa";

export default function Servicos() {
    return (
        <>
            <div
                id="servicos"
                className={`
                    flex flex-row 
                    items-center justify-between 
                    w-full overflow-x-clip
                    px-4 xl:px-0 relative 
                    py-24
                `}
            >
                <div
                    className={`
                        flex flex-col lg:flex-row 
                        items-center justify-between 
                        w-full max-w-6xl mx-auto 
                        relative 
                    `}
                >
                    <div
                        className={`
                        flex flex-col relative
                        h-full
                        items-center justify-center
                        w-full lg:w-4/12
                    `}
                    >
                        <div
                            className={`
                                flex flex-col
                                items-start justify-center
                                w-full
                                bg-nef-700 text-zinc-50 p-12 rounded-2xl
                                relative overflow-hidden
                            `}
                        >
                            {/* <div
                                aria-hidden
                                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-linear-to-br from-nef-100 to-nef-300 opacity-30 blur-3xl"
                            /> */}
                            <h1 className="text-3xl font- text-start mb-4 font-title">
                                Serviços especializados
                            </h1>
                            <p className="text-start text-muted-foreground pb-4">
                                Reunimos atendimento especializado, equipe
                                multidisciplinar e serviços integrados para
                                acompanhar cada etapa da jornada do paciente.
                            </p>

                            <Link
                                href="/servicos"
                                className="bg-nef-200 text-nef-900 font-bold py-3 px-8 rounded-full cursor-pointer hover:bg-nef-200/90 transition-colors"
                            >
                                Ver todos
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`
                        lg:-left-8 relative
                        flex flex-row flex-wrap items-center justify-start gap-4 
                        w-full lg:w-8/12 pt-8
                        p-4 lg:p-0
                        -top-14 lg:top-0
                    `}
                    >
                        <div className="flex items-center p-6 bg-white border border-zinc-200 text-zinc-950 w-full lg:flex-1 lg:min-w-[calc(50%-16px)] lg:max-w-94 rounded-2xl shadow-lg gap-4">
                            <div className="p-2 rounded-xl bg-nef-200">
                                <BiSolidDonateBlood
                                    size={32}
                                    className="text-nef-600"
                                />
                            </div>
                            <p className="text-xl font-semibold">Hemodiálise</p>
                        </div>
                        {/* <div className="flex items-center p-6 bg-white border border-zinc-200 text-zinc-950 w-full lg:flex-1 lg:min-w-[calc(50%-16px)] lg:max-w-94 rounded-2xl shadow-lg gap-4">
                            <div className="p-8 rounded-xl bg-nef-400"></div>
                            <p className="text-xl font-semibold">
                                Diálise Peritoneal Ambulatorial Contínua
                            </p>
                        </div> */}
                        <div className="flex items-center p-6 bg-white border border-zinc-200 text-zinc-950 w-full lg:flex-1 lg:min-w-[calc(50%-16px)] lg:max-w-94 rounded-2xl shadow-lg gap-4">
                            <div className="p-2 rounded-xl bg-nef-100">
                                <FaHouseChimneyMedical
                                    size={32}
                                    className="text-nef-600"
                                />
                            </div>
                            <p className="text-xl font-semibold">
                                Diálises externas
                            </p>
                        </div>
                        {/* <div className="flex items-center p-6 bg-white border border-zinc-200 text-zinc-950 w-full lg:flex-1 lg:min-w-[calc(50%-16px)] lg:max-w-94 rounded-2xl shadow-lg gap-4">
                            <div className="p-8 rounded-xl bg-nef-400"></div>
                            <p className="text-xl font-semibold">
                                Implantes vasculáres
                            </p>
                        </div> */}
                        <div className="flex items-center p-6 bg-white border border-zinc-200 text-zinc-950 w-full lg:flex-1 lg:min-w-[calc(50%-16px)] lg:max-w-94 rounded-2xl shadow-lg gap-4">
                            <div className="p-2 rounded-xl bg-nef-200">
                                <FaKitMedical
                                    size={32}
                                    className="text-nef-600"
                                />
                            </div>
                            <p className="text-xl font-semibold">
                                Atendimento Ambulatorial
                            </p>
                        </div>
                        <div className="flex items-center p-6 bg-white border border-zinc-200 text-zinc-950 w-full lg:flex-1 lg:min-w-[calc(50%-16px)] lg:max-w-94 rounded-2xl shadow-lg gap-4">
                            <div className="p-2 rounded-xl bg-nef-100">
                                <GiFruitBowl
                                    size={32}
                                    className="text-nef-600"
                                />
                            </div>
                            <p className="text-xl font-semibold">
                                Nutricionista
                            </p>
                        </div>
                        <div className="flex items-center p-6 bg-white border border-zinc-200 text-zinc-950 w-full lg:flex-1 lg:min-w-[calc(50%-16px)] lg:max-w-94 rounded-2xl shadow-lg gap-4">
                            <div className="p-2 rounded-xl bg-nef-200">
                                <RiMentalHealthFill
                                    size={32}
                                    className="text-nef-600"
                                />
                            </div>
                            <p className="text-xl font-semibold">Psicologia</p>
                        </div>
                        <div className="flex items-center p-6 bg-white border border-zinc-200 text-zinc-950 w-full lg:flex-1 lg:min-w-[calc(50%-16px)] lg:max-w-94 rounded-2xl shadow-lg gap-4">
                            <div className="p-2 rounded-xl bg-nef-100">
                                <FaNotesMedical
                                    size={32}
                                    className="text-nef-600"
                                />
                            </div>
                            <p className="text-xl font-semibold">
                                Assistência Social
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
