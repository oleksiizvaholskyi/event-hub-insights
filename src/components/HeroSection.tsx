import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-[90vh] flex items-center pt-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 animate-fade-up">
            🚀 Наступна подія вже скоро
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Створюємо події,
            <br />
            <span className="text-gradient">що надихають</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Інформаційний проєкт, що об'єднує людей навколо подій, освітнього 
            контенту та розвитку спільноти.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/events">
                Переглянути події
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">
                Читати блог
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Подій</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">5K+</div>
              <div className="text-sm text-muted-foreground">Учасників</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">Статей</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
