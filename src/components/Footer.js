export default function Footer() {
  return (
    <footer className="w-full bg-[#FFC69D] text-gray-800 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 text-center sm:text-left">
          
          <div>
            <h3 className="text-xl font-bold text-black">Casting Flow</h3>
            <p className="text-gray-800 text-sm mt-2">
              Agencia de casting & management digital.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/models" className="hover:text-white transition">Modelos</a></li>
              <li><a href="/castings" className="hover:text-white transition">Castings</a></li>
              <li><a href="/about" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Redes</h4>
            <div className="flex justify-center sm:justify-start space-x-5 text-xl">
              <a href="#" className="hover:text-white transition"><i className="ri-instagram-line"></i></a>
              <a href="#" className="hover:text-white transition"><i className="ri-tiktok-line"></i></a>
              <a href="#" className="hover:text-white transition"><i className="ri-mail-line"></i></a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Casting Flow — Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
