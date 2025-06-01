'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import InitReferenceData from './components/initReferenceData';
import { ReferenceProvider } from './context/referenceContext';

const queryClient = new QueryClient();

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ReferenceProvider>
                <InitReferenceData />
                {children}
            </ReferenceProvider>
        </QueryClientProvider>
    );
}
