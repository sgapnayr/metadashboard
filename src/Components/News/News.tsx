import './News.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'

interface Props {
    news: any[]
    setNews: React.Dispatch<React.SetStateAction<any[]>>
    newsCategory: any[]
    setNewsCategory: React.Dispatch<React.SetStateAction<any[]>>
}

const News: React.FC<Props> = ({ news, setNews, newsCategory, setNewsCategory, }) => {
    const [showMoreActive, setShowMoreActive] = useState<boolean>(false)
    const [index, setIndex] = useState(1)

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
        Axios.request(options).then(function (response) {
            setNews(response.data.technology);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const handleNewsCategory = (e: any) => {
        const { value } = e.target
        setNewsCategory(value.toLowerCase())
    }

    const handleShowMore = () => {
        if (!showMoreActive) {
            setShowMoreActive(true)
            setIndex(news.length)
        } else if (showMoreActive) {
            setShowMoreActive(false)
            setIndex(1)
        }
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
                        <option value="real-estate">Real Estate</option>
                        <option value="business">Business</option>
                        <option value="technology">Technology</option>
                    </select>
                </div>
            </div>

            <div className='News'>
                <div className="NewsList">
                    {news.slice(0, index).map((newsItem, idx) => {
                        return (
                            <div className="NewsCard" key={idx}>
                                {newsItem.title}
                                <p>
                                    {newsItem.url}
                                </p>
                            </div>
                        )
                    })}

                </div>
                <button className='ShowButton' onClick={handleShowMore}>{showMoreActive ? 'Show Less' : 'Show More'}</button>
            </div>
        </div>
    )
}

export default News