import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Award,
  Star,
  QrCode,
  Zap,
  CalendarClock,
  Wrench,
  Menu,
  X,
  Mail,
  ArrowUpRight,
  Instagram,
  MapPin,
  Quote,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import logo from "@/assets/tb-montagens-logo.jpg";
import galeriaRipado from "@/assets/galeria-ripado.jpg";
import galeriaEstante from "@/assets/galeria-estante.jpg";
import galeriaArmario from "@/assets/galeria-armario.jpg";
import galeriaMesa from "@/assets/galeria-mesa.jpg";
import armarioCozinha from "@/assets/armario-cozinha.jpg";
import guardaRoupa from "@/assets/guarda-roupa.jpg";

const IMG = (file: string, w = 1200) =>
  `https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=${w},fit=crop/AMqnyK017wuJewOp/${file}`;

const HERO = IMG("cf0f3f88-3b0e-4c32-9d0b-9a72ce5186af-dOqbKGz8p9So1oQZ.jpeg", 1400);
const THIAGO = IMG("417ef29b-65cc-4b16-9da1-b0832ed3bb4a-YKb6EgXykKUylp9G.jfif", 900);
const WA = "https://api.whatsapp.com/send/?phone=5513997694239&text&type=phone_number&app_absent=0";
const WA_ORC = `https://api.whatsapp.com/send/?phone=5513997694239&text=${encodeURIComponent("Olá, gostaria de um orçamento para uma montagem.")}&type=phone_number&app_absent=0`;
const GOOGLE = "https://www.google.com/maps/search/?api=1&query=Thiago%20Montador%20TB%20Montagens%20Praia%20Grande";
const EMAIL = "ccsthii@gmail.com";
const INSTA = "https://www.instagram.com/thiagomontadordemoveiis";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TB Montagens | Montador de Móveis na Baixada Santista" },
      {
        name: "description",
        content:
          "TB Montagens: montagem profissional de móveis há 10 anos na Baixada Santista, com garantia de 1 ano e atendimento pelo WhatsApp.",
      },
      { property: "og:title", content: "TB Montagens | Baixada Santista" },
      {
        property: "og:description",
         content: "Montagem profissional de móveis com qualidade garantida para você.",
      },
      { property: "og:image", content: THIAGO },
      { name: "twitter:image", content: THIAGO },
    ],
  }),
  component: Index,
});

