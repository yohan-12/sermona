'use server'
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const prisma = new PrismaClient()
const PeopleFormSchema = z.object({
    id: z.string(),
    name: z.string(),
    age: z.coerce.number(),
    email: z.string(),
})
const CreatePeople = PeopleFormSchema.omit({ id: true })
export async function createPeople(formData: FormData){
    const { name, age, email} = CreatePeople.parse({
        name: formData.get('name'),
        age: formData.get('age'),
        email: formData.get('email')
    })
    console.log(`${name} age is ${age} and her email is ${email}`);
    try {
        await prisma.people.create({
            data: {
                name,  
                age,
                email,
            }
        })
    } catch (error) {
        console.error(error)
        throw new Error('Error pushing data to db')
    }
    revalidatePath('/dashboard/people')
    redirect('/dashboard/people')
}
