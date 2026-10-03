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
  MessageCircle,
  ArrowUpRight,
  Instagram,
  MapPin,
  Quote,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const IMG = (file: string, w = 1200) =>
  `https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=${w},fit=crop/AMqnyK017wuJewOp/${file}`;

const HERO = IMG("cf0f3f88-3b0e-4c32-9d0b-9a72ce5186af-dOqbKGz8p9So1oQZ.jpeg", 1400);
const THIAGO = IMG("417ef29b-65cc-4b16-9da1-b0832ed3bb4a-YKb6EgXykKUylp9G.jfif", 900);
const WA = "https://wa.me/5513997694239";
const WA_ORC = `${WA}?text=${encodeURIComponent("Olá, gostaria de um orçamento para uma montagem.")}`;
const GOOGLE = "https://g.co/kgs/dt8zT3M";
const EMAIL = "ccsthii@gmail.com";
const INSTA = "https://www.instagram.com/thiagomontadordemoveiis";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thiago Montador de Móveis | Baixada Santista" },
      {
        name: "description",
        content:
          "Montador de móveis profissional há 10 anos na Baixada Santista. Garantia de 1 ano, 5 estrelas no Google e agendamento pelo WhatsApp.",
      },
      { property: "og:title", content: "Thiago Montador de Móveis | Baixada Santista" },
      {
        property: "og:description",
        content: "Montador de móveis profissional. Qualidade garantida para você.",
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

function WaButton({ label = "Agendar pelo WhatsApp", href = WA_ORC, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-whatsapp-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:brightness-105 ${className}`}
    >
      <MessageCircle className="size-5" />
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
          <img src={IMG("cf0f3f88-3b0e-4c32-9d0b-9a72ce5186af-dOqbKGz8p9So1oQZ.jpeg", 120)} alt="" className="size-9 rounded-full object-cover" />
          <span className="font-display text-[15px] font-extrabold leading-tight tracking-tight">
            Thiago
            <span className="block text-xs font-medium text-muted-foreground">Montador de Móveis</span>
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
            <MessageCircle className="size-4" /> WhatsApp
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
            <MapPin className="size-4 text-primary" /> Montador de móveis · Baixada Santista
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[56px]">
            Montador de móveis profissional.{" "}
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
          <div className="mt-8 hidden overflow-hidden rounded-3xl lg:block">
            <img src={IMG("57f0f8e3-a6d9-4f12-8720-25f676f69e5a-AzG782XwvQtX0ZVL.jpeg", 900)} alt="Montagem realizada" className="aspect-[4/3] w-full object-cover" loading="lazy" />
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
  { t: "Armários de Cozinha", img: IMG("movel10-AMqny0pEONs1vLxV.PNG", 900) },
  { t: "Guarda-Roupa", img: IMG("movel8-AoPerXN2NafwbX9y.PNG", 900) },
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
              <figure className="group relative overflow-hidden rounded-2xl bg-card">
                <img src={s.img} alt={s.t} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl bg-card/95 px-5 py-4 backdrop-blur">
                  <span className="font-display text-lg font-bold">{s.t}</span>
                  <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                    <ArrowUpRight className="size-4" />
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALERIA = [
  { f: "57f0f8e3-a6d9-4f12-8720-25f676f69e5a-AzG782XwvQtX0ZVL.jpeg", c: "md:row-span-2" },
  { f: "movel7-YrDaryXZMoS4P56y.PNG", c: "" },
  { f: "movel10-AMqny0pEONs1vLxV.PNG", c: "" },
  { f: "294771f9-0c75-43c3-8a8f-81c743d39d69-dWxyWK3E74T97v8g.jpg", c: "md:col-span-2" },
  { f: "movel8-AoPerXN2NafwbX9y.PNG", c: "col-span-2 md:col-span-3" },
  ];

function Montagens() {
  return (
    <section id="montagens" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal className="max-w-2xl">
        <Eyebrow>Portfólio</Eyebrow>
        <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Montagens Realizadas</h2>
      </Reveal>
      <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-3 md:gap-4">
        {GALERIA.map((g, i) => (
          <Reveal key={g.f} delay={(i % 3) * 70} className={`group overflow-hidden rounded-2xl bg-muted ${g.c}`}>
            <img src={IMG(g.f, 1000)} alt="Montagem realizada por Thiago" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-4 overflow-hidden rounded-2xl bg-ink">
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/BSdzOOCqLZM"
            title="Thiago Montador de Móveis - YouTube"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Reveal>
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
    window.open(`${WA}?text=${encodeURIComponent(text)}`, "_blank");
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
                <MessageCircle className="size-6" />
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
          <p className="font-display text-xl font-extrabold">Thiago Montador de Móveis Profissional</p>
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
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}
