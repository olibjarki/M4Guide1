import { useState, useEffect } from "react"

import Button from "./button"
import Header from "./Header"
import Card from "./card"

function App() {
  const [jokes, setJokes] = useState<Array<{icon_url: string, value: string, id: string}>>([])
    useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(res=> res.json())
    .then(data => {
      setJokes([data])
    })
    }, [])


/*
 const handleClick = async () => {
    try {
      const data = await (await fetch("https://api.chucknorris.io/jokes/random")).json()
        setJokes([data])
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  }
*/

  return (
    <>
      <Header
        Greeting="Hello"
        Person="World"/>
      
      {jokes.map((joke) =>{
        return(
          <div 
            className="flex items-center gap-8 border-2 border-gray-500 rounded-2xl mt-6 mx-8 p-2"
            key={joke.id}>
              <img
                className="hover:cursor-pointer"
                src={joke.icon_url} 
                alt="Icon" />
              <h1 className="text-xl font-medium">
                {joke.value}
              </h1>
          </div>
        )
      })}
      
      <div className="flex justify-center mt-8">
        <Button 
          title="Click me!"
          alertMessage="Congratulations! You clicked the button"/>
      </div>
      <div className="flex justify-center gap-16 mt-10">
        <Card
          title="Funny Fish"
          text="funny fish"
          src="https://media.tenor.com/ufoEKwfMGEoAAAAM/fish-silly-fish.gif"
          />
        <Card
          title="Happy horse"
          text="happy horse"
          src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/B875/production/_102512274_gettyimages-518360318.jpg.webp"
          />
        <Card
          title="Confused cat"
          text="confused cat"
          src="https://i.pinimg.com/736x/55/25/9a/55259a660d54af15267578aeaa25db4c.jpg"
          />
      </div>
      <p className="text-2xl font-medium ml-40 mt-12">
        What is your favorite color?
      </p>
      <div className="flex justify-center gap-12 mt-8">
        <Button
          title="Cyan"
          variant="cyan"
          alertMessage="Your favorite color is cyan"/>
        <Button
          title="Red"
          variant="red"
          alertMessage="Your favorite color is red"/>
        <Button
          title="Green"
          variant="green"
          alertMessage="Your favorite color is green"/>
        <Button
          title="Purple"
          variant="purple"
          alertMessage="Your favorite color is purple"/>
        <Button
          title="Yellow"
          variant="yellow"
          alertMessage="Your favorite color is yellow"/>
        <Button
          title="Gray"
          variant="gray"
          alertMessage="Your favorite color is gray"/>
      </div>
      <div className="h-20"></div>
    </>
  )
}

export default App
