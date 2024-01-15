"use client"
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { deletePeople } from "@/lib/actions";
import { revalidatePath } from "next/cache";
export type Member = {
  id: string;
  name: string;
  email: string;
  age: number;
};
const handleDelete = async(userId: string) => {
  try {
    "use server"
    await deletePeople(userId);
    revalidatePath('/dashboard/people')
  } catch (error) {
    console.log("failed to delete user on the client side");
  }
}
export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href={`/dashboard/people/${user.id}/edit`}>
              <DropdownMenuItem>편집</DropdownMenuItem>
            </Link>
              <DropdownMenuItem onClick={()=> handleDelete(user.id)}>삭제</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
