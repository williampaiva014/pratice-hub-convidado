import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-20 border-t border-border/30 bg-card/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center space-y-4">
        <p className="text-muted-foreground text-xs">
          © 2026 Prátice Hub — Todos os direitos reservados.
        </p>
        <div className="flex items-center justify-center gap-4 text-xs">
          <Link
            to="/termos-de-uso"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Termos de Uso
          </Link>
          <span className="text-muted-foreground/30">|</span>
          <Link
            to="/politica-de-privacidade"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
