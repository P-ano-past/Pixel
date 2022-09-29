import { React, useState, useEffect } from "react";

export default function Greeting() {
  const [greetingPhrase, setGreetingPhrase] = useState("");

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
  }, []);

  return <div>{greetingPhrase}</div>;
}
