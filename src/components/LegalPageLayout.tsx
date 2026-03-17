import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo-prata.png";
import Footer from "./Footer";

interface LegalPageLayoutProps {
  children: React.ReactNode;
}

const LegalPageLayout = ({ children }: LegalPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b border-border/20 bg-background/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="shrink-0">
            <img src={logo} alt="Prátice Hub" className="h-8 md:h-10" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs font-medium border border-primary/20"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar ao formulário
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPageLayout;