const NAV = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Diferenciais", "#diferenciais"],
  ["Montagens", "#montagens"],
  ["Avaliações", "#avaliacoes"],
  ["Contato", "#contato"],
] as const;

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function WaButton({ label = "Agendar pelo WhatsApp", href = WA_ORC, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-whatsapp-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:brightness-105 ${className}`}
    >
      <WhatsAppIcon className="size-5" />
      {label}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? "border-b bg-background/90 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <img src={logo} alt="Logo TB Montagens" className="size-12 rounded-lg object-contain" />
          <span className="font-display text-[15px] font-extrabold leading-tight">
            TB Montagens
            <span className="block text-xs font-medium text-muted-foreground">Montagem profissional</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WA_ORC}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" /> WhatsApp
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-full border bg-card lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t bg-background px-5 pb-6 pt-2 lg:hidden">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b py-4 font-display text-lg font-semibold">
              {l}
            </a>
          ))}
          <WaButton className="mt-6 w-full" />
        </nav>
      )}
    </header>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
      <span className="h-px w-6 bg-primary" />
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative pt-28 md:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-3.5 py-1.5 text-sm shadow-soft">
            <MapPin className="size-4 text-primary" /> TB Montagens · Baixada Santista
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[56px]">
            TB Montagens.{" "}
            <span className="text-muted-foreground">Qualidade Garantida para você.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Montador de Móveis há 10 anos. Reserve o melhor horário para você pelo WhatsApp, sem burocracia.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WaButton label="Marque seu serviço" />
            <a
              href={GOOGLE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border bg-card px-6 py-3.5 font-semibold transition-colors hover:bg-secondary"
            >
              Avaliações <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">5 estrelas</strong> no Google Maps
            </p>
          </div>
        </Reveal>
        <Reveal delay={120} className="relative">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img src={THIAGO} alt="Thiago, montador de móveis profissional" className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]" />
          </div>
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border bg-card p-4 shadow-soft sm:-left-6">
            <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Award className="size-6" />
            </span>
            <div>
              <p className="font-display text-sm font-bold">Garantia de 1 ano</p>
              <p className="text-xs text-muted-foreground">Maior prazo da Baixada Santista</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: CalendarClock, t: "Reserve o melhor horário para você pelo WhatsApp, sem burocracia", cta: "Marque seu serviço", href: WA_ORC },
    { icon: Wrench, t: "Montador de móveis mais bem avaliado da Baixada Santista", cta: "Avaliações", href: GOOGLE },
  ];
  return (
    <section className="mx-auto mt-24 max-w-7xl px-5 md:px-8">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map(({ icon: I, t, cta, href }, i) => (
          <Reveal key={t} delay={i * 80}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full items-center gap-5 rounded-2xl bg-ink p-6 text-ink-foreground transition-transform hover:-translate-y-1 md:p-8"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <I className="size-6" />
              </span>
              <div className="flex-1">
                <p className="font-display text-lg font-bold leading-snug">{t}</p>
                <p className="mt-2 inline-flex items-center gap-1 text-sm text-primary">
                  {cta} <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const DIFS = [
  { icon: Award, t: "Garantia de 1 ano", d: "Ofereço o maior prazo de garantia da Baixada Santista, garantindo maior segurança para você e seu móvel" },
  { icon: Star, t: "Montador 5 Estrelas", d: "5 estrelas de avaliação no Google Maps, sempre oferecendo o melhor trabalho da região em todos os serviços" },
  { icon: QrCode, t: "Aceitamos PIX", d: "Pagamentos podem ser realizados com PIX e diversos outros meios de pagamento" },
  { icon: Zap, t: "Rapidez e Praticidade", d: "Serviços com rapidez e praticidade sem complicações. Agilidade e eficiência para seu conforto!" },
];

function Diferenciais() {
  return (
    <section id="diferenciais" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Diferenciais</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            Características que só um montador profissional dispõe
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Desde opções de pagamento práticas até garantias exclusivas, aproveite a tranquilidade que somente um
            montador experiente pode proporcionar.
          </p>
           <div className="mt-8 overflow-hidden rounded-2xl bg-ink shadow-soft">
             <div className="aspect-video">
               <iframe
                 className="h-full w-full"
                 src="https://www.youtube.com/embed/BSdzOOCqLZM?autoplay=1&mute=1&loop=1&playlist=BSdzOOCqLZM&playsinline=1"
                 title="TB Montagens - montagem profissional de móveis"
                 loading="lazy"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                 allowFullScreen
               />
             </div>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {DIFS.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="group h-full rounded-2xl border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft">
                <span className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <I className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{t}</h3>
                <p className="mt-2.5 leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICOS = [
  { t: "Armários de Cozinha", img: armarioCozinha },
  { t: "Guarda-Roupa", img: guardaRoupa },
  { t: "Painéis", img: IMG("294771f9-0c75-43c3-8a8f-81c743d39d69-dWxyWK3E74T97v8g.jpg", 900) },
];

function Servicos() {
  return (
    <section id="servicos" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Serviços</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Serviços</h2>
            <p className="mt-4 text-lg text-muted-foreground">Alguns dos serviços que nós oferecemos e realizamos</p>
          </div>
          <a href="#montagens" className="inline-flex items-center gap-1.5 font-semibold hover:text-accent-foreground">
            Confira mais montagens <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SERVICOS.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <a href="#montagens" aria-label={`Ver mais montagens — ${s.t}`} className="group block overflow-hidden rounded-2xl bg-card">
                <figure className="relative">
                  <img src={s.img} alt={s.t} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl bg-card/95 px-5 py-4 backdrop-blur">
                    <span className="font-display text-lg font-bold">{s.t}</span>
                    <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </figcaption>
                </figure>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALERIA: { src: string; alt: string; pos?: string }[] = [
  { src: galeriaRipado, alt: "Painel ripado com rack e iluminação em LED montado pela TB Montagens", pos: "50% 50%" },
  { src: galeriaEstante, alt: "Gôndolas de loja brancas montadas pela TB Montagens" },
  { src: galeriaArmario, alt: "Guarda-roupa planejado azul acinzentado montado pela TB Montagens" },
  { src: galeriaMesa, alt: "Cozinha branca com bancada em madeira montada pela TB Montagens" },
  { src: IMG("movel7-YrDaryXZMoS4P56y.PNG", 1000), alt: "Montagem de estante realizada pela TB Montagens" },
  { src: guardaRoupa, alt: "Guarda-roupa montado pela TB Montagens" },
  { src: IMG("294771f9-0c75-43c3-8a8f-81c743d39d69-dWxyWK3E74T97v8g.jpg", 1000), alt: "Painel de TV montado pela TB Montagens" },
];

function Montagens() {
  return (
    <section id="montagens" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
       <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
         <div className="max-w-2xl">
           <Eyebrow>Portfólio</Eyebrow>
           <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Montagens realizadas</h2>
           <p className="mt-4 text-lg text-muted-foreground">Uma seleção de móveis montados com cuidado, alinhamento e acabamento profissional.</p>
         </div>
         <WaButton label="Solicitar orçamento" />
      </Reveal>
       <div className="mt-12 grid grid-cols-2 gap-3 md:gap-5">
         {GALERIA.map((foto, i) => (
           <Reveal key={i} delay={(i % 2) * 70} className={`group overflow-hidden rounded-2xl bg-muted ${i === GALERIA.length - 1 && GALERIA.length % 2 ? "col-span-2 md:col-span-1" : ""}`}>
             <img
               src={foto.src}
               alt={foto.alt}
               loading="lazy"
               style={foto.pos ? { objectPosition: foto.pos } : undefined}
               className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === GALERIA.length - 1 && GALERIA.length % 2 ? "aspect-[2/1] md:aspect-[4/3]" : "aspect-[4/3]"}`}
             />
          </Reveal>
        ))}
        <Reveal className="col-span-2 flex items-center md:col-span-1 md:h-full justify-center rounded-2xl bg-ink p-8 text-center text-ink-foreground">
          <div>
            <p className="font-display text-xl font-bold leading-snug">Sua montagem também pode estar aqui.</p>
            <p className="mt-2 text-sm opacity-70">Fale comigo e solicite seu orçamento.</p>
            <WaButton label="Solicitar orçamento" className="mt-6" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const DEPOS = [
  {
    n: "Thuani Moreira",
    t: "O Thiago salvou a minha vida! Me atendeu no mesmo dia que o solicitei, em poucas horas estava na minha casa e fez o trabalho com muita rapidez.",
  },
  {
    n: "Angelo Gonçalves Junior",
    t: "O Thiago já vem montando móveis aqui em casa desde 2018 com pontualidade e muita qualidade, moveis bem alinhados na montagem. Super recomendo, de confiança total. Que Jeová Deus continue abençoando o seu trabalho. Obrigado.",
  },
];

