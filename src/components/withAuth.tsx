import React, { useState, useEffect, useCallback } from 'react';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { parseCookies } from '../lib/cookies';
import { User } from '../lib/authentication';

interface WithToken {
  token: string;
}

interface WithUser {
  user: User;
}

export function withAuth<P>(
  Component: React.ComponentType<P & WithToken & WithUser>
) {
  const ComponentWithAuth = (props: P & WithToken) => {
    const [user, setUser] = useState<User>({} as User);

    const getAuthenticatedUser = useCallback(() => {
      // call to API to get data of auth user
      
      setUser({
        id: 'd0df8c99-8b96-4dab-b6f0-5854790bee7b',
        name: 'John Doe'
      });
    }, []);

    useEffect(() => {
      getAuthenticatedUser();
    }, [getAuthenticatedUser])

    return <Component {...props} token={props.token} user={user} />
  }

  return ComponentWithAuth;
}

withAuth.getToken = (ctx: GetServerSidePropsContext<ParsedUrlQuery>) => {
  try {
    const { token } = parseCookies(ctx);

    return token;
  } catch (error) {
    return null;
  }
}
