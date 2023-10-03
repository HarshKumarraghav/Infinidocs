import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import { buttonVariants } from "../ui/button";
import MobileNav from "./MobileNav";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import { getUserSubscriptionPlan } from "@/lib/stripe";

const Navbar = async () => {
  const { userId } = auth();
  const isAuth = !!userId;
  const subscriptionPlan = await getUserSubscriptionPlan();

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b  backdrop-blur-lg transition-all">
      <div className="md:px-10 px-2.5">
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
                    size: "sm",
                  })}
                >
                  Sign in
                </Link>
              </>
            ) : (
              <>
                {subscriptionPlan.isSubscribed === true ? (
                  <Link
                    href="/dashboard/billing"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    Manage Subscription
                  </Link>
                ) : (
                  <Link
                    href="/pricing"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    Pricing
                  </Link>
                )}
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "default",
                    size: "sm",
                  })}
                >
                  Dashboard
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            )}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
