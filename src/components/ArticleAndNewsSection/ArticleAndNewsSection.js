import './ArticleAndNewsSection.css'
import React from 'react'

import articleImage1 from '../../assets/images/article-image1.svg'
import articleImage2 from '../../assets/images/article-image2.svg'
import articleImage3 from '../../assets/images/article-image3.svg'
import dotsIcon from '../../assets/images/dots-icon.svg'
import ArticleBox from '../generics/ArticleBox'

const ArticleAndNewsSection = () => {
  return (
    <section className="article-news">
        <div className="container-articles">
            <h2>Article & News</h2>
            <div className="content-article-news">
                <h1>Get Every Single Articles & News</h1>
                <a className="btn-browse-articles" href="#">Browse Articles<i className="fa-solid fa-location-arrow"></i></a>
            </div>
            <div className="content-articles">
                <ArticleBox img={articleImage1} day="25" month="Mar" description="How To Use Digitalization In The Classroom" />
                <ArticleBox img={articleImage2} day="17" month="Mar" description="How To Implement Chat GPT In Your Projects" />
                <ArticleBox img={articleImage3} day="13" month="Mar" description="The Guide To Support Modern CSS Design" />
            </div>
            <div className="dots">
                <img src={dotsIcon}/>
            </div>
        </div>
    </section>
  )
}

export default ArticleAndNewsSection