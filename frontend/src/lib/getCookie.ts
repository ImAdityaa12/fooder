import { IncomingMessage } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

type ServerRequest = IncomingMessage & {
  cookies: NextApiRequestCookies;
};
export function getCookie(
  name: string,
  req?: ServerRequest
): string | undefined {
  if (req && req.cookies) {
    // Server-side
    return req.cookies[name];
  } else if (typeof window !== "undefined") {
    // Client-side
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift();
    }
  }
  return undefined;
}
