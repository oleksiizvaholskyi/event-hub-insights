import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/", label: "Головна" },
    { href: "/events", label: "Події" },
    { href: "/blog", label: "Блог" },
    { href: "/about", label: "Про нас" },
  ],
  social: [
    { href: "#", label: "Instagram" },
    { href: "#", label: "Facebook" },
    { href: "#", label: "Telegram" },
    { href: "#", label: "LinkedIn" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">Платформа</h3>
            <p className="text-primary-foreground/70 max-w-sm mb-6">
              Інформаційний проєкт, що об'єднує людей навколо подій та створює 
              цікавий контент для розвитку спільноти.
            </p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <a href="mailto:hello@platform.ua" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail size={16} />
                hello@platform.ua
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Київ, Україна
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold mb-4">Навігація</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4">Соцмережі</h4>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 Платформа. Усі права захищено.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Політика конфіденційності
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Умови використання
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
