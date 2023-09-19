import { useEffect, useState } from "react";
import MainButton from "../Button";
import { Header, IconMenuMobile, Nav } from "./styled";
import { VscMenu, VscClose } from "react-icons/vsc";

export default function NavBar() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if(windowWidth && windowWidth < 998) setIsMobile(true);
    else setIsMobile(false)
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return(
    <Header>
      <img src="./logo.svg" alt="Logo EasyBank" />
      <Nav className={`${ isMobile && openMenu ? "open-menu" : "" }`}>
        <ul onClick={isMobile ? () => setOpenMenu(!openMenu) : undefined}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </Nav>
      <IconMenuMobile onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ?  <VscClose /> : <VscMenu />}
      </IconMenuMobile>

      <MainButton text="Request Invite" />
    </Header>
  )
}