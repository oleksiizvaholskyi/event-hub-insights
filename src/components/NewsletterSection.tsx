import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6">
            <Mail className="w-8 h-8 text-accent" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Не пропустіть важливе
          </h2>
          
          <p className="text-primary-foreground/70 mb-8">
            Підпишіться на розсилку і отримуйте анонси подій, нові статті та 
            ексклюзивний контент першими.
          </p>

          {submitted ? (
            <div className="bg-accent/20 text-accent rounded-xl p-6 animate-scale-in">
              <p className="font-semibold">Дякуємо за підписку! 🎉</p>
              <p className="text-sm mt-1 text-accent/80">
                Перевірте вашу пошту для підтвердження.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Ваша email адреса"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
                required
              />
              <Button type="submit" variant="accent" size="lg" className="shrink-0">
                Підписатися
                <ArrowRight size={18} />
              </Button>
            </form>
          )}

          <p className="text-xs text-primary-foreground/50 mt-4">
            Без спаму. Відписатися можна в будь-який момент.
          </p>
        </div>
      </div>
    </section>
  );
};
