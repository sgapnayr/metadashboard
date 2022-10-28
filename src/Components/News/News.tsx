import './News.css'
import Axios from 'axios'
import { useEffect } from 'react'

interface Props {
    news: any[]
    setNews: React.Dispatch<React.SetStateAction<any[]>>
    newsCategory: string
    setNewsCategory: React.Dispatch<React.SetStateAction<string>>
}

const News: React.FC<Props> = ({ news, setNews, newsCategory, setNewsCategory, }) => {
    const newsUrl = 'https://newsdata.io/api/1/news?apikey=pub_1122295a0600dd09ce2e7948214b07ef822fb&q=Real%20Estate '

    const options = {
        method: 'GET',
        url: 'https://ny-times-news-titles-and-urls.p.rapidapi.com/news',
        headers: {
            'X-RapidAPI-Key': '2a5ae053bdmsh289fd6e9e075512p1bb69djsn1890178e4707',
            'X-RapidAPI-Host': 'ny-times-news-titles-and-urls.p.rapidapi.com'
        }
    };


    async function GetNews() {
        // await Axios.get(newsUrl).then(res => console.log(res.data.results))
        Axios.request(options).then(function (response) {
            setNews(response.data.main);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const handleNewsCategory = (e: any) => {
        const { value } = e.target
        setNewsCategory(value.toLowerCase())
    }

    useEffect(() => {
        GetNews()
    }, [])

    return (
        <div className='NewsColumn'>
            <div className="NewsHeading">
                <div className="NewsTitle">
                    Category:
                    <select name="" id="" onChange={handleNewsCategory}>
                        <option value="technology">Technology</option>
                        <option value="business">Business</option>
                        <option value="commercial">Commercial</option>
                    </select>
                </div>
            </div>

            <div className='News'>
                <div className="NewsList">

                    {news.map(newsItem => {
                        return (
                            <>
                                <div className="NewsCard">
                                    {newsItem.title}
                                </div>
                            </>
                        )
                    })}

                    {/* {news.map(newsItem => {
                        return (
                            <>
                                <div className="NewsCard" key={newsItem}>
                                    <img src={newsItem.image_url} className={newsItem.image_url ? 'NewsImage' : 'none'} alt="News Image" />
                                    <h2>{newsItem.title}</h2>
                                    <p className='NewsInfo'>{newsItem.content ? newsItem.content?.slice(0, 200) + ' [...]' : null}</p>
                                </div>
                            </>
                        )
                    })} */}
                </div>
            </div>
        </div>
    )
}

export default News