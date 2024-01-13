import { columns } from "@/components/dashboard/people/columns";
import { DataTable } from "@/components/dashboard/people/data-table";
import { fetchPeople } from "@/lib/data";
export default async function Page () {
  const data = await fetchPeople();
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">People | Group</h1>
      </div>
      {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};


