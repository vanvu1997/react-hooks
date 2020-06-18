import React from 'react';
import { connect } from 'react-redux';
import { formatFullDateTime } from 'libs/parse_time';
// import { AVT_DEFAULT } from 'config/url';
import Avatar from 'components/Common/Avatar';

const Profile = (props) => {
    return (
        <div className="wp-box-content box-profile">
            <div className="wp-title-box">
                <h2 className="h2-title">Profile</h2>
            </div>
            <div className="wp-content d-flex align-items-center">
                <div className="left">
                    <div className="img">
                        {/* <a href="/#"> */}
                            <Avatar img={props.img} />
                        {/* </a> */}
                    </div>
                    <div className="text">
                        <h3 className="h3-title">{props.name}</h3>
                        {/* <div className="post">
                            UI UX
                        </div> */}
                    </div>
                </div>
                <div className="right">
                    <h2 className="h2-title">Hello {props.name},</h2>
                    <div className="post">
                        <p>What would you want to do today?</p>
                        <span className="date-time">{formatFullDateTime(new Date())}, Singapore</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapDispatchToProps = {

};

const mapStateToProps = ({ profile }) => {
    let { accountdetail } = profile ;
    return {
        img: accountdetail.img,
        name: accountdetail.name
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);