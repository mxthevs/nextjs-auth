import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie'

export default function Login() {
  const router = useRouter();
  const [, setCookie] = useCookies(['token']);

  return (
    <button
      onClick={() => {
        // call to API to handle login
        setCookie('token', 'SOME_JWT_TOKEN');
        router.push('/profile');
      }}
    >
      Me autentica aew!
    </button>
  )
}
