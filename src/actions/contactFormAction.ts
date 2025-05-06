import { StateType } from "@/types";
import { toast } from "sonner";

export const action = async (
  prevState: StateType,
  formData: FormData
): Promise<StateType> => {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const phoneNumber = formData.get("email") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;
  const privacyPolicy = formData.get("privacyPolicy") as string;
  const termsCondition = formData.get("termsCondition") as string;

  if ((fullName && email && phoneNumber && service) === "") {
    toast("Please, provide all information correctly.");
    return {
      successful: false,
      error: true,
      errorMsg: "User not provide all information correctly",
    };
  }

  if ((privacyPolicy && termsCondition) !== "on") {
    toast("Please, read our privacy policy and terms & conditions");
    return {
      successful: false,
      error: true,
      errorMsg: "User not read privacy policy and terms & conditions",
    };
  }

  toast("Thanks for contact us, We will response it within few times");
  return {
    successful: true,
    error: false,
    errorMsg: "",
  };
};
