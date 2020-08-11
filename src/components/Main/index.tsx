import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      alt="Imagem de um átomo e React Avançado escrito ao lado."
      src="/img/logo.svg"
    ></S.Logo>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    ></S.Ilustration>
  </S.Wrapper>
)

export default Main
