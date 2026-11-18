import { Suspense } from 'react';
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';

async function EditForm({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  return <Form invoice={invoice} customers={customers} />;
}

export default function Page(props: { params: Promise<{ id: string }> }) {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          { label: 'Edit Invoice', href: '/dashboard/invoices', active: true },
        ]}
      />
      <Suspense fallback={<p>Loading...</p>}>
        <EditForm params={props.params} />
      </Suspense>
    </main>
  );
}
