import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";
export function RegisterMemberButton() {
  return (
    <Link
      href={"/dashboard/people/create"}
      className={buttonVariants({ variant: "default" })}
    >
      교인 등록
      <span className="ml-2">
        <Plus />
      </span>
    </Link>
  );
}
