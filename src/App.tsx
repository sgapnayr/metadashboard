import './App.css';
import { useState } from 'react'
import Nav from './Components/Nav/Nav';
import Ticker from './Components/Ticker/Ticker';
import TileTemplate from './Components/TileTemplate/TileTemplate';
import NewsColumns from './Components/News/NewsColumns';

const App: React.FC = () => {
  const [news, setNews] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [dateValue, setDateValue] = useState(5)
  const [newsCategory, setNewsCategory] = useState('')
  const [sliderActive, setSliderActive] = useState(true)
  const [dataName, setDataName] = useState('bitcoin')

  return (
    <div className="App">

      <Nav
        isActive={isActive}
        setIsActive={setIsActive} />

      <Ticker />

      <TileTemplate
        dateValue={dateValue}
        setDateValue={setDateValue}
        sliderActive={sliderActive}
        setSliderActive={setSliderActive}
        dataName={dataName}
        setDataName={setDataName}
      />

      <NewsColumns
        news={news}
        setNews={setNews}
        newsCategory={newsCategory}
        setNewsCategory={setNewsCategory} />

    </div>
  );
}

export default App;
