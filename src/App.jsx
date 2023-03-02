import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ResultBox from "./components/ResultBox/ResultBox";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { All } from "./index.styled";
import { themeLight } from "./components/styles/themeLight";
import { themeDark } from "./components/styles/themeDark";
import locationImg from "./components/assets/icon-location.svg";
import githubImg from "./components/assets/icon-website.svg";
import twitterImg from "./components/assets/icon-twitter.svg";
import websiteImg from "./components/assets/icon-company.svg";
import HeadBox from "./components/HeadBox/HeadBox";
function App() {
  const [users, setUsers] = useState("");
  const [value, setValue] = useState(null);
  const [twitter, setTwitter] = useState(false);
  const [location, setLocation] = useState(false);
  const [github, setGithub] = useState(false);
  const [website, setWebsite] = useState(false);
  const [theme, setTheme] = useState(themeLight);
  return (
    <All>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HeadBox
          setTheme={setTheme}
          theme={theme}
          themeLight={themeLight}
          themeDark={themeDark}
        />
        <SearchBar
          setUsers={setUsers}
          users={users}
          value={value}
          theme={theme}
          setValue={setValue}
        />
        <ResultBox
          locationImg={locationImg}
          location={location}
          setLocation={setLocation}
          githubImg={githubImg}
          github={github}
          setGithub={setGithub}
          website={website}
          setWebsite={setWebsite}
          twitter={twitter}
          twitterImg={twitterImg}
          websiteImg={websiteImg}
          setTwitter={setTwitter}
          users={users}
        />
      </ThemeProvider>
    </All>
  );
}

export default App;
