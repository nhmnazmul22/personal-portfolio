"use client";

import { action } from "@/actions/contactFormAction";
import PageHeading from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { StateType } from "@/types";
import Link from "next/link";
import { useActionState } from "react";

const initialState: StateType = {
  successful: true,
  error: false,
  errorMsg: "",
};

const ContactPage = () => {
  const [, formAction] = useActionState(action, initialState);

  return (
    <section className="container py-5">
      <div className="p-5">
        <PageHeading
          title="Contact Me"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat provident eveniet delectus culpa nisi!"
        />
        <form
          action={formAction}
          className="mt-5 flex flex-col gap-5 items-center "
        >
          <div className="grid w-full max-w-lg  items-center gap-1.5">
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              type="text"
              name="fullName"
              id="fullname"
              placeholder="John doe"
            />
          </div>
          <div className="grid w-full max-w-lg  items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="grid w-full max-w-lg  items-center gap-1.5">
            <Label htmlFor="number">Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              id="number"
              placeholder="Phone Number"
            />
          </div>
          <div className="grid w-full max-w-lg  items-center gap-1.5">
            <Label htmlFor="number">Service</Label>
            <Select name="service">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Services" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Frontend">Frontend</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="Fullstack">Fullstack</SelectItem>
                <SelectItem value="Maintenance and Support">
                  Maintenance and Support
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-lg  items-center gap-1.5">
            <Label htmlFor="number">Message</Label>
            <Textarea
              id="number"
              name="message"
              placeholder="Enter Message"
              className="min-h-40"
            />
          </div>
          <div className="grid w-full max-w-lg items-center gap-1.5 ">
            <div className="flex items-center space-x-2">
              <Checkbox name="privacyPolicy" id="privacyPolicy" />
              <Label htmlFor="privacyPolicy" className="text-sm">
                I read all Privacy Policy -{" "}
                <Link
                  href="/privacyPolicy"
                  className="underline dark:text-blue-300 font-normal text-xs"
                >
                  Privacy Policy
                </Link>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox name="termsCondition" id="termsCondition" />
              <Label htmlFor="termsCondition" className="text-sm">
                I read all Terms and Conditions -{" "}
                <Link
                  href="/termsCondition"
                  className="underline dark:text-blue-300 font-normal text-xs"
                >
                  Terms & Conditions
                </Link>
              </Label>
            </div>
          </div>
          <Button type="submit" variant="outline" className="w-full max-w-lg">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
