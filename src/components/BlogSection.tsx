import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "10 трендів digital-маркетингу на 2024 рік",
    excerpt: "Від AI-персоналізації до voice search — що варто впроваджувати вже сьогодні.",
    category: "Маркетинг",
    readTime: "5 хв",
    date: "10 січня 2024",
  },
  {
    id: 2,
    title: "Як побудувати спільноту навколо бренду",
    excerpt: "Практичний гайд з community-менеджменту для стартапів та малого бізнесу.",
    category: "Спільнота",
    readTime: "8 хв",
    date: "5 січня 2024",
  },
  {
    id: 3,
    title: "Огляд найкращих подій 2023 року",
    excerpt: "Підсумовуємо рік: головні конференції, мітапи та воркшопи в Україні.",
    category: "Події",
    readTime: "6 хв",
    date: "28 грудня 2023",
  },
];

export const BlogSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Блог</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Останні публікації
            </h2>
          </div>
          <Button variant="ghost" asChild className="text-muted-foreground">
            <Link to="/blog">
              Усі статті
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
