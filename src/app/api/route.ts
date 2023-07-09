import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import { authOptions } from './auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: ReasonPhrases.UNAUTHORIZED }),
      {
        status: StatusCodes.UNAUTHORIZED,
      }
    );
  }

  return NextResponse.json({
    authenticated: !!session,
  });
}
