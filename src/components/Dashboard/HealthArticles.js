import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getListArticles } from 'actions/Article';
import { Link } from 'react-router-dom';
const HealthArticles = (props) => {
    const { articleList } = props;
    const articleShow = articleList.slice(0, 3);

    // useEffect(() => {
    //     props.getListArticles();
    // }, [])

    return (
        <div className="wp-box-content box-sidebar">
            <div className="wp-title-box">
                <h2 className="h2-title">Health Articles and Videos</h2>
            </div>
            <div className="wp-content">
                <div className="wp-list-img-sidebar">
                    {articleShow.map((item, idx) => {
                        return (
                            <div className="wp-item-img-sidebar img-cover img-hover" key={idx}>
                                <Link to={`/articles/${item.uuid}`}><img src={item.imageURL} alt="" /></Link>
                            </div>
                        )
                    })}
                </div>
                <div className="btn-seeall">
                    <Link to="/articles" className="btn">See All Articles and Videos</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ articles }) => {
    return {
        articleList: articles.articleList
    }
}

export default Dashboard;