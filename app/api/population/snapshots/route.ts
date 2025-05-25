// app/api/population/snapshots/route.ts
import { PopulationService } from '@/services/populationService';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const snapshots = await PopulationService.getSnapshots();
        return NextResponse.json(snapshots);
    } catch (error) {
        console.error('Error fetching snapshots:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
