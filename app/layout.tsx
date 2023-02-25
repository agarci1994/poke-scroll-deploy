import { Title } from '@/components/Title/Title';
import '@/styles/globals.css'
  
type Metadata = { title: string; author: string; description: string }
const metadata: Metadata = {
  title: 'Technical test GeekSquare',
  author: 'Alejandro García',
  description: 'App developed in february for GeekSquare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        {(Object.keys(metadata) as Array<keyof typeof metadata>).map(
          (prop: keyof typeof metadata, i: number) => (
            <meta key={i} name={prop} content={metadata[prop]} />
          )
        )}
      </head>
      <body>
        <Title />
        {children}
      </body>
    </html>
  )
}
