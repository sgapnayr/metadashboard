import './App.css';
import { useState } from 'react'
import Nav from './Components/Nav/Nav';
import Ticker from './Components/Ticker/Ticker';
import TileTemplate from './Components/TileTemplate/TileTemplate';
import NewsColumns from './Components/News/NewsColumns';

const App: React.FC = () => {
  const [news, setNews] = useState<any[]>([])
  const [isActive, setIsActive] = useState<boolean>(false)
  const [dateValue, setDateValue] = useState<number>(30)
  const [newsCategory, setNewsCategory] = useState<any[]>(['main'])
  const [sliderActive, setSliderActive] = useState<boolean>(true)
  const [dataName, setDataName] = useState<string>('bitcoin')
  const [toggle, setToggle] = useState<boolean>(true);

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
        toggle={toggle}
        setToggle={setToggle}
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
