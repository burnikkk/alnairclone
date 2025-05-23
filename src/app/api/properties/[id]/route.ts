import { NextRequest, NextResponse } from 'next/server';
import { mocks } from '@/app/api/properties/route';

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const property = mocks.find((item) => item.id === params.id);

  if (!property) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.json(property);
}
