import Image from "next/image";
import { CallChatRoundedIcon } from "@solar-icons/react/broken/call-chat-rounded";
import { UserIdIcon } from '@solar-icons/react/broken/user-id';
import { DocumentMedicineIcon } from '@solar-icons/react/broken/document-medicine';

export default function Banner() {
    return (
        <div className="relative flex w-full flex-col items-center h-[60vh] sm:h-[80vh] mb-84">
            <div
                className={`
                        min-h-[80vh] 
                        flex w-full flex-col items-center justify-center gap-8 sm:items-start
                        bg-nef-800
                    `}
            ></div>

            <div
                className={`
                        bg-white w-fit max-w-5xl flex flex-row flex-wrap
                        items-center justify-center gap-8 p-8 sm:items-start
                        shadow-lg rounded-3xl mx-auto
                        transform -translate-y-1/2 top-full absolute
                    `}
            >
                <div
                    className={`
                            flex flex-col items-center justify-center text-center gap-4
                            bg-white px-8 py-12 rounded-xl
                            aspect-3/4 w-40 h-56
                            border border-zinc-200 shadow-0
                            hover:shadow-xl hover:border-nef-500 transition-all duration-300
                        `}
                >
                    <div className="flex items-center justify-center">
                        <CallChatRoundedIcon size={64} className="text-nef-600" />
                    </div>
                    <h3 className={`font-semibold`}>Quem Somos</h3>
                </div>
                <div
                    className={`
                            flex flex-col items-center justify-center text-center gap-4
                            bg-white px-8 py-12 rounded-xl
                            aspect-3/4 w-40 h-56
                            border border-zinc-200 shadow-0
                            hover:shadow-xl hover:border-nef-500 transition-all duration-300
                        `}
                >
                    <div className="flex items-center justify-center">
                        <CallChatRoundedIcon size={64} className="text-nef-600" />
                    </div>
                    <h3 className={`font-semibold`}>Contato</h3>
                </div>
                <div
                    className={`
                            flex flex-col items-center justify-center text-center gap-4
                            bg-white px-8 py-12 rounded-xl
                            aspect-3/4 w-40 h-56
                            border border-zinc-200 shadow-0
                            hover:shadow-xl hover:border-nef-500 transition-all duration-300
                        `}
                >
                    <div className="flex items-center justify-center">
                        <DocumentMedicineIcon size={64} className="text-nef-600" />
                    </div>
                    <h3 className={`font-semibold`}>Nossos serviços</h3>
                </div>
                <div
                    className={`
                            flex flex-col items-center justify-center text-center gap-4
                            bg-white px-8 py-12 rounded-xl
                            aspect-3/4 w-40 h-56
                            border border-zinc-200 shadow-0
                            hover:shadow-xl hover:border-nef-500 transition-all duration-300
                        `}
                >
                    <div className="flex items-center justify-center">
                        <UserIdIcon size={64} className="text-nef-600" />
                    </div>
                    <h3 className={`font-semibold`}>Notícias</h3>
                </div>
                <div
                    className={`
                            flex flex-col items-center justify-center text-center gap-4
                            bg-white px-8 py-12 rounded-xl
                            aspect-3/4 w-40 h-56
                            border border-zinc-200 shadow-0
                            hover:shadow-xl hover:border-nef-500 transition-all duration-300
                        `}
                >
                    <div className="flex items-center justify-center">
                        <UserIdIcon size={64} className="text-nef-600" />
                    </div>
                    <h3 className={`font-semibold`}>Convênios aceitos</h3>
                </div>
            </div>
        </div>
    );
}
