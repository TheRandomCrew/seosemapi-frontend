import React from 'react';

function Card(props) {
    const { url, about, icon, iconColor, iconAnimation, title, description } = props;
    return (
        <div className="seo-card seo-card-100" style={{ backgroundImage: `url(${url})` }}>
            <div className="py-5 px-4">
                <div className="">
                    <div className="seo-div-title">
                        <i className={`fa ${icon} seo-animation-${iconAnimation}`}  style={{ marginRight: '.8em', fontSize: '1.5em', color: `${iconColor}` }}></i><h4 style={{ color: 'white' }}>{about}</h4>
                    </div>
                    <h3 className="seo-title-tb"><strong>{title}</strong></h3>
                    <p className="seo-text-tb">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;