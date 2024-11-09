import FinalFooter from "./FinalFooter";
import Divider from "@components/Divider";

export default function Footer() {
  return (
    <footer>
      <Divider />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 py-6">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
            Empresa
          </h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-4">
              <a href="#" className=" hover:underline">
                Sobre
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
            Centro de ajuda
          </h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Discord
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Entre em contato
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
            Legal
          </h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Política de Privacidade
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Licença
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Termos &amp; Condições
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
            Download
          </h2>
          <ul className="text-gray-500 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                iOS
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Android
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Divider />
      <FinalFooter />
    </footer>
  );
}
