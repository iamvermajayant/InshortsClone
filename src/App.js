import { useState , useEffect } from 'react';
import axios from "axios";
import './App.css';
import NavBar from './components/NavBar';
import NewsComponent from './components/NewsComponent/NewsComponent';
import apikey from './Data/config';
import Footer from './components/Footer/Footer';


function App() {
  const [category, setCategory] = useState("general");
  const [newsArray , setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState();
  const [loadMore, setLoadMore] = useState(20);
  
  useEffect(() =>{
    newsApi();
  },[newsResult, category])

   const newsApi = async () =>{
      try{
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`);
        setNewsArray(news.data.articles);
      }
      catch(err){
        console.log(err);
      }
   }

   console.log(newsArray);

  return (
    <div className="App">
      <NavBar setCategory={setCategory}/>
      <NewsComponent loadMore={loadMore} newsArray={newsArray} newsResult={newsResult}/>
      <Footer/>
    </div>
  );
}

export default App;
