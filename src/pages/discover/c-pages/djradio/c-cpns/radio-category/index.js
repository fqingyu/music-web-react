import React, { memo, useRef } from 'react';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import radio_bg from '@/assets/img/radio_bg.png';
import { RadioCategoryWrapper, BannerControl } from './style';
import { Carousel } from 'antd';


export default memo(function CMRadioCategory(props) {
    // inner state
    const {select} = props;
    
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
                            let borderStyle={}, iconStyle = {}, fontStyle = {};
                            if(item.id.toString() === select) {
                                iconStyle = {
                                    background: `url(${item.picWebUrl}) -48px 0`,
                                }
                                fontStyle = {
                                    color: "#d35757",
                                }
                                borderStyle = {
                                    background: `url(${radio_bg}) -70px 0`,
                                }
                            }
                            else {
                                iconStyle = {
                                    background: `url(${item.picWebUrl})`,
                                }
                            }

                            return (
                                <div className="item" key={item.name}>
                                    <NavLink to={`/discover/djradio/category?id=${item.id}`} style={borderStyle}>
                                        <div className="image" style={iconStyle}></div>
                                        <div style={fontStyle}>{item.name}</div>
                                    </NavLink>
                                </div>

                            )
                        })
                    }
                </div>
                <div className="box">
                    {
                        categories.slice(18, 20).map((item, index) => {
                            let borderStyle={}, iconStyle = {}, fontStyle = {};
                            if(item.id.toString() === select) {
                                iconStyle = {
                                    background: `url(${item.picWebUrl}) -48px 0`,
                                }
                                fontStyle = {
                                    color: "#d35757",
                                }
                                borderStyle = {
                                    background: `url(${radio_bg}) -70px 0`,
                                }
                            }
                            else {
                                iconStyle = {
                                    background: `url(${item.picWebUrl})`,
                                }
                            }

                            return (
                                <div className="item" key={item.name}>
                                    <NavLink to={`/discover/djradio/category?id=${item.id}`} style={borderStyle}>
                                        <div className="image" style={iconStyle}></div>
                                        <div style={fontStyle}>{item.name}</div>
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
