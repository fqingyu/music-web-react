import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopBannerAction } from '../../store/actionCreators';

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';
import { Carousel } from 'antd';

export default memo(function CMTopBanner() {
    // inner state
    const [currentIndex, setCurrentIndex] = useState(0);

    // redux hooks
    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual);
    const dispatch = useDispatch();
    
    // ohter hooks
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch]);

    const bannerRef = useRef();
    const bannerChange = useCallback((from, to) => {
        setCurrentIndex(to);
    }, []);

    const bgImage = topBanners[currentIndex] && 
    (topBanners[currentIndex].imageUrl.indexOf("imageView") === -1 ? topBanners[currentIndex].imageUrl + "?imageView&blur=40x20" : topBanners[currentIndex].imageUrl + "&blur=40x20") ;

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item, index) => {
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                    <a className="side-download" href="https://music.163.com/#/download">下载客户端</a>
                    <p className="description">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
