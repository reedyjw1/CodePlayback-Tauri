import './App.css';
import HomeComponent from './components/home/HomeComponent';

function App() {

  function setBgColorCallback(color) {
    console.log("Chaning color")
    document.getElementsByTagName("body")[0].style = `background-color: ${color};`
    document.getElementsByTagName("html")[0].style = `background-color: ${color};`
  }

  return (
    <div>
      <HomeComponent bgCallback={setBgColorCallback} />
    </div>
  );
}

export default App;
