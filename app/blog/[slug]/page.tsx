"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { BsCalendar2Date, BsPersonCircle } from "react-icons/bs";
import {
    FaWhatsapp,
    FaXTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaLink,
    FaCheck,
    FaArrowRight,
} from "react-icons/fa6";

// ---------- Tipos ----------

type ContentBlock =
    | { type: "heading"; level: 2 | 3; text: string }
    | { type: "paragraph"; text: string }
    | { type: "image"; src: string; alt: string; caption?: string }
    | { type: "quote"; text: string }
    | { type: "link"; href: string; label: string; external?: boolean };

type Noticia = {
    slug: string;
    titulo: string;
    categoria: string;
    data: string;
    autor: {
        nome: string;
        cargo: string;
        bio: string;
        foto: string;
    };
    imagemCapa: string;
    conteudo: ContentBlock[];
};

type NoticiaResumo = {
    slug: string;
    titulo: string;
    resumo: string;
    data: string;
    imagem: string;
    tags: string[];
};

// ---------- Dados de exemplo (substituir por fetch/CMS) ----------

const noticia: Noticia = {
    slug: "campanha-doacao-orgaos",
    titulo: "Campanha de Doação de Órgãos reúne pacientes transplantados em bate-papo emocionante",
    categoria: "Dicas de saúde",
    data: "19/07/2026",
    autor: {
        nome: "Dra. Joana da Silva",
        cargo: "Nefrologista · CRM 12345-PB",
        bio: "Especialista em nefrologia clínica e transplante renal, atua há mais de 15 anos no cuidado de pacientes em terapia dialítica.",
        foto: "https://www.nefruza.com.br/images/blog/blog-paciente3.jpg",
    },
    imagemCapa: "https://www.nefruza.com.br/images/blog/blog-paciente5.jpg",
    conteudo: [
        {
            type: "paragraph",
            text: "O mês de setembro foi o mês da Campanha Nacional e Estadual para Doação de Órgãos e Tecidos. Por este motivo, a NEFUZA realizou nos dias 03 e 07 de outubro, uma reunião/diálogo com pacientes transplantados, para tratar o assunto do ponto de vista do sujeito. Portanto, resgatar histórias, trazer à memória sentimentos e sonhos, comuns a quem hoje depende de uma máquina para viver.",
        },
        {
            type: "quote",
            text: "Transplante, pelo paciente, é determinação, força de vontade, persistência, esperança, luta, união familiar e amor.",
        },
        {
            type: "paragraph",
            text: "Foi isso que nossos convidados, Alexsandro Carneiro e Roberto Lucas, partilharam conosco, num clima de muita emoção e comoção. Contagiaram a todos, pacientes e acompanhantes; estes sentiram-se motivados ao transplante e demais participantes, a refletirem sobre o ato de doar seus órgãos, e então declarar-se a seus familiares.",
        },
        {
            type: "heading",
            level: 2,
            text: "Um encontro de histórias reais",
        },
        {
            type: "image",
            src: "https://www.nefruza.com.br/images/nefruza_edit.jpg",
            alt: "Encontro com pacientes transplantados na Nefruza",
            caption:
                "Pacientes e equipe durante o encontro realizado na sede da Nefruza",
        },
        {
            type: "paragraph",
            text: "Dois exemplos, duas vidas testemunhando o sentido da doação de órgãos — e um lembrete de que por trás de cada estatística existe uma história de espera, luta e recomeço.",
        },
        {
            type: "link",
            href: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doacao-de-orgaos",
            label: "Saiba mais sobre doação de órgãos no site do Ministério da Saúde",
            external: true,
        },
    ],
};

const categorias = [
    { slug: "todos", label: "Todos" },
    { slug: "comunicados", label: "Comunicados" },
    { slug: "inovacao", label: "Inovação" },
    { slug: "eventos", label: "Eventos" },
    { slug: "saude", label: "Saúde" },
    { slug: "dicas-de-saude", label: "Dicas de saúde" },
];

const relacionadas: NoticiaResumo[] = [
    {
        slug: "noticia-2",
        titulo: "Como funciona a hemodiálise: um guia para pacientes e familiares",
        resumo: "Entenda o passo a passo do tratamento e como a Nefruza acompanha cada etapa com atenção e cuidado.",
        data: "10/07/2026",
        imagem: "https://www.nefruza.com.br/images/blog/blog-paciente3.jpg",
        tags: ["Dicas de saúde"],
    },
    {
        slug: "noticia-3",
        titulo: "Nefruza inaugura nova unidade de atendimento",
        resumo: "Nova estrutura amplia a capacidade de atendimento e traz mais conforto para os pacientes da região.",
        data: "02/07/2026",
        imagem: "https://www.nefruza.com.br/images/nefruza_edit.jpg",
        tags: ["Comunicados"],
    },
    {
        slug: "noticia-4",
        titulo: "Setembro Verde: mês de conscientização sobre doação de órgãos",
        resumo: "Relembre as ações realizadas durante a campanha e como você pode participar da conscientização.",
        data: "28/06/2026",
        imagem: "https://www.nefruza.com.br/images/blog/blog-paciente5.jpg",
        tags: ["Eventos"],
    },
];

