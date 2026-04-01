import { Globe } from "lucide-react";

const footerLinks = {
  Products: [
    { label: "GoRetail", href: "/goretail" },
    { label: "GoWholesale", href: "/gowholesale" },
  ],
  Company: ["About", "Careers", "Blog"],
  Support: ["Contact", "Documentation"],
  Legal: ["Privacy", "Terms"],
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-primary py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-semibold tracking-tight">GOCO</span>
            <p className="mt-4 text-sm text-primary/50 max-w-xs">
              Building the operating system for offline commerce.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium tracking-widest uppercase text-primary/40 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  const isObject = typeof link === "object";
                  const label = isObject ? link.label : link;
                  const href = isObject ? link.href : "#";
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-sm text-primary/60 hover:text-primary transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary/40">
            &copy; 2026 GOCO. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary/40 hover:text-primary transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
