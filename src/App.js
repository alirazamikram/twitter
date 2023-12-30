import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Notification from "./components/notification";
import TwitterTweeting from "./components/twitter-tweeting";
import TwitterList from "./components/twitter-lists";
import MemberOf from "./components/twitter-lists/member-of";
import Search from "./components/search-suggestion";
import Trends from "./components/trends";
import Message from "./components/messages";
import MessagesSettings from "./components/messages-settings";
import TweetOfMine from "./components/tweet-of-mine";
import TweetOfSomeone from "./components/tweet-of-someone";
import RetweetedTweet from "./components/retweeted-tweet";
import NewMessages from "./components/new-message";
import Profile from "./components/pofile";
import SearchTwitter from "./components/search-suggestion";
import SettingAndPrivacy from "./components/setting-and-privacy";
import VideoPlayer from "./components/video-player";
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/new-message" element={<NewMessages />} />
          <Route path="/message-setting" element={<MessagesSettings />} />
          <Route path="/twitter-tweeting" element={<TwitterTweeting />} />
          <Route path="/twitter-lists" element={<TwitterList />} />
          <Route path="/twitter-memberof" element={<MemberOf />} />
          <Route path="/search" element={<Search />} />
          <Route path="/tweet-of-mine" element={<TweetOfMine />} />
          <Route path="/tweet-of-someone" element={<TweetOfSomeone />} />
          <Route path="/retweeted-tweet" element={<RetweetedTweet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search-suggestion" element={<SearchTwitter />} />
          <Route path="/setting-and-privacy" element={<SettingAndPrivacy />} />
          <Route path="/video-player" element={<VideoPlayer />} />
        </Routes>
    </BrowserRouter>
  );
};
export default App;
