import MaxWidthWrapper from "@/components/Container/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import ImageSwitcher from "@/components/Theme/ImageSwitcher";
import Footer from "@/components/Footer/Footer";
export default async function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <Badge className="mx-auto mb-4 flex max-w-fit items-center  justify-center space-x-2 overflow-hidden rounded-full border  px-7 py-2 shadow-md backdrop-blur transition-all">
          <p className="text-sm font-semibold text-white">
            infinidocs. is now live! 🚀
          </p>
        </Badge>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Elevate Your <span className="text-primary">documents</span> Elevate
          Your Productivity.
        </h1>
        <p className="mt-5 max-w-prose dark:text-gray-400 text-gray-600  sm:text-lg">
          Infinidocs is a platform that allows you to chat with your documents.
          <br /> It&apos;s that simple.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/sign-up"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] bg-gradient-to-r from-purple-200 via-purple-600 to-purple-800"
            />
          </div>
        </div>

        <div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <Card className="bg-primary-foreground -m-2 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-16 p-4 md:p-8">
                <ImageSwitcher
                  url="/preview-app"
                  width={1364}
                  height={866}
                  quality={100}
                />
              </Card>
            </div>
          </div>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] bg-gradient-to-r from-purple-200 via-purple-600 to-purple-800"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Feature section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl ">
              Start chatting in minutes
            </h2>
            <p className="mt-4 text-lg dark:text-gray-400 text-gray-600">
              Chatting to your PDF files has never been easier than with
              Infinidocs.
            </p>
          </div>
        </div>
        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 p-4">
          <li className="md:flex-1 bg-primary-foreground p-8 rounded-lg shadow-lg border">
            <span className="text-sm font-medium text-primary">Step 1</span>
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-primary underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className="md:flex-1 bg-primary-foreground p-8 rounded-lg shadow-lg border">
            <span className="text-sm font-medium text-primary">Step 2</span>
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold">
                Upload your PDF file
              </span>
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                We&apos;ll process your file and make it ready for you to chat
                with.
              </span>
            </div>
          </li>
          <li className="md:flex-1 bg-primary-foreground p-8 rounded-lg shadow-lg border">
            <span className="text-sm font-medium text-primary">Step 3</span>
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold">
                Start asking questions
              </span>
              <span className="mt-2 dark:text-gray-400 text-gray-600">
                It&apos;s that simple. Try out Infinidocs today - it really
                takes less than a minute.
              </span>
            </div>
          </li>
        </ol>

        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] bg-gradient-to-r from-purple-200 via-purple-600 to-purple-800"
            />
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <Card className="bg-primary-foreground -m-2 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-16 p-4 md:p-8">
              <ImageSwitcher
                url="/preview-upload"
                width={1419}
                height={732}
                quality={100}
              />
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
