import React, { useState, useEffect } from "react";

function Greeting() {
  const [greetingText, setGreetingText] = useState("");
  useEffect(() => {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    if (currentHours < 12) {
      setGreetingText("Buenos días");
    } else if (currentHours < 18) {
      setGreetingText("Buenas tardes");
    } else {
      setGreetingText("Buenas noches");
    }
  }, []);

  return <h1 className="text-4xl pt-6">{greetingText}</h1>;


}

export default Greeting;
