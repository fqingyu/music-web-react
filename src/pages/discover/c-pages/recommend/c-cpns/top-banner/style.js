import styled from 'styled-components';

import download from '@/assets/img/download.png';
import banner_sprite from '@/assets/img/banner_sprite.png';

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;
  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`

export const BannerRight = styled.div`
  width: 254px;
  height: 270px;
  background: url(${download});

  .side-download {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -99999px;
    &:hover {
      background: url(${download}) no-repeat 0 0;
      background-position: 0 -290px;
    }
  }



  .description {
    margin: 6px auto;
    text-align: center;
    color: #8d8d8d;
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
    width: 37px;
    height: 63px;
    background-image: url(${banner_sprite});
    background-color: transparent;
    cursor: pointer;
    transform: translateY(-50%);
    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`