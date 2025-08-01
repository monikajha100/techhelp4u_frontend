
    export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden py-16 bg-white dark:bg-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Logo & Social Links */}
          <div className="w-full sm:w-6/2 lg:w-4/12 px-4 mb-10 lg:mb-0">
            <a href="/" className="inline-flex items-center mb-4">
              <img src="/techhelp4u.jpg" alt="Logo" className="w-20 h-20 mr-3 hidden dark:block" />
              <img src="/techhelp4u.jpg" alt="Logo" className="w-20 h-20 mr-3 dark:hidden" />
              <span className="text-3xl font-bold text-blue-600">
                Tech<span className="text-gray-900 dark:text-white">Help4U</span>
              </span>
            </a>

            {/* Social Icons */}
            <div className="flex gap-6 mt-9">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 text-2xl">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 text-2xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12 px-4 mb-10">
            <h2 className="text-lg font-bold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-600">Homepage</a></li>
              <li><a href="/Blog" className="hover:text-blue-600">Blog</a></li>
              <li><a href="/About" className="hover:text-blue-600">About</a></li>
              <li><a href="/Contact" className="hover:text-blue-600">Contact</a></li>
              <li><a href="/Team" className="hover:text-blue-600">Team</a></li>
            </ul>
          </div>

          {/* Terms */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12 px-4 mb-10">
            <h2 className="text-lg font-bold mb-4">Terms</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">TOS</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Refund Policy</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-4/12 px-4 mb-10">
            <h2 className="text-lg font-bold mb-4">Support & Help</h2>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:text-blue-600">Open Support Ticket</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Use</a></li>
              <li><a href="/About" className="hover:text-blue-600">About</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

        {/* Footer Bottom */}
        <p className="text-center text-sm text-gray-500 dark:text-white">
          © {new Date().getFullYear()} TechHelp4U. Built with ❤️ by{" "}
          <a className="hover:text-blue-600" href="https://uideck.com" target="_blank" rel="noopener noreferrer">UIdeck</a>.
        </p>
      </div>
    </footer>
  );
}
