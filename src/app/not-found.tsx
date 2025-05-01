import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center w-full">
        <Image src="/404.svg" alt="Page not found" width={540} height={540} />
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl font-semibold">
            😵‍💫 404 – Well, This Is Awkward
          </h3>
          <p className="my-3 text-foreground/70 text-sm max-w-[380px] mx-auto">
            {`Looks like you took a wrong turn on the internet.
This page has disappeared like your socks in the laundry.`}
          </p>
          <Link href="/">
            <Button className="bg-custom-yellow hover:bg-custom-yellow cursor-pointer">
              Go Back Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
