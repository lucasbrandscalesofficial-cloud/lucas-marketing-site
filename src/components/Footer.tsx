const Footer = () => {
  return (
    <footer className="border-t border-border py-6 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Lucas Marketing. All rights reserved.</span>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          <a href="mailto:lucasbrandscalesofficial@gmail.com" className="hover:text-foreground transition-colors">Email</a>
          <a href="https://instagram.com/lucasmarketing.co" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">@lucasmarketing.co</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
