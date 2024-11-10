import clsx from "clsx";

function PageTitle() {
  return (
    <a href="/" className="flex items-center gap-3">
      <img
        src="rice-and-beans-logo.svg"
        className="h-12"
        alt="rice and beans Logo"
      />
      <span className="text-base sm:text-lg md:text-xl text-gray-800 whitespace-nowrap font-medium">
        Rice & Beans
      </span>
    </a>
  );
}

export default function Navbar() {
  return (
    <nav
      className={clsx(
        "fixed z-10 h-nav-height bg-white border-b left-0 top-0 right-0",
        "flex items-center justify-between px-2 md:px-4"
      )}
    >
      <PageTitle />

      <button
        onClick={() =>
          window.open("https://www.admin.riceandbeans.online/sign-up", "_blank")
        }
        className={clsx(
          "bg-red-500 hover:bg-red-700 text-white",
          "text-xs sm:text-base font-medium py-2 px-4 rounded-full",
          "duration-300 hover:scale-105"
        )}
      >
        Cadastre sua Loja
      </button>
    </nav>
  );
}
