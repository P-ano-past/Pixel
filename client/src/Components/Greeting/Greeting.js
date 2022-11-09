import { React, useState, useEffect, useContext } from "react";
import { UserContext } from "../../Utils/UserContext/UserContext";

export default function Greeting() {
  const [greetingPhrase, setGreetingPhrase] = useState("");
  const profile = useContext(UserContext);

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
  }, [phrases]);

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
