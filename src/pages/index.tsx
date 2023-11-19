import { Inter } from 'next/font/google'

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <div>
        <h2>リンク一覧(仮)</h2>

        <ul>
          <li>
            <Link href="inquiry">お問い合わせ画面</Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
