import React from "react"
import styled from "styled-components"

import { styles } from "../../../utils"

import { iconLinks } from "../../../contants/icons"

const NavbarIcons = () => {
  return (
    <IconWrapper>
      {iconLinks.map(item => (
        <a
          href={item.url}
          key={item.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.6rem;
    cursor: pointer;
   
    /* ${styles.transDefault} */
    ${styles.transFunction()}
  }

  .facebook-icon {
    color: #3b579d;
  }
  .instagram-icon {
    color: #da5f53;
  }
  .twitter-icon {
    color: #3ab7f0;
  }

  .icon:hover {
    color: ${styles.colors.mainYellow};
  }  
  
  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`

export default NavbarIcons
