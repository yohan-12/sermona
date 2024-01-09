import Form from "@/components/dashboard/create-form";
import Breadcrumbs from "@/components/dashboard/breadcrumbs";
const page = () => {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "People", href: "/dashboard/people" },
          {
            label: "Create People",
            href: "/dashboard/people/create",
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}

export default page