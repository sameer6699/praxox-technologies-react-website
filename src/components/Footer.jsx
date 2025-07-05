import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 bg-neutral-950 text-neutral-200 w-full">
      <div className="px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 w-full">
          <div className="flex items-center mb-6 lg:mb-0">
            <img src={logo} alt="Praxox Technologies Logo" className="h-10 w-10 mr-3" />
            <div>
              <span className="text-2xl font-bold text-orange-500">Praxox Technologies</span>
              <div className="text-sm text-neutral-400">Empowering Digital Innovation</div>
            </div>
          </div>
          <div className="text-neutral-400 text-sm text-center lg:text-right">
            <span>Contact: </span>
            <a href="mailto:info@praxox.com" className="underline hover:text-orange-400">info@praxox.com</a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 w-full">
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-orange-400"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-orange-400"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Connect</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-orange-400"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-6 text-center text-neutral-500 text-sm w-full">
          &copy; {new Date().getFullYear()} Praxox Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
