import logoIcon from "../../assets/images/GrihamateICON-Grey.svg";
import wordmark from "../../assets/images/GrihamateWordmark-Grey.svg";

function Footer() {
  return (
    <footer className="bg-[#2B3A67] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3">
              <img src={logoIcon} 
              alt="" 
              className="h-10 w-10" />

              <img src={wordmark} 
              alt="Grihamate" 
              className="h-7 w-auto" />
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/70 sm:text-base">
              Your trusted property partner for rent management, sale, and
              resale. We make your real estate journey simpler and more
              hassle-free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FDCB58]">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Home
              </a>

              <a
                href="#properties"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Properties
              </a>

              <a
                href="#why-grihamate"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Why Grihamate
              </a>

              <a
                href="#about"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                About Us
              </a>

              <a
                href="#contact"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FDCB58]">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="tel:+917011769523"
                className="block text-sm leading-6 text-white/70 transition-colors hover:text-white"
              >
                +91 7011769523
              </a>

              <a
                href="mailto:grihamate@gmail.com"
                className="block break-all text-sm leading-6 text-white/70 transition-colors hover:text-white"
              >
                grihamate@gmail.com
              </a>

              <p className="text-sm leading-6 text-white/70">
                Noida
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Grihamate. All Rights Reserved.</p>

            <p>Your trusted property partner.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
