import Link from "next/link";

export default function Button({ children, icon, ...props }) {
    return (
        <Link href="#" {...props} className="flex items-center gap-1 bg-teal-500 px-2 py-1 rounded hover:bg-teal-600">
            {icon}
            {children}
        </Link>
    )
}