import { forwardRef } from 'react'

type Ref = HTMLDivElement
export const ItemLoading = forwardRef<Ref, any>(function ItemLoading(_, ref) {
  return (
    <div ref={ref} className="border rounded-lg px-4 py-6">
      <div className="flex flex-col space-y-4 h-full items-center justify-center text-center">
        <div className="animate-pulse bg-secondary rounded-lg w-32 h-32 max-w-full" />
        <div className="animate-pulse bg-black rounded-lg w-12 h-7" />
        <div className="animate-pulse bg-primary rounded-lg w-48 max-w-full h-12" />
      </div>
    </div>
  )
})
