import Header from "./components/Header";
import Hero from "./hero/Hero";
import Card from "../src/card/Card";
import "./app.css"


const App = () => {
  return (
    <div className="App ">
      <Header />
      <main className='container' >
        <Hero />
        <ul className='card-item-ul'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </main>
    </div>
  )
};
export default App;