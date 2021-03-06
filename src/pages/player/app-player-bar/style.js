import styled from 'styled-components';
import progress_bar from '@/assets/img/progress_bar.png';
import sprite_icon from '@/assets/img/sprite_icon.png';
import playbar_sprite from '@/assets/img/playbar_sprite.png';

export const PlayerBarWrapper = styled.div`
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 0;
    height: 52px;
    background-position: 0 0;
    background-repeat: repeat;
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        height: 47px;
        z-index: 5;
    }
`

export const Control = styled.div`
    display: flex;
    align-items: center;
    .prev, .next {
        width: 28px;
        height: 28px;
        cursor: pointer;
    }
    .prev {
        background-position: 0 -130px;
    }
    .prev:hover {
        background-position: -30px -130px;
    }

    .play {
        cursor: pointer;
        width: 36px;
        height: 36px;
        margin: 0 8px;
        background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};
    }
    .play:hover {
        background-position: ${props => props.isPlaying ? "-40px -165px" : "-40px -204px"};
    }

    .next {
        background-position: -80px -130px;
    }
    .next:hover {
        background-position: -110px -130px;
    }
`

export const PlayInfo = styled.div`
    display: flex;
    width: 642px;
    align-items: center;
    img {
        width: 34px;
        height: 34px;
        border-radius: 5px;
    }
  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;
    .song {
        color: #e1e1e1;
        position: relative;
        top: 8px;
        left: 8px;
        .song-name {
            color: #e8e8e8;
        }
        .singer-name {
            color: #a1a1a1;
            margin-left: 10px;
        }
        text-decoration: #e8e8e8;
    }
    .progress {
        display: flex;
        align-items: center;
        .ant-slider {
            width: 493px;
            margin-right: 10px;
            .ant-slider-rail {
                height: 9px;
                background: url(${progress_bar}) right 0;
                z-index: -2;
            }
            .ant-slider-track {
                height: 9px;
                background: url(${progress_bar}) left -66px;
            }

            .ant-slider-step {
                height: 9px;
                background: url(${progress_bar}) right -30px;
                width: ${props => props.bufferPercentage}%!important;
                z-index: -1;
            }

            .ant-slider-handle {
                width: 22px;
                height: 24px;
                border: none;
                margin-top: -7px;
                background: url(${sprite_icon}) 0 -250px;
            }

            .ant-slider-handle:hover {
                background-position: 0 -280px;
            }
        }
        .time {
            .now-time {
                color: #e1e1e1;
        }
            .divider {
                margin: 0 3px;
            }
        }
    }
  }
`

export const Operator = styled.div`
    display: flex;
    position: relative;
    top: 5px;
    .left {
        height: 24px;
    }
    .btn {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    .in:hover {
        background-position-y: -25px;
    }
  
    .favor {
        background-position: -88px -163px;
    }
    .favor:hover {
        background-position: -88px -189px;
    }

    .share {
        background-position: -114px -163px;
    }
    .share:hover {
        background-position: -114px -189px;
    }

    .right {
        display: flex;
        align-items: center;
        width: 126px;
        padding-left: 13px;
        background-position: -147px -248px;


        .volume-wrapper {
            display: ${props => props.volumeShowUp ? null : "none"};
            position: absolute;
            bottom: 40px;
            width: 32px;
            height: 113px;
            background-position: 0 -503px;
            .volume-slider {
                display: inline-block;
                position: absolute;
                bottom: 3px;
                height: 93px;
                width: 32px;

                .ant-slider-rail {
                    background: transparent;
                }

                .ant-slider-track {
                    background: url(${playbar_sprite});
                    background-position: -40px bottom;
                }

                .ant-slider-handle {
                    width: 22px;
                    height: 24px;
                    border: none;
                    margin-top: -7px;
                    margin-left: -7px;
                    background: url(${sprite_icon}) -40px -250px;
                }

                .ant-slider-handle:hover {
                    background-position: -40px -280px;
                }
            }
        }
        

        .volume {
            background-position: -2px -248px;
        }
        .volume:hover {
            background-position: -31px -248px;
        }

        .loop {
            background-position: ${props => {
                switch (props.sequence) {
                    case 1:
                        return "-66px -248px";
                    case 2:
                        return "-66px -344px";
                    default:
                        return "-3px -344px";
                }
            }};
        }
        .loop:hover {
            background-position: ${props => {
                switch (props.sequence) {
                    case 1:
                        return "-93px -248px";
                    case 2:
                        return "-93px -344px";
                    default:
                        return "-33px -344px";
                }
            }};
        }

        .playlist {
            padding-left: 18px;
            text-align: center;
            color: #ccc;
            width: 59px;
            background-position: -42px -68px;
        }

        .playlist:hover {
            background-position: -42px -98px;
        }

        .songs-count {
            padding-left: 10px;
            color: #666;
        }
    }
`