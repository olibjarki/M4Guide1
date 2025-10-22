import Button from "./button"
import Header from "./Header"
import Card from "./card"

function App() {

  return (
    <>
      <Header/>
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold my-8">Hello World</h1>
      </div>
      <div className="flex justify-center">
        <Button/>
      </div>
      <div className="ml-40 mt-10">
        <Card/>
      </div>
    </>
  )
}

export default App
