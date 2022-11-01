import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="header">
  <a href="#default" class="logo"></a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Music</a>
    <a href="#about">News</a>
    <a href="#about"> GottiGang</a>
  </div>
</div>
    
       
      </header>
    <div className='body'>

   <p className='titulos'> Music </p>
   <button class="btn success">Spotify</button>
   <button class="btn info">Amazon Music</button>
   <button class="btn warning"> Youtube </button>
   <button class="btn danger">Deezer </button>
   <button class="btn default">Apple Music </button>
   


    </div>

    </div>
  );
}

export default App;
