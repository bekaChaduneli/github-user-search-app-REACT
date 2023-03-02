import { useEffect } from "react";
import {
  Container,
  InfoBox,
  Logo,
  User,
  TagName,
  Date,
  Info,
  Bio,
  States,
  StatesBoxs,
  ReposText,
  Repos,
  FollowersText,
  Followers,
  FollowingText,
  PersonalInfoBoxWeb,
  PersonalInfoBoxTwitter,
  Following,
  TabletBox,
  PersonalInfo,
  PersonalInfoBoxGithub,
  PersonalInfoBoxLocation,
  PersonalInfoBoxText,
  Desktop,
  DesktopLogo,
  PersonalInfoBoxImg,
} from "./ResultBox.styled";

export default function ResultBox({
  users,
  websiteImg,
  twitterImg,
  githubImg,
  location,
  setLocation,
  github,
  setGithub,
  website,
  setWebsite,
  locationImg,
  twitter,
  setTwitter,
}) {
  useEffect(() => {
    if (users.twitter_username === null) {
      setTwitter(false);
    } else {
      setTwitter(true);
    }
    if (users.location === null) {
      setLocation(false);
    } else {
      setLocation(true);
    }
    if (users.company === null) {
      setWebsite(false);
    } else {
      setWebsite(true);
    }
    if (users.url === null) {
      setGithub(false);
    } else {
      setGithub(true);
    }
  }, [users]);
  const create = `${users.created_at}`;
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <Container>
      <DesktopLogo src={users.avatar_url} alt="" />
      <Desktop>
        <InfoBox>
          <Logo src={users.avatar_url} alt="" />
          <Info>
            <div>
              <User>{users.name}</User>
              <TagName>@{users.login}</TagName>
            </div>
            <Date>
              Joined {create.slice(8, 10)} {months[create.slice(5, 7)]}{" "}
              {create.slice(0, 4)}
            </Date>
          </Info>
        </InfoBox>
        <Bio>{users.bio}</Bio>
        <States>
          <StatesBoxs>
            <ReposText>Repos</ReposText>
            <Repos>{users.public_repos}</Repos>
          </StatesBoxs>
          <StatesBoxs>
            <FollowersText>Followers</FollowersText>
            <Followers>{users.followers}</Followers>
          </StatesBoxs>
          <StatesBoxs>
            <FollowingText>Following</FollowingText>
            <Following>{users.following}</Following>
          </StatesBoxs>
        </States>
        <PersonalInfo>
          <TabletBox>
            <PersonalInfoBoxLocation
              location={location}
              setLocation={setLocation}
            >
              <PersonalInfoBoxImg src={locationImg} alt="locationImg" />
              <PersonalInfoBoxText>
                {users.location != null ? users.location : "Not Available"}
              </PersonalInfoBoxText>
            </PersonalInfoBoxLocation>
            <PersonalInfoBoxGithub github={github} setGithub={setGithub}>
              <PersonalInfoBoxImg src={githubImg} alt="githubImg" />
              <PersonalInfoBoxText
                href={users.blog != null ? users.blog : "Not Available"}
              >
                Blog Link
              </PersonalInfoBoxText>
            </PersonalInfoBoxGithub>
          </TabletBox>
          <TabletBox>
            <PersonalInfoBoxTwitter twitter={twitter} setTwitter={setTwitter}>
              <PersonalInfoBoxImg src={twitterImg} alt="twitter" />
              <PersonalInfoBoxText
                href={
                  `${users.twitter_username}` !== "null"
                    ? `https://twitter.com/${users.twitter_username}`
                    : "Not Available"
                }
              >
                Twitter
              </PersonalInfoBoxText>
            </PersonalInfoBoxTwitter>
            <PersonalInfoBoxWeb website={website} setWebsite={setWebsite}>
              <PersonalInfoBoxImg src={websiteImg} alt="websiteImg" />
              <PersonalInfoBoxText>
                {users.company != null ? users.company : "Not Available"}
              </PersonalInfoBoxText>
            </PersonalInfoBoxWeb>
          </TabletBox>
        </PersonalInfo>
      </Desktop>
    </Container>
  );
}
