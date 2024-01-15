"use client"
import { createPeople } from "@/lib/actions";
import buttonAnimation from "@/public/lottie/submitButton.json";
import Lottie from "lottie-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useFormStatus } from "react-dom";
function SubmitButton(){
  const { pending } = useFormStatus()
  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? (
        // <Lottie className="w-64 h-64"  animationData={buttonAnimation} loop={true} />
        <form
          action={createPeople}
          className="flex flex-col gap-4 p-4 w-full max-w-md mx-auto"
        >
          <div>
            <Label htmlFor="name" className="block mb-2">
              이름
            </Label>
            <Input id="name" name="name" type="text" />
          </div>
          <div>
            <Label htmlFor="age" className="block mb-2">
              나이
            </Label>
            <Input id="age" name="age" type="text" />
          </div>
          <div>
            <Label htmlFor="email" className="block mb-2">
              이매일
            </Label>
            <Input id="email" name="email" type="email" />
          </div>
          {/* <Lottie animationData={buttonAnimation} loop={true} />
        <Button type="submit">Submit</Button> */}
          <Lottie animationData={buttonAnimation} loop={true} />
        </form>
      ) : (
        "Submit"
      )}
    </Button>
  );
}
const Form = () => {

  return (
    <>
      <form
        action={createPeople}
        className="flex flex-col gap-4 p-4 w-full max-w-md mx-auto"
      >
        <div>
          <Label htmlFor="name" className="block mb-2">
            이름
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label htmlFor="age" className="block mb-2">
            나이
          </Label>
          <Input id="age" name="age" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="block mb-2">
            이매일
          </Label>
          <Input id="email" name="email" type="email" />
        </div>
        {/* <Lottie animationData={buttonAnimation} loop={true} />
        <Button type="submit">Submit</Button> */}
        <SubmitButton />
      </form>
    </>
  );
}


export default Form;