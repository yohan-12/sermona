"use client"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { createPeople } from "@/lib/actions";
const Form = () => {
  return (
    <>
      <form action={createPeople} className="flex flex-col gap-4 p-4 w-full max-w-md mx-auto">
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
        <Button type="submit">Submit</Button>
      </form> 
    </>
  );
}

export default Form;