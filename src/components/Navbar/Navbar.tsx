"use client";
import Link from "next/link";
import MaxWidthWrapper from "../Container/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import { UserButton, useAuth } from "@clerk/nextjs";
// import UserAccountNav from "./UserAccountNav";
// import MobileNav from "./MobileNav";
import { buttonVariants } from "../ui/button";
import MobileNav from "./MobileNav";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { userId } = useAuth();
  const isAuth = !!userId;
  const pathname = usePathname();
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b  backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b ">
          <Link href="/" className="flex z-40 font-semibold">
            <span>infinidocs.</span>
          </Link>

          <MobileNav isAuth={!!isAuth} />

          <div className="hidden items-center space-x-4 sm:flex">
            <ThemeSwitcher />
            {!isAuth ? (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Sign in
                </Link>
                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Get started <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                {pathname === "/" ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      variant: "default",
                      size: "sm",
                    })}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <UserButton afterSignOutUrl="/" />
                )}
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
