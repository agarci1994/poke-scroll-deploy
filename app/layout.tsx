import { ReactNode } from 'react'
import { Header } from '@/components/Header/Header'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '800'],
  subsets: ['latin'],
  display: 'swap',
})

type Metadata = { title: string; author: string; description: string }
const metadata: Metadata = {
  title: 'Technical test GeekSquare',
  author: 'Alejandro García',
  description: 'App developed in february for GeekSquare',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <title>{metadata.title}</title>
        {(Object.keys(metadata) as Array<keyof typeof metadata>).map(
          (prop: keyof typeof metadata, i: number) => (
            <meta key={i} name={prop} content={metadata[prop]} />
          )
        )}
      </head>
      <body>
        <Header />
        <main className="p-5">{children}</main>
      </body>
    </html>
  )
}
