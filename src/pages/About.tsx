import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Якість контенту",
    description: "Ми ретельно відбираємо теми та спікерів, щоб кожна подія та стаття приносила реальну цінність.",
  },
  {
    icon: Users,
    title: "Спільнота",
    description: "Ми будуємо простір для нетворкінгу та обміну досвідом між професіоналами різних галузей.",
  },
  {
    icon: Lightbulb,
    title: "Інновації",
    description: "Ми слідкуємо за трендами та швидко адаптуємось до змін, впроваджуючи нові формати та технології.",
  },
  {
    icon: Heart,
    title: "Відкритість",
    description: "Ми цінуємо чесність та прозорість у комунікації з нашою аудиторією та партнерами.",
  },
];

const team = [
  {
    name: "Олена Коваленко",
    role: "Засновниця та CEO",
    bio: "10+ років досвіду в digital-маркетингу. Організатор 100+ подій.",
  },
  {
    name: "Андрій Петренко",
    role: "Head of Content",
    bio: "Журналіст та редактор з досвідом роботи в провідних українських медіа.",
  },
  {
    name: "Марія Шевченко",
    role: "Event Manager",
    bio: "Спеціаліст з організації конференцій та корпоративних заходів.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="max-w-3xl">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Про нас</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Створюємо простір для розвитку та нетворкінгу
              </h1>
              <p className="text-lg text-muted-foreground">
                Ми — команда ентузіастів, які вірять у силу якісного контенту та живих зустрічей. 
                Наша місія — обʼєднувати людей навколо подій та освітнього контенту.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Наша історія</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Все почалось у 2020 році з невеликих онлайн-мітапів для маркетологів. 
                    Ми помітили, що люди прагнуть не просто споживати контент, а й обʼєднуватись 
                    у спільноти за інтересами.
                  </p>
                  <p>
                    За 4 роки ми провели понад 50 подій різного формату — від камерних 
                    воркшопів до масштабних конференцій. Наш блог читають тисячі 
                    професіоналів щомісяця.
                  </p>
                  <p>
                    Сьогодні ми продовжуємо рости та експериментувати з форматами, 
                    залишаючись вірними головному принципу — якість понад кількість.
                  </p>
                </div>
              </div>
              <div className="bg-secondary rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-accent">50+</div>
                    <div className="text-muted-foreground mt-1">Проведених подій</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent">5K+</div>
                    <div className="text-muted-foreground mt-1">Учасників</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent">100+</div>
                    <div className="text-muted-foreground mt-1">Статей у блозі</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent">4</div>
                    <div className="text-muted-foreground mt-1">Роки досвіду</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Цінності</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Чим ми керуємось
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-card transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-4">
                    <value.icon size={28} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Команда</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Люди, що стоять за проєктом
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 mx-auto mb-4" />
                  <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                  <p className="text-accent text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готові долучитись?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Приєднуйтесь до нашої спільноти — відвідуйте події, читайте блог 
              та будьте в курсі всіх новин.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/events">
                  Переглянути події
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">
                  Звʼязатись з нами
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
