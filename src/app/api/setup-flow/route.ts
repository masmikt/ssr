import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: any) {
    const jsonDirectory = path.join(process.cwd(), 'src/app/api/setup-flow');
    const fileContents = await fs.readFile(jsonDirectory + '/buyNowConfig.json', 'utf8');
    return NextResponse.json(fileContents);
}