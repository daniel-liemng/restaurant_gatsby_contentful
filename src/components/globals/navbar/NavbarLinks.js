import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { styles } from "../../../utils"

import { navLinks } from "../../../contants/links"

const NavbarLinks = ({ isOpen }) => {
  return (
    <LinkWrapper open={isOpen}>
      {navLinks.map(link => (
        <li key={link.id}>
          <Link to={link.path} className="nav-link">
            {link.name}
          </Link>
        </li>
      ))}
    </LinkWrapper>
  )
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }

  .nav-link {
    display: block;
    text-decoration: none;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    cursor: pointer;
    ${styles.transDefault}

    &:hover {
      padding: 0.5rem 1rem 0.5rem 1.5rem;
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
    }
  }

  height: ${props => (props.open ? "164px" : "0px")};
  overflow: hidden;

  transition: all 1s ease-in-out;

  @media screen and (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;

    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`

export default NavbarLinks
