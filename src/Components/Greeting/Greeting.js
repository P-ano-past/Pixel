import { React, useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../../Utils/UserContext/UserContext";

export default function Greeting() {
  const [greetingPhrase, setGreetingPhrase] = useState("");
  const [UNC, setUNC] = useState("");
  const [userNameGet, setUserNameGet] = useState("");
  const profile = useContext(UserContext);

  // console.log("profile", profile);
  // console.log("UserContext", UserContext);

  const phrases = [
    "Hello",
    "Greetings",
    "Hows it going",
    "Welcome",
    "Whats up",
    "Yo",
    "Hey",
    "Sup",
    "Hiya",
    "Ahoy",
    "Howdy",
  ];

  useEffect(() => {
    const random = Math.floor(Math.random() * phrases.length);
    setGreetingPhrase(phrases[random]);
    setUNC(profile);
  });

  return (
    <div
      onClick={() => {
        console.log("You clicked for the username", profile.userProf.username);
      }}
    >
      {greetingPhrase} {profile.userProf.username}!
    </div>
  );
}
