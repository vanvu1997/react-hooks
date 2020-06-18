import React from 'react';
import { CLINIC_TYPE } from 'constants/Status';
import { Link } from 'react-router-dom'

const PanelClinic = (props) => {
    return (
        <div className="wp-box-content box-find">
            <div className="wp-title-box">
                <h2 className="h2-title">Find Panel Clinics</h2>
            </div>
            <div className="wp-content">
                <div className="wp-list-icon1">
                    <div className="wp-item-find">
                        <div className="img img-hover">
                            <Link to={`/find-panel-clinics/${CLINIC_TYPE[0].value}`}><img src="/images/icon1.png" alt="" /></Link>
                        </div>
                        <div className="text">
                            <span>{CLINIC_TYPE[0].name}</span>
                        </div>
                    </div>
                    <div className="wp-item-find el-disable">
                        <div className="img img-hover">
                            <Link to={`/find-panel-clinics/${CLINIC_TYPE[1].value}`} disabled><img src="/images/icon2.png" alt="" /></Link>
                        </div>
                        <div className="text">
                            <span>{CLINIC_TYPE[1].name}</span>
                        </div>
                    </div>
                    <div className="wp-item-find el-disable">
                        <div className="img img-hover">
                            <Link to={`/find-panel-clinics/${CLINIC_TYPE[2].value}`} disabled><img src="/images/icon3.png" alt="" /></Link>
                        </div>
                        <div className="text">
                            <span>{CLINIC_TYPE[2].name}</span>
                        </div>
                    </div>
                    <div className="wp-item-find">
                        <div className="img img-hover">
                            <Link to={`/find-panel-clinics/${CLINIC_TYPE[5].value}`}><img src="/images/icon4.png" alt="" /></Link>
                        </div>
                        <div className="text">
                            <span>{CLINIC_TYPE[5].name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PanelClinic;