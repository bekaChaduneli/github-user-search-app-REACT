import { Container, Logo, Theme, ThemeText, ThemeImg } from "./HeadBox.styled";
import { useState } from "react";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
export default function HeadBox({ theme, setTheme, themeLight, themeDark }) {
  const [themeBoll, setThemeBoll] = useState(false);
  const changeTheme = () => {
    setThemeBoll(!themeBoll);
    console.log(themeBoll);
    if (themeBoll == true) {
      setTheme(themeLight);
    } else {
      setTheme(themeDark);
    }
  };
  return (
    <Container>
      <Logo>devfinder</Logo>
      <Theme onClick={changeTheme}>
        <ThemeText>{theme == themeLight ? "DARK" : "LIGHT"}</ThemeText>
        <ThemeImg src={theme == themeLight ? moon : sun} alt="themeLogo" />
      </Theme>
    </Container>
  );
}
