import styled from 'styled-components';

import r_icon from '@/assets/img/r_icon.png';

export const DiscoverWrapper = styled.div`
  .bar {
    height: 30px;
    background-color: #C20C0C;
  }
`

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  top: -4px;
  .item {
    a {
      position: relative;
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;
      &:hover, &.active {
        text-decoration: none;
        background-color: #9B0909;
        border-radius: 20px;
      }
    }

    .icon {
      position: absolute;
      display: inline-block;
      width: 8px;
      height: 8px;
      top: 2px;
      background-size: cover;
      background-image: url(${r_icon});
    }
  }
`