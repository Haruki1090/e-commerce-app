import { nextAuthOptions } from "@/app/lib/next-auth/options";
import NextAuth from "next-auth";

const handler = NextAuth(nextAuthOptions);
// githubProviderなどを含んだものをhandlerに渡す

export { handler as GET, handler as POST };
