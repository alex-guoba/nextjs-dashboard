import { fetchCustomers } from "@/app/lib/data"
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";

export default async function Page() {
    const customers = await fetchCustomers();

    return (
        // <main> 标签中的内容在文档中是唯一的。它不应包含在文档中重复出现的内容，比如侧栏、导航栏、版权信息、站点标志或搜索表单。
        // 注意在一个文档中，<main> 元素是唯一的，所以不能出现一个以上的 <main> 元素。<main> 元素不能是以下元素的后代：<article>、<aside>、<footer>、<header> 或 <nav>。
        <main>
            <Breadcrumbs breadcrumbs={[
                { label: 'Invoices', href: '/dashboard/invoices' },
                { label: 'Create Invoice', href: '/dashboard/invoices/create', active: true},
            ]} />
            <Form customers={customers} />
        </main>
    )
}