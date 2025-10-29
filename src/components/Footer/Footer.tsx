import {
  Globe,
  Linkedin,
  LocateFixedIcon,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary/5 mt-10 px-4 md:px-0">
        <div className=" px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="w-full md:w-1/3">
              <h1 className="text-2xl  flex gap-x-2   mb-2  font-main font-semi-bold items-center cursor-pointer">
                <Image
                  src="/logo/logo.png"
                  width={40}
                  height={40}
                  className="w-10 h-10  rounded-full"
                  alt=""
                />
                Infinidocs
              </h1>
              <p className="text-sm leading-relaxed">
                Elevate Your Documents, Elevate Your Productivity.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <ul className="text-sm md:text-base leading-relaxed">
                {/*<li className="flex items-center mb-2  text-sm">
                  <Phone className="mr-2  text-sm" />
                  +91 7078218794
                </li>
                <li className="flex items-center mb-2  text-sm">
                  <Mail className="mr-2  text-sm" />
                  raghavharsh068@gmail.com
                </li>*/}
                <li className="flex items-center  text-sm">
                  <LocateFixedIcon className="mr-2  text-sm" />
                  Gautam Buddha Nagar, Uttar Pradesh, India
                </li>
              </ul>
            </div>
            {/*<div className="w-full md:w-1/3">
              <h2 className="text-lg font-semibold mb-4">Socials</h2>
              <div className="flex gap-4">
                <Link
                  className="cursor-pointer"
                  href="https://twitter.com/_Harsh_raghav_"
                  target="_blank"
                >
                  <Twitter />
                </Link>
                <Link
                  href="https://harshraghav.tech"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Globe />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/harsh-kumar-raghav-7285311b9/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <Linkedin />
                </Link>
              </div>
            </div>*/}
          </div>
        </div>
      </footer>
      <div className="w-full h-10 flex justify-center items-center bg-primary/10 shadow-light-shadow text-center">
        <p className="text-sm ">
          &copy; 2025 Infinidocs. All Rights Reserved by Infinidocs Software Pvt
          Ltd
        </p>
      </div>
    </>
  );
};

export default Footer;
