import { Facebook, Instagram } from "lucide-react";

export default function FinalFooter() {
  return (
    <div className="px-4 py-6 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-400 sm:text-center">
        © 2024 <a>RiceAndBeans™</a>. All Rights Reserved.
      </span>
      <div className="flex mt-4 md:mt-0 space-x-5 rtl:space-x-reverse">
        <a href="#" className="text-gray-400 hover:text-gray-900">
          <Facebook />
          <span className="sr-only">Facebook page</span>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-900">
          <Instagram />
          <span className="sr-only">GitHub account</span>
        </a>
      </div>
    </div>
  );
}
