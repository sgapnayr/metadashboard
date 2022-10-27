import './News.css'
import Axios from 'axios'
import { useEffect } from 'react'

interface Props {
    news: any[]
    setNews: React.Dispatch<React.SetStateAction<never[]>>
    newsCategory: string
    setNewsCategory: React.Dispatch<React.SetStateAction<string>>
}

const News: React.FC<Props> = ({ news, setNews, newsCategory, setNewsCategory, }) => {
    const newUrl = 'https://newsdata.io/api/1/news?apikey=pub_1122295a0600dd09ce2e7948214b07ef822fb&q=Real%20Estate '

    async function GetNews() {
        await Axios.get(newUrl).then(res => setNews(res.data.results))
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
                                    <img src={newsItem.image_url} className={newsItem.image_url ? 'NewsImage' : 'none'} alt="" />
                                    <h2>{newsItem.title}</h2>
                                    <p className='NewsInfo'>{newsItem.content ? newsItem.content?.slice(0, 200) + ' [...]' : null}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default News