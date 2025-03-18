'use client'

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const AvatarHeader = () =>
{
    return (
        <Link href="https://alnair.ae/">
    <Avatar className="justify-center align-middle w-fit flex">
        <AvatarImage src="https://github.com/shadcn.png"/>
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>
        </Link>
    )
}
