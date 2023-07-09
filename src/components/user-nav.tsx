'use client';

import * as Avatar from '@radix-ui/react-avatar';
import { signOut, useSession } from 'next-auth/react';

import { LoginButton } from '@/app/auth';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function UserNav() {
  const session = useSession();

  return (
    <div>
      {session.status === 'unauthenticated' && <LoginButton />}
      {session.status === 'authenticated' && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar.Root className="inline-flex h-12 w-12 select-none items-center justify-center overflow-hidden rounded-full align-middle hover:cursor-pointer">
              <Avatar.Image
                className="h-full w-full object-cover"
                src="/assets/images/profile-image.jpeg"
                alt="Lorem Ipsum"
              />
              <Avatar.Fallback
                className="flex h-full w-full items-center justify-center bg-white text-lg font-bold text-purple-500"
                delayMs={600}
              >
                LI
              </Avatar.Fallback>
            </Avatar.Root>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuGroup>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {session.data.user?.name}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {session.data.user?.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() => signOut()}
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
