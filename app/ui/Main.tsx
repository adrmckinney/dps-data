'use client';

import { SubgroupPopulationResponse } from '@/types/population';
import { FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/20/solid';
import { ComponentType, SVGProps, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { PopulationRouteService } from '../services/populationRouteService';
import SideBar from './SideBar';
import SideBarMobile from './SideBarMobile';
import TopBar from './TopBar';

export type Navigation = {
    name: string;
    href: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    current: boolean;
};

export type Teams = {
    id: number;
    name: string;
    href: string;
    initial: string;
    current: boolean;
};

export type UserNavigation = {
    name: string;
    href: string;
};

const navigation: Navigation[] = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
];
const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
];
const userNavigation: UserNavigation[] = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
];

const Main = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };
    const { state } = useFetch<SubgroupPopulationResponse[]>({
        apiFn: () =>
            PopulationRouteService.getSubgroupPopulation({
                filters: {
                    subgroupId: {
                        operator: 'in',
                        value: [12],
                    },
                    'school.levelId': {
                        operator: 'equals',
                        value: 3,
                    },
                },
            }),
    });
    console.log('state', state);
    return (
        <div>
            <SideBarMobile
                navigation={navigation}
                teams={teams}
                sidebarOpen={sidebarOpen}
                handleSidebarClose={handleSidebarClose}
            />

            {/* Static sidebar for desktop */}
            <SideBar navigation={navigation} teams={teams} />

            <div className="lg:pl-72">
                <TopBar userNavigation={userNavigation} setSidebarOpen={setSidebarOpen} />
                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
                </main>
            </div>
        </div>
    );
};

export default Main;
