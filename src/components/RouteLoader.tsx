"use client"

import React, { useEffect, useState } from 'react'
import loadingAnimation from "../../public/progress.json"
import Lottie from 'lottie-react'
import { usePathname, useSearchParams } from 'next/navigation'

export const RouteLoader = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Set loading to true when route changes
        setLoading(true);

        // Simulate navigation completion (adjust timing as needed)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300); // 300ms delay for demo purposes

        // Cleanup timeout on unmount or next route change
        return () => clearTimeout(timer);
    }, [pathname, searchParams]); // Re-run effect when pathname or search params change


    if (!loading) return null

    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <Lottie
                loop
                animationData={loadingAnimation}
                style={{ width: 200, height: 200 }}
            />
        </div>
    )
}
