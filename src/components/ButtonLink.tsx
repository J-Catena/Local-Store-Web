import Link from "next/link";

type Props = {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
};

export default function ButtonLink({
    href,
    children,
    variant = "primary",
    className = "",
}: Props) {
    const base =
        "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold " +
        "transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const primary =
        "text-white shadow-sm hover:shadow " +
        "bg-[color:var(--brand)] hover:bg-[color:var(--brand-hover)] focus:ring-[color:var(--brand)]/40";

    const secondary =
        "border border-zinc-300 bg-white text-zinc-900 hover:border-[color:var(--brand)] " +
        "hover:text-[color:var(--brand)] hover:bg-zinc-50 focus:ring-zinc-300/40";

    return (
        <Link
            href={href}
            className={`${base} ${variant === "primary" ? primary : secondary} ${className}`}
        >
            {children}
        </Link>
    );
}