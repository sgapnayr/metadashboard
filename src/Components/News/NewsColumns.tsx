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
                setNewsCategory={setNewsCategory}
            // apiURL={'https://ny-times-news-titles-and-urls.p.rapidapi.com/news'}
            // apiHeader={'ny-times-news-titles-and-urls.p.rapidapi.com'}
            />
            <News
                news={news}
                setNews={setNews}
                newsCategory={newsCategory}
                setNewsCategory={setNewsCategory}
            // apiURL={'https://ny-times-news-titles-and-urls.p.rapidapi.com/news'}
            // apiHeader={'ny-times-news-titles-and-urls.p.rapidapi.com'}
            />

        </div>
    )
}

export default NewsColumns