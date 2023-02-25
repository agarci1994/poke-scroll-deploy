export default function PokemonPage({ params }: any) {
  const { id } = params
  return <h1>Este pokemon tiene el ID: {id}</h1>
}
