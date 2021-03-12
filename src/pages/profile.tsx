import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { withAuth } from '../components/withAuth';
import { AuthenticatedPageProps } from '../lib/authentication';

interface ProfileProps extends AuthenticatedPageProps {}

const Profile = ({ token, user }: ProfileProps) => {
  const router = useRouter();
  const [,, removeCookie] = useCookies(['token']);

  return (
    <div>
      <h1>Meu perfil - { user.name }</h1>
      
      <code>
        <div>user_id = {user.id}</div>
        <div>user_token = {token}</div>
      </code>

      <button
        onClick={() => {
          // call to API to handle sign out
          removeCookie('token');
          router.replace('/');
        }}
      >
        quero sair
      </button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = withAuth.getToken(ctx);

  if (!!token) {
    return { props: { token } };
  } else {
    ctx.res.writeHead(301, { Location: "/" })
    ctx.res.end()

    return { props: { token: null }}
  }
}

export default withAuth(Profile);