import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Digital Marketing Summit 2024",
    date: "15 лютого 2024",
    location: "Київ, IQ Business Center",
    format: "Офлайн",
    description: "Найбільша конференція з digital-маркетингу в Україні. Спікери з топових компаній поділяться інсайтами.",
    featured: true,
  },
  {
    id: 2,
    title: "Tech Talks: AI in Business",
    date: "22 лютого 2024",
    location: "Онлайн трансляція",
    format: "Онлайн",
    description: "Як штучний інтелект змінює бізнес-процеси. Практичні кейси впровадження.",
    featured: false,
  },
  {
    id: 3,
    title: "Startup Weekend Kyiv",
    date: "1-3 березня 2024",
    location: "Unit.City, Київ",
    format: "Офлайн",
    description: "54 години для створення стартапу. Менторство, нетворкінг та призи для переможців.",
    featured: false,
  },
];

export const EventsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Майбутні події</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Не пропустіть
            </h2>
          </div>
          <Button variant="ghost" asChild className="text-muted-foreground">
            <Link to="/events">
              Усі події
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <article
              key={event.id}
              className={`group bg-card rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-hover hover:-translate-y-1 ${
                event.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-4">
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

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {event.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {event.description}
              </p>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  {event.location}
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all" asChild>
                <Link to={`/events/${event.id}`}>
                  Детальніше
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
