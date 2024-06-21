
import { Navbar } from './components/navbar/navbar';
import {Hero} from "./components/Hero/Hero";


function App({text1,text2}) {
  return (
    <div className="App">
      <Navbar/>
      <Hero  text1="100 Thousand Songs, ad-free" text2="Over thousands podcast episodes"/>
    </div>
  );
}

export default App;