const recentes: NoticiaResumo[] = [
    ...relacionadas,
    {
        slug: "noticia-5",
        titulo: "Convênios: veja quais planos a Nefruza atende",
        resumo: "",
        data: "20/06/2026",
        imagem: "https://www.nefruza.com.br/images/blog/blog-paciente3.jpg",
        tags: ["Comunicados"],
    },
];

// ---------- Componentes auxiliares ----------

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
    return (
        <div className="w-full">
            {blocks.map((block, i) => {
                switch (block.type) {
                    case "heading": {
                        const Tag = block.level === 2 ? "h2" : "h3";
                        return (
                            <Tag
                                key={i}
                                className={`font-title font-extrabold text-nef-700 mt-10 mb-4 ${
                                    block.level === 2 ? "text-2xl" : "text-xl"
                                }`}
                            >
                                {block.text}
                            </Tag>
                        );
                    }
                    case "paragraph":
                        return (
                            <p
                                key={i}
                                className="text-xl leading-relaxed text-zinc-700 mb-6 wrap-break-word"
                            >
                                {block.text}
                            </p>
                        );
                    case "quote":
                        return (
                            <blockquote
                                key={i}
                                className="border-l-4 border-nef-500 pl-6 py-1 my-8 text-xl italic text-nef-700"
                            >
                                {block.text}
                            </blockquote>
                        );
                    case "image":
                        return (
                            <figure key={i} className="my-8">
                                <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden bg-nef-50">
                                    <Image
                                        src={block.src}
                                        alt={block.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {block.caption && (
                                    <figcaption className="text-sm text-zinc-500 italic text-center mt-3">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    case "link":
                        return (
                            <p key={i} className="mb-6">
                                <Link
                                    href={block.href}
                                    target={
                                        block.external ? "_blank" : undefined
                                    }
                                    rel={
                                        block.external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="inline-flex items-center gap-1.5 font-semibold text-nef-600 hover:text-nef-700 underline underline-offset-4 decoration-nef-300"
                                >
                                    {block.label} <FaArrowRight size={12} />
                                </Link>
                            </p>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
}

function ShareBar({ titulo }: { titulo: string }) {
    const [copiado, setCopiado] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000);
        } catch {
            // clipboard indisponível — ignora silenciosamente
        }
    };

    const shareLinks = [
        {
            label: "WhatsApp",
            icon: FaWhatsapp,
            href: `https://wa.me/?text=${encodeURIComponent(titulo + " — " + window.location.href)}`,
        },
        {
            label: "Facebook",
            icon: FaFacebookF,
            href: `https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`,
        },
        {
            label: "X",
            icon: FaXTwitter,
            href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(titulo + " " + window.location.href)}`,
        },
        {
            label: "LinkedIn",
            icon: FaLinkedinIn,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`,
        },
    ];

    return (
        <div className="flex items-center gap-3 flex-wrap">
            {shareLinks.map(({ label, icon: Icon, href }) => (
                <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Compartilhar no ${label}`}
                    className="flex items-center justify-center h-11 w-11 rounded-full bg-nef-50 text-nef-600 hover:bg-nef-600 hover:text-white transition-colors"
                >
                    <Icon size={18} />
                </Link>
            ))}
            <button
                type="button"
                onClick={handleCopy}
                aria-label="Copiar link"
                className={`flex items-center justify-center h-11 w-11 rounded-full transition-colors ${
                    copiado
                        ? "bg-green-100 text-green-600"
                        : "bg-nef-50 text-nef-600 hover:bg-nef-600 hover:text-white"
                }`}
            >
                {copiado ? <FaCheck size={16} /> : <FaLink size={16} />}
            </button>
        </div>
    );
}

function NoticiaCard({ noticia }: { noticia: NoticiaResumo }) {
    return (
        <Link
            href={`/noticias/${noticia.slug}`}
            className={`
                flex flex-col
                rounded-3xl overflow-hidden bg-nef-50
                border border-transparent hover:border-nef-400
                transition-all group
            `}
        >
            <div className="relative w-full aspect-5/3">
                <Image
                    src={noticia.imagem}
                    alt={noticia.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-6 flex flex-1 flex-col items-start justify-between">
                <div>
                    <span className="text-xs text-nef-600 font-bold uppercase">
                        {noticia.data} · {noticia.tags.join(", ")}
                    </span>
                    <h3 className="text-lg font-bold text-nef-700 mt-1 mb-2 line-clamp-2">
                        {noticia.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {noticia.resumo}
                    </p>
                </div>
                <span className="bg-nef-600 text-white font-bold py-3 px-8 rounded-full cursor-pointer hover:bg-nef-600/90 transition-colors">
                    Leia mais →
                </span>
            </div>
        </Link>
    );
}

// ---------- Página ----------

export default function Blog({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);

    return (
        <div className="max-w-6xl mx-auto w-full font-sans px-4 md:px-16 xl:px-0 py-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
                <Link href="/" className="hover:text-nef-600">
                    Início
                </Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-nef-600">
                    Notícias
                </Link>
                <span>/</span>
                <span className="text-nef-600 font-medium">
                    {noticia.categoria}
                </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
                {/* Conteúdo principal */}
                <main className="flex flex-col items-start w-full min-w-0">
                    <span className="text-sm font-bold text-nef-500 uppercase">
                        {noticia.categoria}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 mt-1 font-title text-nef-800 leading-tight">
                        {noticia.titulo}
                    </h1>

                    <div className="flex flex-row w-full gap-4 flex-wrap items-center mb-4">
                        <span className="flex items-center gap-2 text-sm text-zinc-600">
                            <BsCalendar2Date /> {noticia.data}
                        </span>
                        <span className="text-zinc-300">·</span>
                        <span className="flex items-center gap-2 text-sm text-zinc-600">
                            <BsPersonCircle /> {noticia.autor.nome}
                        </span>
                    </div>


                    {/* Imagem de capa */}
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-nef-700 mb-8">
                        <Image
                            src={noticia.imagemCapa}
                            alt={noticia.titulo}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Corpo do artigo */}
                    <ContentRenderer blocks={noticia.conteudo} />

                    {/* Compartilhar */}
                    <div className="w-full border-t border-zinc-100 mt-4 pt-8 mb-12">
                        <h4 className="font-bold text-nef-700 mb-4">
                            Compartilhe essa notícia
                        </h4>
                        <ShareBar titulo={noticia.titulo} />
                    </div>

                    {/* Autor */}
                    <div className="w-full mb-12">
                        <h4 className="font-bold text-nef-700 mb-4">
                            Sobre o autor
                        </h4>
                        <div className="flex items-center gap-5 bg-nef-50 rounded-3xl p-6">
                            <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden">
                                <Image
                                    src={noticia.autor.foto}
                                    alt={noticia.autor.nome}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-nef-700">
                                    {noticia.autor.nome}
                                </p>
                                <p className="text-sm text-nef-600 font-semibold mb-2">
                                    {noticia.autor.cargo}
                                </p>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    {noticia.autor.bio}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Relacionadas */}
                    <div className="w-full">
                        <h4 className="font-bold text-xl text-nef-700 mb-6">
                            Notícias relacionadas
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {relacionadas.map((item) => (
                                <NoticiaCard key={item.slug} noticia={item} />
                            ))}
                        </div>
                    </div>
                </main>

                {/* Aside */}
                <aside className="hidden lg:block w-full">
                    <div className="sticky top-28 flex flex-col gap-10">
                        <div>
                            <h3 className="text-xl font-bold text-nef-700 mb-4">
                                Categorias
                            </h3>
                            <ul className="flex flex-col gap-1">
                                {categorias.map((cat) => (
                                    <li key={cat.slug}>
                                        <Link
                                            href={{
                                                pathname: "/blog",
                                                query: { category: cat.slug },
                                            }}
                                            className={`
                                                block rounded-xl px-4 py-2.5 text-sm font-medium
                                                text-nef-700 hover:bg-nef-50 hover:text-nef-600
                                                transition-colors
                                            `}
                                        >
                                            {cat.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-nef-700 mb-4">
                                Mais recentes
                            </h3>
                            <ul className="flex flex-col gap-4">
                                {recentes.slice(0, 4).map((item) => (
                                    <li key={item.slug}>
                                        <Link
                                            href={`/noticias/${item.slug}`}
                                            className="flex items-center gap-3 group"
                                        >
                                            <div className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden bg-nef-50">
                                                <Image
                                                    src={item.imagem}
                                                    alt={item.titulo}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold text-nef-700 line-clamp-2 group-hover:text-nef-600 transition-colors">
                                                    {item.titulo}
                                                </p>
                                                <span className="text-xs text-zinc-500">
                                                    {item.data}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
