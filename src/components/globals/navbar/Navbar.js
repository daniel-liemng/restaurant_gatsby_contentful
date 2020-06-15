import React, { useState } from "react"
import styled from "styled-components"

import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"

const Navbar = () => {
  // state
  const [isOpen, setIsOpen] = useState(false)

  // function
  const toggleNavbar = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <NavWrapper>
      <NavbarHeader toggleNavbar={toggleNavbar} />
      <NavbarLinks isOpen={isOpen} />
      <NavbarIcons />
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export default Navbar
