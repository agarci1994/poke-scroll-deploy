// INTERFACE
import { IPokemon } from '@/interface/IPokemon'

export default function Stats({ stats }: IPokemon) {
  return (
    <div className="font-extrabold bg-black p-8 rounded-md text-secondary">
      <p className="pb-2">More stats</p>
      {stats?.map((stat: any) => (
        <p key={stat.prop}>
          {stat.prop}:{' '}
          <span className="text-yellow font-extralight">{stat.value}</span>
        </p>
      ))}
    </div>
  )
}
