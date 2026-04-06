const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-primary/10 bg-gradient-to-b from-muted/35 to-background py-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row">
        <span className="flex items-center gap-2.5">
          <img
            src="/lucas-marketing-logo.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 shrink-0 object-contain opacity-90"
          />
          <span>&copy; {new Date().getFullYear()} Lucas Marketing. All rights reserved.</span>
        </span>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
          <a href="#process" className="transition-colors hover:text-primary">
            Process
          </a>
          <a href="mailto:lucasbrandscalesofficial@gmail.com" className="transition-colors hover:text-primary">
            Email
          </a>
          <a
            href="https://instagram.com/lucasmarketing.co"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            @lucasmarketing.co
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
