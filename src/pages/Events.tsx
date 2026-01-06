import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Digital Marketing Summit 2024",
    date: "15 лютого 2024",
    time: "10:00 - 18:00",
    location: "Київ, IQ Business Center",
    format: "Офлайн",
    description: "Найбільша конференція з digital-маркетингу в Україні. Спікери з топових компаній поділяться інсайтами про тренди, стратегії та інструменти маркетингу.",
    attendees: 500,
    featured: true,
    agenda: [
      { time: "10:00", title: "Реєстрація та кава" },
      { time: "10:30", title: "Відкриття конференції" },
      { time: "11:00", title: "AI в маркетингу: практичні кейси" },
      { time: "12:30", title: "Обідня перерва та нетворкінг" },
      { time: "14:00", title: "Панельна дискусія: Майбутнє e-commerce" },
      { time: "16:00", title: "Воркшопи (паралельні секції)" },
      { time: "17:30", title: "Закриття та afterparty" },
    ],
  },
  {
    id: 2,
    title: "Tech Talks: AI in Business",
    date: "22 лютого 2024",
    time: "18:00 - 20:00",
    location: "Онлайн трансляція",
    format: "Онлайн",
    description: "Як штучний інтелект змінює бізнес-процеси. Практичні кейси впровадження AI в різних індустріях.",
    attendees: 1000,
    featured: false,
    agenda: [
      { time: "18:00", title: "Вступ та представлення спікерів" },
      { time: "18:15", title: "AI для автоматизації процесів" },
      { time: "19:00", title: "Кейс-стаді: ChatGPT в customer service" },
      { time: "19:45", title: "Q&A сесія" },
    ],
  },
  {
    id: 3,
    title: "Startup Weekend Kyiv",
    date: "1-3 березня 2024",
    time: "Пʼятниця 18:00 - Неділя 21:00",
    location: "Unit.City, Київ",
    format: "Офлайн",
    description: "54 години для створення стартапу. Менторство, нетворкінг та призи для переможців.",
    attendees: 150,
    featured: false,
    agenda: [
      { time: "Пʼятниця", title: "Пітчинг ідей та формування команд" },
      { time: "Субота", title: "Робота над проєктами + менторські сесії" },
      { time: "Неділя", title: "Фінальні пітчі та нагородження" },
    ],
  },
  {
    id: 4,
    title: "Product Management Meetup",
    date: "10 березня 2024",
    time: "19:00 - 21:00",
    location: "Coworking Platforma, Львів",
    format: "Офлайн",
    description: "Неформальна зустріч product-менеджерів. Обговорення актуальних викликів, обмін досвідом.",
    attendees: 50,
    featured: false,
    agenda: [
      { time: "19:00", title: "Знайомство та вступ" },
      { time: "19:30", title: "Доповідь: Метрики, що важливі" },
      { time: "20:15", title: "Групові дискусії" },
      { time: "20:45", title: "Нетворкінг" },
    ],
  },
];

const pastEvents = [
  { id: 101, title: "Tech Conference 2023", date: "15 грудня 2023" },
  { id: 102, title: "Marketing Workshop", date: "1 грудня 2023" },
  { id: 103, title: "Design Meetup Kyiv", date: "20 листопада 2023" },
];

const Events = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="hero-gradient py-20">
          <div className="container">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Розклад подій</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Майбутні події
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Конференції, мітапи, воркшопи та інші заходи. Приєднуйтесь офлайн або онлайн.
            </p>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16">
          <div className="container">
            <div className="space-y-8">
              {events.map((event) => (
                <article
                  key={event.id}
                  className="group bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-hover"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Main Info */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.format === "Онлайн" 
                              ? "bg-accent/10 text-accent" 
                              : "bg-primary/10 text-primary"
                          }`}>
                            {event.format}
                          </span>
                          {event.featured && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                              Featured
                            </span>
                          )}
                        </div>

                        <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                          {event.title}
                        </h2>

                        <p className="text-muted-foreground mb-6">
                          {event.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users size={16} />
                            {event.attendees}+ учасників
                          </div>
                        </div>
                      </div>

                      {/* Agenda Preview */}
                      <div className="lg:w-80 bg-secondary rounded-xl p-5">
                        <h3 className="font-semibold text-foreground mb-3">Програма</h3>
                        <div className="space-y-2">
                          {event.agenda.slice(0, 4).map((item, i) => (
                            <div key={i} className="flex gap-3 text-sm">
                              <span className="text-muted-foreground w-16 shrink-0">{item.time}</span>
                              <span className="text-foreground">{item.title}</span>
                            </div>
                          ))}
                          {event.agenda.length > 4 && (
                            <p className="text-xs text-muted-foreground">
                              +{event.agenda.length - 4} пунктів...
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-border">
                      <Button variant="accent" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Придбати квитки
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to={`/events/${event.id}`}>
                          Детальніше про подію
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <h2 className="text-2xl font-bold text-foreground mb-8">Архів подій</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-soft transition-shadow"
                >
                  <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
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

export default Events;
