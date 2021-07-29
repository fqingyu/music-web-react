import React, { memo, useRef } from 'react';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { RadioCategoryWrapper, BannerControl } from './style';
import { Carousel } from 'antd';


export default memo(function CMRadioCategory() {

    // inner state

    // redux hooks
    const { categories } = useSelector((state) => ({
        categories: state.getIn(["djradio", "categories"])
    }))

    // other hooks
    const bannerRef = useRef();

    return (
        <RadioCategoryWrapper>
            <Carousel ref={bannerRef} dots>
                <div className="box">
                    {
                        categories.slice(0, 18).map((item, index) => {
                            const backgroudImage = item.picWebUrl;
                            return (
                                <div className="item" key={item.name}>
                                    <NavLink to={`/discover/djradio/category?id=${item.id}`}>
                                        <div className="image" style={{ backgroundImage: `url(${backgroudImage})` }}></div>
                                        <div>{item.name}</div>
                                    </NavLink>
                                </div>

                            )
                        })
                    }
                </div>
                <div className="box">
                    {
                        categories.slice(18, 20).map((item, index) => {
                            const backgroudImage = item.picWebUrl;
                            return (
                                <div className="item" key={item.name}>
                                    <NavLink to={`/discover/djradio/category?id=${item.id}`}>
                                        <div className="image" style={{ backgroundImage: `url(${backgroudImage})` }}></div>
                                        <div>{item.name}</div>
                                    </NavLink>
                                </div>

                            )
                        })
                    }
                </div>
            </Carousel>
            <BannerControl>
                <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                <button className="btn right" onClick={e => bannerRef.current.next()}></button>
            </BannerControl>
        </RadioCategoryWrapper>
    )
})
