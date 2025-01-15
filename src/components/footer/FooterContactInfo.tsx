import { Mail, MapPin, Phone } from "lucide-react";

export const FooterContactInfo = () => (
  <div className="space-y-4 text-gray-300">
    <div className="flex items-start gap-3">
      <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
      <p>
        5328 Lanier Islands Pkwy., Ste. 102
        <br />
        Buford, GA 30518
      </p>
    </div>
    <div className="flex items-center gap-3">
      <Phone className="h-5 w-5 flex-shrink-0" />
      <a href="tel:+14046180500" className="hover:text-white transition-colors">
        (404) 618-0500
      </a>
    </div>
    <div className="flex items-center gap-3">
      <Mail className="h-5 w-5 flex-shrink-0" />
      <a href="mailto:info@aibookkeeping.com" className="hover:text-white transition-colors">
        info@aibookkeeping.com
      </a>
    </div>
  </div>
);