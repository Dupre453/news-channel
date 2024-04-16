import React from 'react';

const ActualThemes = () => {
    return (
        <div className='current-block'>
            <div className='current-block__title'>Актуальные темы</div>
            <ul>
                <li>
                    <span className='title-post'>Белка-летяга</span>
                    <div className='current-block__post'>постов:<span>13278</span></div>
                </li>
                <li>
                    <span className='title-post'>#Билли</span>
                    <div className='current-block__post'>постов:<span>12208</span></div>
                </li>
                <li>
                    <span className='title-post'>Россия</span>
                    <div className='current-block__post'>постов:<span>10976</span></div>
                </li>
            </ul>
        </div>
    );
};

export default ActualThemes;