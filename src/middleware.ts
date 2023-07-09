// This `middleware.ts` file should be put in the same hierarchy as app directory
// reference: https://stackoverflow.com/questions/73040090/nextjs-middleware-does-not-seem-to-be-triggered#:~:text=For%20next%2013.0.2%20/%2013.0.1%20if%20you%20are%20using%20appDir%3A%20true%20(%20experimental%20)

export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard', '/src/app/:path*'],
};
