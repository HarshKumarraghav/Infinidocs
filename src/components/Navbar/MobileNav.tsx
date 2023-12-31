"use client";

import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeSwitcher from "../Theme/ThemeSwitcher";

const MobileNav = ({ isAuth }: { isAuth: boolean }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) toggleOpen();
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  return (
    <div className="sm:hidden">
      <Menu onClick={toggleOpen} className="relative z-50 h-5 w-5 " />

      {isOpen ? (
        <div className="fixed  animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
          <ul className="absolute bg-primary-foreground shadow-xl grid w-full gap-3 px-10 pt-20 pb-8">
            {!isAuth ? (
              <>
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/sign-up")}
                    className="flex items-center w-full font-semibold text-primary"
                    href="/sign-up"
                  >
                    Get started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/sign-up")}
                    className="flex items-center w-full font-semibold"
                    href="/sign-up"
                  >
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/sign-in")}
                    className="flex items-center w-full font-semibold"
                    href="/sign-in"
                  >
                    Sign in
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/dashboard")}
                    className="flex items-center w-full font-semibold"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => closeOnCurrent("/pricing")}
                    className="flex items-center w-full font-semibold"
                    href="/dashboard/billing"
                  >
                    Manage Subscription
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => closeOnCurrent("/pricing")}
                    className="flex items-center w-full font-semibold"
                    href="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
              </>
            )}
            <ThemeSwitcher />
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
