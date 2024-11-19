import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react"

type NavGenericProps = {
    children: React.ReactNode;
    className?: string;
}

type NavLinkProps = {
    children: React.ReactNode;
    className?: string;
    path: string;
    active?: boolean;
}

export function NavComponent({ children, className }: NavGenericProps) {
    return (
        <header className={cn("w-full h-full", className)}>{children}</header>
    )
}

export function NavContainer({ children, className }: NavGenericProps) {
    return (
        <nav className={cn("w-full h-full", className)}>{children}</nav>
    )
}

export function NavBettewen({ children, className }: NavGenericProps) {
    return (
        <nav className={cn("flex h-full items-center justify-between", className)}>{children}</nav>
    )
}

export function NavLinks({ children, className }: NavGenericProps) {
    return (
        <ul className={cn("flex items-center justify-center gap-5", className)}>{children}</ul>
    )
}

export function NavLink({ children, className, path, active }: NavLinkProps) {
    return (
        <li className="">
            <Link href={path} className={cn(`font-normal p-2 transition-all duration-300 hover:text-white ${active ? "text-white border-b-2" : "text-lightGray"}`, className)} >
                {children}
            </Link>
        </li>
    )
}
