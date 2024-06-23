
import { Navbar } from './components/navbar/navbar';
import {Hero} from "./components/Hero/Hero";
import { CardSection } from './components/cardSection/CardSection';






function App() {
  

  
  return (
  
    <div className="App">
    
      <Navbar/>
      <Hero  text1="100 Thousand Songs, ad-free" text2="Over thousands podcast episodes"/>
      <CardComponent/>
    </div>
   
  );
}

export default App;
