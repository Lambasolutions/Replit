export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Lambana Solutions</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for comprehensive business solutions across multiple industries. We combine expertise, innovation, and dedication to deliver excellence in every service we provide.
            </p>
            <div className="flex space-x-4">
              <i className="fab fa-linkedin text-2xl hover:text-primary cursor-pointer transition duration-300"></i>
              <i className="fab fa-twitter text-2xl hover:text-primary cursor-pointer transition duration-300"></i>
              <i className="fab fa-facebook text-2xl hover:text-primary cursor-pointer transition duration-300"></i>
              <i className="fab fa-instagram text-2xl hover:text-primary cursor-pointer transition duration-300"></i>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition duration-300">Government Services</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Financial Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Legal Services</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">IT & BPO</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Food Products</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Textiles</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Import & Export</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-primary transition duration-300">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition duration-300">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition duration-300">Contact</a></li>
              <li><a href="#payment" className="hover:text-primary transition duration-300">Payment Portal</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Lambana Solutions. All rights reserved. | Contact: +91 99860 00219 | d.phani.kumar@lambanasolutions.com
          </p>
        </div>
      </div>
    </footer>
  );
}
