import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  font-size: 24px;
`

const Text = styled.p`
  font-size: 14px;
`

class Hello extends React.Component {
  render () {
    return (
      <div>
        <Header>Hello, React!</Header>
        <Text>Hello form React.</Text>
      </div>
    )
  }
}

export default Hello
