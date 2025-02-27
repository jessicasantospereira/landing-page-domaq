"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { AppSidebar } from '@/components/home/sidebar';

const ClientWrapper = ({ children }:any) => {
    const pathname = usePathname();
    const shouldRenderSidebar = (pathname !== '/' && pathname !== '/login');

    return (
        <div className="min-h-screen flex w-full">
            { shouldRenderSidebar && <AppSidebar /> }
            <main className="flex-1">
             {children}
            </main>
        </div>
    );
};

export default ClientWrapper;