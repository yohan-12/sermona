"use server"
import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";
import { Member } from "@/components/dashboard/people/columns";
const prisma = new PrismaClient()

//! Fetching People Data to display on the table
export async function fetchPeople(): Promise<Member[]>{
    noStore()
    try {
        const data = await prisma.people.findMany()
        console.log(data);
        return (data)
    } catch (error) {
        console.error("Database error: ", error)
        throw new Error("Failed to fetch people from db")
    }
}