import Image from "next/image";

export default function Noticias() {
    return (
        <div
            className={`
                flex flex-col 
                items-start justify-center 
                w-full overflow-x-clip
                px-4 relative 
                my-16
            `}
        >
            <h1 className="text-3xl font- text-center mb-4 font-title">
                Notícias
            </h1>
            <div>
                <div>
                    <Image 
                        src="https://www.nefruza.com.br/images/hemodialise_intro.jpg"
                        alt="Notícia 1"
                        width={400}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
}
