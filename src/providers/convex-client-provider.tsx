"use client"
import Loading from "@/auth/loading";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

interface ConvexClientProviderProps {
    children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClinetProvider = ({
    children,
}: ConvexClientProviderProps) => {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                    {children}
                {/* <Authenticated>
                </Authenticated> */}
                {/* <AuthLoading>
                    <Loading />
                </AuthLoading> */}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}