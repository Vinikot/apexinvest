import Link from "next/link";

export default function Button({ children, icon, type="link", ...props }) {
    return (
        (type === "link") ?
        <Link href="#" {...props} className="flex items-center gap-1 bg-teal-500 px-2 py-1 rounded hover:bg-teal-600">
            {icon}
            {children}
        </Link>
        :
        <button {...props} className="flex items-center gap-1 bg-teal-500 px-2 py-1 rounded hover:bg-teal-600">
            {icon}
            {children}
        </button>
    )
}