import Link from 'next/link'
import { cookies, headers } from 'next/headers'

export const metadata = {
  title: 'Home',
}

export default async function Home() {
  const userCookies = cookies()
  const userHeaders = headers()

  console.log(userCookies)
  console.log(userHeaders)

  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link href={'/partner/signup'}>Cadastre-se como Parceiro</Link>
      </div>
      <div>
        <Link href={'/client/signup'}>Cadastre-se como Cliente</Link>
      </div>
    </div>
  )
}
