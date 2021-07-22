import styled from 'styled-components';

export const PlayListWrapper = styled.div`
    position: absolute;
    left: 50%;
    bottom: 47px;
    width: 986px;
    height: 301px;
    margin-left: -493px;
`

export const PlayListHeader = styled.div`
    background-position: 0 0;
    height: 41px;
    padding: 0 5px;
    h4 {
        position: absolute;
        left: 25px;
        top: 0;
        height: 39px;
        line-height: 39px;
        font-size: 14px;
        color: #e2e2e2;
        font-weight: 900;
    }

    .addall {
        position: absolute;
        left: 398px;
        top: 12px;
        height: 15px;
        line-height: 15px;
        cursor: pointer;
        color: #ccc;
        .icon-addall {
            float: left;
            margin: 1px 6px 0 0;
            width: 16px;
            height: 16px;
            background-position: -24px 0;
        }
        &:hover {
            .icon-addall {
                background-position: -24px -20px;
            }
        }
    }

    .split-line {
        position: absolute;
        top: 13px;
        left: 477px;
        height: 15px;
        border-left: 1px solid #000;
        border-right: 1px solid #2c2c2c;
    }

    .clear {
        background: transparent;
        position: absolute;
        left: 490px;
        top: 12px;
        height: 15px;
        line-height: 15px;
        cursor: pointer;
        color: #ccc;
        .icon-delete {
            float: left;
            margin: 1px 6px 0 0;
            width: 13px;
            height: 16px;
            background-position: -51px 0;
        }
        &:hover {
            .icon-delete {
                background-position: -51px -20px;
            }
        }
    }

    .title {
        position: absolute;
        left: 595px;
        top: 0;
        width: 346px;
        text-align: center;
        height: 39px;
        line-height: 39px;
        color: #fff;
        font-size: 14px;
    }

    .close {
        position: absolute;
        top: 6px;
        right: 8px;
        width: 30px;
        height: 30px;
        overflow: hidden;
        text-indent: -999px;
        cursor: pointer;
        background-position: -195px 9px;
        &:hover {
            background-position: -195px -21px;
        }
    }
    
`

export const PlayListContent = styled.div`
    position: absolute;
    left: 0;
    top: 41px;
    width: 986px;
    height: 260px;
    overflow: hidden;
    background-position: -1014px 0;
    background-repeat: repeat-y;
    .song_image {
        position: absolute;
        left: 2px;
        top: -360px;
        z-index: 1;
        width: 980px;
        height: auto;
        opacity: .2;
    }

    .mask1 {
        position: absolute;
        left: 2px;
        top: 0;
        z-index: 2;
        width: 558px;
        height: 260px;
        background: #121212;
        opacity: .5;
    }

    .left {
        position: absolute;
        left: 2px;
        top: 0;
        z-index: 4;
        height: 260px;
        width: 553px;
        overflow: hidden;
        ul {
            color: #ccc;
            overflow: hidden;
            li.playing {
                background-color: rgba(0,0,0,0.3);
            }
        }
    }

    .border-line {
        position: absolute;
        left: 555px;
        top: -1px;
        z-index: 2;
        width: 6px;
        height: 260px;
        background: #000;
        opacity: .5;
    }

    .ask {
        position: absolute;
        right: 10px;
        top: 5px;
        cursor: pointer;
        z-index: 5;
        .ask {
            display: inline-block;
            width: 21px;
            height: 21px;
            background-position: 0 -50px;
            text-indent: 0;
            &:hover {
                background-position: -24px -50px;
            }
        }
    }

    .mask2 {
        position: absolute;
        left: 560px;
        top: 0;
        z-index: 3;
        width: 420px;
        height: 250px;
        background: #121212;
        opacity: .01;
    }

    .border-line2 {
        left: auto;
        right: 2px;
        position: absolute;
        top: -1px;
        z-index: 2;
        width: 6px;
        height: 260px;
        background: #000;
        opacity: .5;
    }

    .list-lyric {
        position: absolute;
        right: 40px;
        top: 0;
        z-index: 4;
        margin: 21px 0 20px 0;
        height: 219px;
        width: 354px;
        overflow: hidden;
        .list-lyric-wrapper {
            transition: transform 330ms ease-in-out;
            .lyric {
                color: #989898;
                word-wrap: break-word;
                text-align: center;
                line-height: 32px;
                height: auto !important;
                min-height: 32px;
                transition: color 0.7s linear;
                &.active {
                    color: #fff;
                    font-size: 14px;
                    -webkit-transition: color 0.7s linear;
                    -moz-transition: color 0.7s linear;
                    -o-transition: color 0.7s linear;
                    transition: color 0.7s linear;
                }
            }
        }
        
    }

`