import { Instagram } from "lucide-react";
import { SITE } from "@/config/site";

export function Footer() {
  const { brand, developer, copyrightYear } = SITE;

  return (
    <footer className="border-t border-gold/20 bg-black px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {copyrightYear} {brand.fullName}
            </p>
            <p className="mt-1 text-sm text-gray-500">Todos os direitos reservados</p>
          </div>

          <p className="flex items-center gap-3 text-gray-400">
            <span>Desenvolvido por</span>
            <a
              href={developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gold transition-colors hover:text-gold-light"
            >
              <span className="group-hover:underline">{developer.name}</span>
              <Instagram className="h-4 w-4" aria-hidden />
            </a>
          </p>
        </div>

        <div className="mt-8 border-t border-gold/10 pt-8 text-center">
          <div className="mx-auto h-0.5 w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </div>
    </footer>
  );
}
