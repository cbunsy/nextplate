'use client';

import { useSession } from 'next-auth/react';

export function User() {
  const { data: session } = useSession();

  return <pre>{JSON.stringify(session)}</pre>;
}
