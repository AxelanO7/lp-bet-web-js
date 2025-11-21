export const Footer = () => {
  return (
    <footer className="bg-black py-8 text-sm text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p>© {new Date().getFullYear()} Balieternatours. Crafted for discerning travelers.</p>
        <div className="flex gap-4">
          <a href="#tours" className="hover:text-white">Tours</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};
