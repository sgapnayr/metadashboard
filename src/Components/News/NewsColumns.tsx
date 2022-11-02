import './News.css'
import News from "./News"

interface Props {
    news: any[]
    setNews: React.Dispatch<React.SetStateAction<any[]>>
    newsCategory: any[]
    setNewsCategory: React.Dispatch<React.SetStateAction<any[]>>
}

const NewsColumns: React.FC<Props> = ({ news, setNews, newsCategory, setNewsCategory }) => {
    return (
        <div className="NewsColumns">

            <News
                news={news}
                setNews={setNews}
                newsCategory={newsCategory}
                setNewsCategory={setNewsCategory} />
            <News
                news={news}
                setNews={setNews}
                newsCategory={newsCategory}
                setNewsCategory={setNewsCategory} />
            <News
                news={news}
                setNews={setNews}
                newsCategory={newsCategory}
                setNewsCategory={setNewsCategory} />

        </div>
    )
}

export default NewsColumns