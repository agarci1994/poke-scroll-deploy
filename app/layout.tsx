import { ReactNode } from 'react'

import { Header } from '@/components/Header/Header'
import { montserrat } from '@/config/fonts.config'
import { metadata } from "@/config/metadata.config"

import '@/styles/globals.css'

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
