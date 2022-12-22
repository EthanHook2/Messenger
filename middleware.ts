export { default } from "next-auth/middleware";

// Secures the matching route(s) to only allow authenticated requests
export const config = { matcher: ["/"] };