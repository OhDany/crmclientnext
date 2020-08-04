import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-blue-900 sm:w-1/3 lg:w-1/5 sm:min-h-screen p-5">
      <div>
        <p className="text-white text-2xl font-black">CRM Clientes</p>
      </div>

      <nav className="mt-5 list-none">
        <li>
          <a className="text-white mb-2 block">
            <Link href="/">Clientes</Link>
          </a>
        </li>
        <li>
          <a className="text-white mb-2 block">
            <Link href="/pedidos">Pedidos</Link>
          </a>
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;
