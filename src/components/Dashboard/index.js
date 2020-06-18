import React, { useEffect } from 'react';
import Profile from './Profile';
import PanelClinic from './PanelClinic';
import { connect } from 'react-redux'
import QuickLink from './QuickLink';
import HealthArticles from './HealthArticles';
import { getListArticles } from 'actions/Article';

const Dashboard = (props) => {
    useEffect(() => {
        props.getListArticles();
    }, [])

    return (
        <div className="row">
            <div className="col-xl-8 col-lg-8">
                <div className="wp-left">

                    <Profile />

                    <PanelClinic />

                    <QuickLink />
                </div>
            </div>
            <div className="col-xl-4 col-lg-4">
                <div className="wp-right">

                    <HealthArticles />

                </div>
            </div>
        </div>)
};

export default connect(null, { getListArticles })(Dashboard);