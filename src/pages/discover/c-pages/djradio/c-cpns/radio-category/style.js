import styled from 'styled-components';

import radio_slide from '@/assets/img/radio_slide.png';

export const RadioCategoryWrapper = styled.div`
    position: relative;
    margin-bottom: 20px;
    .box {
        .item {
            float: left;
            margin: 0 0 25px 33px;
            a { 
                display: block;
                width: 70px;
                height: 70px;
                background-position: 0 9999px;
                text-align: center;
                font-size: 12px;
                color: #888;
                .image {
                    width: 48px;
                    height: 48px;
                    margin: 2px auto 0;
                    background-position: 0 0;
                }

                &:hover {
                    text-decoration: none;
                    background: rgb(246, 247, 247);
                }
            }
        }

        
    }

    .slick-dots {
        .slick-active button{
            background: red!important;
        }
        li button {
            background: gray;
        }
    }
`

export const BannerControl = styled.div`
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    .btn {
        position: absolute;
        width: 20px;
        height: 30px;
        background-image: url(${radio_slide});
        background-color: transparent;
        cursor: pointer;
        transform: translateY(-50%);
        opacity: 0.08;
        &:hover {
            background-color: rgba(0, 0, 0, .1);
        }
    }
    .left {
        left: 10px;
        background-position: 0 -30px;;
    }
    .right {
        right: 10px;
        background-position: -30px -30px;
    }
`