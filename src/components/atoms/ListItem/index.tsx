import React from 'react'
import * as S from './style'

type Props = {
  children: React.ReactNode
}

function ListItem({ children }: Props) {
  return <S.ListItem data-testid="list-item">{children}</S.ListItem>
}

export default ListItem
