"use client"

import * as React from "react"


import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function Register({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="fname"
                            placeholder="Enter Your Frist Name"
                            type="string"
                            autoCapitalize="none"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="lname"
                            placeholder="Enter Your Last Name"
                            type="string"
                            autoCapitalize="none"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="Enter Your Email"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="Enter Your Phone Number"
                            type="number"
                            autoCapitalize="none"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Password
                        </Label>
                        <Input
                            id="password"
                            placeholder="Enter Your Password"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="password"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign Up
                    </Button>
                </div>
            </form>

        </div>
    )
}
