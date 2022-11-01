import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  <div class="header">
       
    <div className='header-left'>
      <img src="TiagoPZK.jpeg" alt="Tiago logo" height="100" width="100"   />
    </div>
    
  
    
    <div class="header-right">
      <a class="active" href="#home">Home</a>
      <a href="#contact">Music</a>
      <a href="#about">News</a>
      <a href="#about"> GottiGang</a>
    </div>
</div>
     </header>
    <div className='body'>
    <img src='Portales.jpeg' alt="Album portales" height="100%" width="100%"/> 
   <p className='titulos'> Music </p>
  <form className='botones'>
   <a  class="btn success" href="https://open.spotify.com/artist/5Y3MV9DZ0d87NnVm56qSY1"> Spotify </a>
   <a  class="btn info" href="https://music.amazon.com/artists/B07G11GRHM/tiago-pzk"> Amazon Music </a>
   <a  class="btn warning" href="https://www.youtube.com/c/TiagoPZK/videos"> Youtube </a>
   <a  class="btn danger" href="https://www.deezer.com/mx/artist/49364062"> Deezer </a>
   <a  class="btn default" href="https://music.apple.com/us/artist/tiago-pzk/1418625625?l=es"> Apple Music </a>

   
   
   </form>
   <img src='Spotify.jpeg' alt="Album portales" height="100%" width="100%"/> 

    </div>

    </div>
  );
}

export default App;
