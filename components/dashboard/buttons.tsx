import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";
export function CreateInvoice() {
  return (
    <Link
      href={"/dashboard/people/create"}
      className={buttonVariants({ variant: "default" })}
    >
      Create member
      <Plus className="w-5" />
    </Link>
  );
}
