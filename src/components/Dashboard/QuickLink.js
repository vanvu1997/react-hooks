import React from 'react';
import { Link } from 'react-router-dom';
const QuickLink = (props) => {
    return (
        <div className="wp-box-content box-quick">
            <div className="wp-title-box">
                <h2 className="h2-title">Quick links</h2>
            </div>
            <div className="wp-content">
                <div className="wp-list-icon1">
                    <div className="wp-item-find">
                        <div className="img img-hover">
                            <Link to="/request-elog"><img src="/images/icon5.png" alt="" /></Link>
                        </div>
                        <div className="text">
                            <span>Request Letter Of Guarantee</span>
                        </div>
                    </div>
                    <div className="wp-item-find">
                        <div className="img img-hover">
                            <Link to="/submit-claims"><img src="/images/icon6.png" alt="" /></Link>
                        </div>
                        <div className="text">
                            <span>Submit Claims</span>
                        </div>
                    </div>
                    <div className="wp-item-find">
                        <div className="img img-hover">
                            <Link to="/ecards"><img src="/images/icon7.png" alt="" /></Link>
                        </div>
                        <div className="text">
                            <span>Access my eCard</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default QuickLink;