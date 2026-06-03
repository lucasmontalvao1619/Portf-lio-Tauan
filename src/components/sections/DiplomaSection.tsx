import { Award, ExternalLink } from "lucide-react";
import { DIPLOMA } from "@/data/diploma";
import { IMAGES } from "@/config/images";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/ui/GoldRule";
import { SectionHeading } from "@/components/ui/SectionHeading";
import "./diploma-section.css";

export function DiplomaSection() {
  return (
    <section id="diploma" className="scroll-mt-20 bg-surface px-4 py-24">
      <FadeIn className="mx-auto max-w-7xl">
        <header className="mb-14 text-center">
          <SectionHeading className="mb-4 text-4xl md:text-5xl">
            Formação <span className="text-gold">Acadêmica</span>
          </SectionHeading>
          <GoldRule className="mb-6" />
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Graduação em Educação Física — credencial oficial registrada e validada
          </p>
        </header>

        <div className="diploma-frame">
          <div className="diploma-frame__inner">
            <div className="diploma-frame__header">
              <div className="diploma-frame__seal" aria-hidden>
                <Award className="h-6 w-6" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#8a7a50]">
                República Federativa do Brasil
              </p>
              <h3 className="mt-2 font-serif text-2xl text-[#1a1508] md:text-3xl">
                {DIPLOMA.institution}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-[#6b5f45]">
                Diploma
              </p>
              <p className="mt-4 text-base text-[#3d3520] md:text-lg">
                Confere o grau de{" "}
                <strong className="font-semibold text-[#1a1508]">{DIPLOMA.degree}</strong>
              </p>
              <p className="mt-2 font-serif text-xl text-[#1a1508] md:text-2xl">
                {DIPLOMA.graduate}
              </p>
              <p className="mt-4 text-sm text-[#5c5346]">
                Conclusão em {DIPLOMA.conclusionDate} · Colação em {DIPLOMA.graduationDate}
                <br />
                {DIPLOMA.location}, {DIPLOMA.issueDate}
              </p>
            </div>

            <div className="diploma-document">
              <img
                src={IMAGES.diploma}
                alt="Diploma de Bacharel em Educação Física"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Código de validação:{" "}
          <span className="break-all font-mono text-gray-400">{DIPLOMA.validationCode}</span>
          <br />
          <a
            href={DIPLOMA.validationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-gold transition-colors hover:text-gold-light"
          >
            Validar em diplomas.unit.br
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </p>
      </FadeIn>
    </section>
  );
}
