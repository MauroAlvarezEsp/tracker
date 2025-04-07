import React from "react";
import Link from "next/link";
import { SessionPayload } from "@/types/SessionPayload";
import { MenuPages } from "@/types/MenuPages";

//reusable menu component receives user data and print options based on role
export default function MenuComponent({ session, pages }: { session: SessionPayload; pages: MenuPages[] }) {
    // Dynamic rendering technique
    return (
        pages
        .filter((link) =>
            link.requiredRoles.some((role) => session.user?.roles.includes(role))
        ) 
        .map((link, index) => (
            <Link
                key={index}
                href={link.path}
                className="block py-2 text-center px-4 bg-gray-500 text-white dark:bg-gray-700 hover:bg-gray-600 hover:cursor-pointer rounded">
                {link.title}
            </Link>
        ))
    )
}