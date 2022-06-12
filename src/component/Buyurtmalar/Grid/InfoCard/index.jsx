import React from 'react'
import { Wrapper } from './style'

export default function index({value,open}) {
  return (
    <Wrapper open={open}>{value?.user?.name}  infocard</Wrapper>
  )
}
