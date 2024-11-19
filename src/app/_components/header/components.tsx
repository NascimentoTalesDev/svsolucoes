import { cn } from "@/lib/utils";
import React from "react"

type HeaderGenericProps =  {
    children:  React.ReactNode;
    className?: string;
}


export function HeaderComponent ({ children, className }: HeaderGenericProps ) {
    return(
        <header className={cn("w-screen h-[100px] bg-secondary", className)}>{children}</header>
    )
}

export function HeaderContainer ({ children, className }: HeaderGenericProps ) {
    return(
        <div className={cn("h-full", className)}>
            {children}
        </div>
    )
}
