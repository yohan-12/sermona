"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { buttonVariants } from "@/components/ui/button";
import { updatePeople } from "@/lib/actions";
import Link from "next/link";
const Form = ({id}: {id: string}) => {
  const updatePeopleWithId = updatePeople.bind(null, id)
  return (
    <>
      <form
        action={updatePeopleWithId}
        className="flex flex-col gap-4 p-4 w-full max-w-md mx-auto"
      >
        <h1 className="font-bold text-blue-950">사용자 정보 편집하기</h1>
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
        <div className="flex w-full gap-4">
          <Link
            href={"/dashboard/people"}
            className={(buttonVariants({ variant: "destructive", className: "w-1/2" })) }
          >
            취소
          </Link>
          <Button className="w-1/2" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
