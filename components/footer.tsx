import Link from "next/link";
import { UmbrellaIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <UmbrellaIcon className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-lg text-gray-900">SmartBrolly</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Making urban mobility comfortable, one umbrella at a time.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/map" className="text-gray-600 hover:text-gray-900">Find Umbrellas</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link href="/sustainability" className="text-gray-600 hover:text-gray-900">Sustainability</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} SmartBrolly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}