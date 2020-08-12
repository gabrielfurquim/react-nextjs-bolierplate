import * as S from './styles'

type Rocket = {
  id: string
}

type Props = {
  title: string
  description: string
  rockets: [Rocket]
}

function Main({
  title = 'SpaceX Rockets',
  description = 'Get space-x rockets using graphql public api.',
  rockets
}: Props) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.List>
        {rockets.map((rocket) => (
          <S.ListItem key={rocket.id}>{rocket.id}</S.ListItem>
        ))}
      </S.List>
      <S.Ilustration
        src="/img/rocket.svg"
        alt="Um foguete em fase de lançamento."
      ></S.Ilustration>
    </S.Wrapper>
  )
}
export default Main