function Avaliacoes() {
  return (
    <section id="avaliacoes" className="bg-ink py-24 text-ink-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-3xl tracking-[0.3em] text-primary">★★★★★</p>
          <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">Avaliações de Clientes</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-70">
            Um pouco sobre o que nossos clientes tem a dizer sobre meu trabalho.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {DEPOS.map((d, i) => (
            <Reveal key={d.n} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink-foreground/10 bg-ink-foreground/5 p-8 md:p-10">
                <Quote className="size-8 text-primary" />
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed md:text-xl">{d.t}</blockquote>
                <figcaption className="mt-8 flex items-center justify-between border-t border-ink-foreground/10 pt-6">
                  <span className="font-display font-bold">{d.n}</span>
                  <span className="text-primary">★★★★★</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <a href={GOOGLE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline">
            Ver avaliações no Google <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", msg: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${form.nome}${form.email ? ` (${form.email})` : ""}.\n\n${form.msg}`;
     window.open(`https://api.whatsapp.com/send/?phone=5513997694239&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`, "_blank", "noopener,noreferrer");
  };
  const input =
    "w-full rounded-xl border bg-background px-4 py-3.5 outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15";
  return (
    <section id="contato" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>Contato</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            Entre em contato para agendar seu serviço hoje mesmo.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Estamos disponíveis para montar seus móveis com qualidade e eficiência. Entre em contato agora!
          </p>
          <div className="mt-10 space-y-3">
            <a href={WA_ORC} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft">
              <span className="grid size-12 place-items-center rounded-xl bg-whatsapp text-whatsapp-foreground">
                <WhatsAppIcon className="size-6" />
              </span>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-display text-lg font-bold">+55 13 99769-4239</p>
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4 rounded-2xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft">
              <span className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Mail className="size-6" />
              </span>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">E-mail</p>
                <p className="font-display text-lg font-bold">{EMAIL}</p>
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={submit} className="rounded-3xl border bg-card p-7 shadow-soft md:p-10">
            <h3 className="text-2xl font-bold">Solicite seu orçamento agora mesmo.</h3>
            <div className="mt-7 space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Nome para contato</span>
                <input className={input} value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} maxLength={100} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">E-mail*</span>
                <input type="email" required className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Mensagem*</span>
                <textarea required rows={5} className={`${input} resize-none`} value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} maxLength={1000} />
              </label>
            </div>
            <button type="submit" className="mt-6 w-full rounded-full bg-ink px-6 py-4 font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5">
              Enviar mensagem
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
           <div className="flex items-center gap-3">
             <img src={logo} alt="Logo TB Montagens" className="size-14 rounded-lg object-contain" />
             <p className="font-display text-xl font-extrabold">TB Montagens</p>
           </div>
          <p className="mt-3 max-w-sm text-muted-foreground">O profissional que sua propriedade sempre precisou</p>
          <a href={INSTA} target="_blank" rel="noreferrer" aria-label="Instagram" className="mt-6 inline-grid size-10 place-items-center rounded-full border bg-card transition-colors hover:bg-primary hover:text-primary-foreground">
            <Instagram className="size-5" />
          </a>
        </div>
        <div>
          <p className="font-display font-bold">Contato</p>
          <ul className="mt-4 space-y-2.5 text-muted-foreground">
            <li><a href={`mailto:${EMAIL}`} className="hover:text-foreground">{EMAIL}</a></li>
            <li><a href={WA} target="_blank" rel="noreferrer" className="hover:text-foreground">+55 13 99769-4239</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display font-bold">Ajuda</p>
          <ul className="mt-4 space-y-2.5 text-muted-foreground">
            <li><a href={WA_ORC} target="_blank" rel="noreferrer" className="hover:text-foreground">Enviar solicitação de orçamento</a></li>
            {NAV.slice(1).map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-foreground">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-muted-foreground md:px-8">
          © {new Date().getFullYear()}. Todos os Direitos Reservados.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Diferenciais />
        <Servicos />
        <Montagens />
        <Avaliacoes />
        <Contato />
      </main>
      <Footer />
      <a
        href={WA_ORC}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-soft transition-transform hover:scale-105 md:hidden"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}
