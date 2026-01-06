import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { name: "Instagram", url: "#", handle: "@platform.ua" },
  { name: "Facebook", url: "#", handle: "/platform.ua" },
  { name: "Telegram", url: "#", handle: "@platform_ua" },
  { name: "LinkedIn", url: "#", handle: "/company/platform-ua" },
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="hero-gradient py-20">
          <div className="container">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Контакти</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Звʼяжіться з нами
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Маєте питання, пропозицію або хочете стати партнером? Ми завжди відкриті до спілкування.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Напишіть нам
                </h2>

                {submitted ? (
                  <div className="bg-accent/10 text-accent rounded-2xl p-8 animate-scale-in">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Повідомлення надіслано!</h3>
                      <p className="text-accent/80">
                        Дякуємо за звернення. Ми відповімо протягом 24 годин.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Ваше імʼя
                        </label>
                        <Input
                          placeholder="Олена Коваленко"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="olena@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Тема
                      </label>
                      <Input
                        placeholder="Партнерство / Запитання / Інше"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Повідомлення
                      </label>
                      <Textarea
                        placeholder="Ваше повідомлення..."
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" variant="accent" size="lg">
                      Надіслати повідомлення
                      <Send size={18} />
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="lg:pl-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Контактна інформація
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a href="mailto:hello@platform.ua" className="text-muted-foreground hover:text-accent transition-colors">
                        hello@platform.ua
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Локація</h3>
                      <p className="text-muted-foreground">
                        Київ, Україна
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-4">Соцмережі</h3>
                  <div className="space-y-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="flex items-center justify-between p-4 rounded-xl bg-secondary hover:bg-muted transition-colors group"
                      >
                        <span className="font-medium text-foreground">{social.name}</span>
                        <span className="text-muted-foreground group-hover:text-accent transition-colors">
                          {social.handle}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Часті запитання
            </h2>

            <div className="max-w-2xl mx-auto space-y-4">
              {[
                {
                  q: "Як стати спікером на ваших подіях?",
                  a: "Надішліть нам email з темою виступу та коротким описом. Ми розглянемо вашу заявку протягом тижня."
                },
                {
                  q: "Чи можна стати партнером проєкту?",
                  a: "Так! Ми відкриті до різних форматів партнерства — від інформаційної підтримки до спонсорства подій."
                },
                {
                  q: "Як часто проходять офлайн-події?",
                  a: "В середньому 2-3 рази на місяць у Києві. Онлайн-події проводимо частіше — слідкуйте за анонсами."
                },
              ].map((faq, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
