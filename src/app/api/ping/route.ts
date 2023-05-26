import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: Request) {
    //@ts-ignore
    return NextResponse.json({ message: 'Ping ok' }, { status: 200 });
}