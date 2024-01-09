"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";


const FormWithSheet = () => {
    const [isSheetVisible, setSheetVisible] = useState(false);
    const handleLinkClick = (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setSheetVisible(true)
    }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default">
          교인 등록{" "}
          <span className="ml-2">
            <Plus />
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <form>
          <SheetHeader>
            <SheetTitle>새로운 교인 등록</SheetTitle>
            <SheetDescription>
              여기에 새 회원을 생성하세요. 완료되면 저장을 클릭하세요.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                이름
              </Label>
              <Input id="name" placeholder="이름..." className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Email
              </Label>
              <Input
                id="username"
                placeholder="이매일 주소..."
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                나이
              </Label>
              <Input id="name" placeholder="나이.." className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSheetVisible(false)}
                  className="w-full" // Full width for the button
                >
                  취소
                </Button>

                <Button
                  type="button"
                  variant="default"
                  onClick={() => setSheetVisible(false)}
                  className="w-full" // Full width for the button
                >
                  저장
                </Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}

export default FormWithSheet