import React from 'react';
import SEO from './styles/card.module.css';

const Card = ({url, about, icon, iconColor, iconAnimation, title, description}) => (
    <div className={`${SEO.card}`} style={{ backgroundImage: `url(${url})` }}>
        <div className="py-5 px-4">
            <div>
                <div className={`SEO-black-b ${SEO.about}`}>
                    <i className={`fa ${icon} SEO-animation-${iconAnimation}`} style={{ marginRight: '.8em', fontSize: '1.5em', color: `${iconColor}` }}></i>
                    <h4 style={{ color: 'white' }}>{about}</h4>
                </div>
                <div className={`${SEO.cardText}`}>
                    <h3><strong>{title}</strong></h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
);

export default Card;