import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {
   
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumbnaiUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/2/6/e/426ea55a0187b7e217d605f80e6ad94d.jpg'
        },
        {
            id: 2,
            name: 'Rap Việt',
            thumbnaiUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/2/6/e/426ea55a0187b7e217d605f80e6ad94d.jpg'
        },
        {
            id: 3,
            name: 'Nhạc Trào Lưu Thinh Hành',
            thumbnaiUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/2/6/e/426ea55a0187b7e217d605f80e6ad94d.jpg'
        }
    ];
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;