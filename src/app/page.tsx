import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="font-bold text-3xl">
      Harsh Raghav is a software developer.
      <Link href={"/sign-in"}>
        <Button>Sign-in</Button>
      </Link>
    </div>
  );
}
