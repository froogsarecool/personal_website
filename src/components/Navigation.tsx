export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-xl">
              Clayton Mo
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 