import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="min-h-100 flex items-center justify-center flex-col">
            <Image
                alt=""
                src="/sobrenos.png"
                width={200}
                height={200}
                className=""
            />
            <p className="ml-4 text-lg font-title font-medium">
                Parece que essa página não está disponível...
            </p>
            <Link
                href="/"
                className="mt-4 rounded-full bg-nef-600 px-4 py-2 text-white hover:bg-nef-700"
            >
                Volte para a página inicial
            </Link>
        </div>
    );
}