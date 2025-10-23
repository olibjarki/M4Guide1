import Button from "./button"
import Header from "./Header"
import Card from "./card"

function App() {

  return (
    <>
      <Header
        Greeting="Hello"
        Person="World"/>
      <div className="flex justify-center mt-10">
        <Button 
          title="Click me!"
          />
      </div>
      <div className="flex justify-center gap-16 mt-10">
        <Card
          title="Funny Fish"
          text="funny fish"
          src="https://media.tenor.com/ufoEKwfMGEoAAAAM/fish-silly-fish.gif"/>
        <Card
          title="Happy horse"
          text="happy horse"
          src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/B875/production/_102512274_gettyimages-518360318.jpg.webp"/>
        <Card
          title="Confused cat"
          text="confused cat"
          src="https://i.pinimg.com/736x/55/25/9a/55259a660d54af15267578aeaa25db4c.jpg"/>
      </div>
      <p className="text-2xl font-medium ml-40 mt-12">
        What is your favorite color?
      </p>
      <div className="flex justify-center gap-12 mt-8">
        <Button
          title="Cyan"
          variant="cyan"/>
        <Button
          title="Red"
          variant="red"/>
        <Button
          title="Green"
          variant="green"/>
        <Button
          title="Purple"
          variant="purple"/>
        <Button
          title="Yellow"
          variant="yellow"/>
        <Button
          title="Gray"
          variant="gray"/>
      </div>
    </>
  )
}

export default App
