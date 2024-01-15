import Form from "@/components/dashboard/edit-form";
import Breadcrumbs from "@/components/dashboard/breadcrumbs";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "People", href: "/dashboard/People" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form id={id}/>
    </main>
  );
}
