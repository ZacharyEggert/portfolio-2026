import Link from "next/link";

export default function Sidebar() {
  return (
    <nav>
      <ul className="space-y-2">
        <li>
          <Link href="/" className="block px-3 py-2 rounded-md text-gray-800 hover:bg-green-200/50">
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/reports"
            className="block px-3 py-2 rounded-md text-gray-800 hover:bg-green-200/50"
          >
            Reports
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="block px-3 py-2 rounded-md text-gray-800 hover:bg-green-200/50"
          >
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
