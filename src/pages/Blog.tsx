import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const categories = ["Усі", "Маркетинг", "Спільнота", "Події", "Технології", "Освіта"];

const posts = [
  {
    id: 1,
    title: "10 трендів digital-маркетингу на 2024 рік",
    excerpt: "Від AI-персоналізації до voice search — що варто впроваджувати вже сьогодні для зростання вашого бізнесу.",
    category: "Маркетинг",
    readTime: "5 хв",
    date: "10 січня 2024",
    featured: true,
  },
  {
    id: 2,
    title: "Як побудувати спільноту навколо бренду",
    excerpt: "Практичний гайд з community-менеджменту для стартапів та малого бізнесу. Покрокова інструкція.",
    category: "Спільнота",
    readTime: "8 хв",
    date: "5 січня 2024",
    featured: false,
  },
  {
    id: 3,
    title: "Огляд найкращих подій 2023 року",
    excerpt: "Підсумовуємо рік: головні конференції, мітапи та воркшопи в Україні що залишили слід.",
    category: "Події",
    readTime: "6 хв",
    date: "28 грудня 2023",
    featured: false,
  },
  {
    id: 4,
    title: "Штучний інтелект у повсякденній роботі",
    excerpt: "Як використовувати ChatGPT, Claude та інші AI-інструменти для підвищення продуктивності.",
    category: "Технології",
    readTime: "10 хв",
    date: "20 грудня 2023",
    featured: false,
  },
  {
    id: 5,
    title: "Найкращі онлайн-курси для маркетологів",
    excerpt: "Підбірка безкоштовних та платних курсів з digital-маркетингу, SMM та контент-стратегії.",
    category: "Освіта",
    readTime: "7 хв",
    date: "15 грудня 2023",
    featured: false,
  },
  {
    id: 6,
    title: "Як організувати успішний мітап",
    excerpt: "Від ідеї до реалізації: чекліст для організаторів подій будь-якого масштабу.",
    category: "Події",
    readTime: "9 хв",
    date: "10 грудня 2023",
    featured: false,
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Усі");

  const filteredPosts = activeCategory === "Усі" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const featuredPost = posts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="hero-gradient py-20">
          <div className="container">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Блог</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Статті та інсайти
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Корисний контент про маркетинг, технології, події та розвиток спільноти.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-border">
          <div className="container">
            <div className="flex gap-2 overflow-x-auto py-4 -mx-4 px-4 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && activeCategory === "Усі" && (
          <section className="py-12">
            <div className="container">
              <article className="group bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-hover">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium w-fit mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      <Link to={`/blog/${featuredPost.id}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span>{featuredPost.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button variant="accent" className="w-fit" asChild>
                      <Link to={`/blog/${featuredPost.id}`}>
                        Читати статтю
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
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

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Немає статей у цій категорії.
                </p>
              </div>
            )}
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
