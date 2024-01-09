import Search from "@/components/dashboard/search";
import { CreateInvoice } from "@/components/dashboard/buttons";
import { Member, columns } from "@/components/dashboard/columns";
import { DataTable } from "@/components/dashboard/data-table";
import FormWithSheet from "@/components/dashboard/create-form-sheet";
const page = () => {
  const data = [
    {
      id: "728ed52f",
      name: "유요한",
      age: 25,
      email: "yohan@example.com",
    },
    {
      id: "489ed52f",
      name: "유진",
      age: 28,
      email: "Eugene@example.com",
    },
    // Additional objects can be added here if needed
  ];

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">People | Group</h1>
      </div>
      <div className="mt-2 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        {/* <CreateInvoice /> */}
        <FormWithSheet />
      </div>
      {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
};

export default page;
