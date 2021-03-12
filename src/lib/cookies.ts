import cookie from "cookie"
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

export function parseCookies({ req }: GetServerSidePropsContext<ParsedUrlQuery>) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}