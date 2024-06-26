import React, { useEffect,useState } from 'react';

import { Navbar } from './components/navbar/navbar';
import {Hero} from "./components/Hero/Hero";
import { CardSection } from "../src/components/cardSection/CardSection";
import {getTopsAlbumData,getNewSongsData,getSongData} from "./api/api";
import AccordionSection from "../src/components/accordian/Accordian"






function App() {
  const [topSongsData, setTopSongsData] = useState([]);
  const [newSongsData, setNewSongsData] = useState([]);
  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    (async () => {
      const topSongsData = await getTopsAlbumData();
      setTopSongsData(topSongsData);

      const newSongsData = await getNewSongsData();
      setNewSongsData(newSongsData);

      const songsData = await getSongData();
      setSongsData(songsData);
    })();
  }, []);
  

  
  return (
  
    <div className="App">
    
      <Navbar/>
      <Hero  text1="100 Thousand Songs, ad-free" text2="Over thousands podcast episodes"/>
      <CardSection name="Top Albums" songsData={topSongsData}/>
      <CardSection name ="New Albums" songsData={newSongsData}/>
      <CardSection name ="Songs" songsData={songsData} showFilters/>
      <AccordionSection/>
      
    </div>
   
  );
}

export default App;
