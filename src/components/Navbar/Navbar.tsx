import Link from "next/link";
import MaxWidthWrapper from "../Container/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import { UserButton, auth } from "@clerk/nextjs";
// import UserAccountNav from "./UserAccountNav";
// import MobileNav from "./MobileNav";
import { buttonVariants } from "../ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const { userId } = auth();
  const isAuth = !!userId;

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b  backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b ">
          <Link href="/" className="flex z-40 font-semibold">
            <span>infinidocs.</span>
          </Link>

          <MobileNav isAuth={!!isAuth} />

          <div className="hidden items-center space-x-4 sm:flex">
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
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Dashboard
                </Link>

                {/* <UserAccountNav
                  name={
                    !isAuth.given_name || !isAuth.family_name
                      ? "Your Account"
                      : `${user.given_name} ${user.family_name}`
                  }
                  email={user.email ?? ""}
                  imageUrl={user.picture ?? ""}
                /> */}
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
