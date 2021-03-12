import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Página inicial</h1>

      <Link href="/login">
        <button>quero entrar</button>
      </Link>
    </div>
  )
}
