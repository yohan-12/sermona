"use client"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

const Form = () => {
  return (
    <>
   
      <form className="flex flex-col gap-4 p-4 w-full max-w-md mx-auto">
        <div>
          <Label htmlFor="name" className="block mb-2">
            Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label htmlFor="age" className="block mb-2">
            Age
          </Label>
          <Input id="age" name="age" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="block mb-2">
            Email
          </Label>
          <Input id="email" name="email" type="email" />
        </div>
        <Button type="submit">Submit</Button>
      </form> 
    </>
  );
}

export default Form;