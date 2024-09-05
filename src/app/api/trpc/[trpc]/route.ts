import { AppRouter } from "@/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: AppRouter,

    // @ts-expect-error
    createContext: () => ({}),
  });
};

export { handler as GET, handler as POST };
