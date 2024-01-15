"use server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();
const PeopleFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.coerce.number(),
  email: z.string(),
});
const CreatePeople = PeopleFormSchema.omit({ id: true });
const UpdatePeople = PeopleFormSchema.omit({ id: true });
export async function createPeople(formData: FormData) {
  const { name, age, email } = CreatePeople.parse({
    name: formData.get("name"),
    age: formData.get("age"),
    email: formData.get("email"),
  });
  console.log(`${name} age is ${age} and her email is ${email}`);
  try {
    await prisma.people.create({
      data: {
        name,
        age,
        email,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error pushing data to db");
  }
  revalidatePath("/dashboard/people");
  redirect("/dashboard/people");
}
export async function updatePeople(id: string, formData: FormData) {
  const { name, age, email } = UpdatePeople.parse({
    name: formData.get("name"),
    age: formData.get("age"),
    email: formData.get("email"),
  });
  try {
    await prisma.people.update({
      where: {
        id: id,
      },
      data: {
        name,
        age,
        email,
      },
    });
  } catch (error) {
    throw new Error("Error in updating member in DB");
  }
  revalidatePath("/dashboard/people");
  redirect("/dashboard/people");
}
export async function deletePeople(id: string){
    try {
        await prisma.people.delete({where:{id}})
    } catch (error) {
        throw new Error("Failed to delete user in the db")
    }
    revalidatePath('/dashboard/people')
}
