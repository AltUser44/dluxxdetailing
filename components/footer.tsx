"use client"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/dluxx-logo.png" 
                alt="DLUXX DETAILING" 
                className="h-16 w-auto brightness-150 contrast-125 drop-shadow-lg"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm">Premium mobile detailing across San Antonio</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#gallery" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/quote" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Quote/Book
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span className="text-primary-foreground/80">(830) 475-5744</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span className="text-primary-foreground/80">dluxxdetailing.sa@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span className="text-primary-foreground/80">San Antonio & Surrounding Areas</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-primary-foreground/80">Monday - Friday</span>
                <span className="text-primary-foreground/80">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-primary-foreground/80">Saturday</span>
                <span className="text-primary-foreground/80">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-primary-foreground/80">Sunday</span>
                <span className="text-primary-foreground/80">Closed</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61587710151550"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all overflow-hidden"
              >
                <img src="/facebook.png" alt="Facebook" className="w-6 h-6 object-contain" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all overflow-hidden"
              >
                <img src="/instagram.png" alt="Instagram" className="w-6 h-6 object-contain" />
              </a>
              <a
                href="https://www.tiktok.com/@raynemaxwell22?_r=1&_t=ZP-93jauyGidDy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all overflow-hidden"
              >
                <img src="/tiktok.png" alt="TikTok" className="w-6 h-6 object-contain" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; 2026 DLUXX DETAILING. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="/about" className="hover:text-accent transition-colors">
                About
              </a>
              <span>|</span>
              <p>Licensed & Insured | Premium Mobile Detailing San Antonio TX</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
