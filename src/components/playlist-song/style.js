import styled from 'styled-components';

export const PlayListSongWrapper = styled.li`
    float: left;
    width: 100%;
    display: flex;
    color:  ${props => props.isPlaying ? "white" : "#9b9b9b"};
    .col {
        padding-left: 10px;
        height: 28px;
        line-height: 28px;
        overflow: hidden;
        cursor: pointer;
    }

    .col-1 {
        width: 20px;
        .play-icon {
            display: block;
            margin-top: 8px;
            width: 10px;
            height: 13px;
            background-position: -182px 0;
        }
    }
    
    .col-2 {
        width: 256px;
    }

    .col-3 {
        padding-left: 0px;
        display: flex;
        opacity: 0;
        width: 100px;
        height: 23px;
        .icon-add {
            margin: 7px 0 0 10px;
            text-indent: -9999px;
            width: 16px;
            background-position: -24px 0;
            &:hover {
                background-position: -24px -20px;
            }
        }

        .icon-share {
            margin: 7px 0 0 10px;
            text-indent: -9999px;
            width: 14px;
            background-position: 0 0;
            &:hover{
                background-position: 0 -20px;
            }
        }

        .icon-download {
            margin: 7px 0 0 10px;
            text-indent: -9999px;
            width: 14px;
            background-position: -57px -50px;
            &:hover{
                background-position: -80px -50px;
            }
        }

        .icon-delete {
            margin: 7px 0 0 10px;
            text-indent: -9999px;
            width: 13px;
            background-position: -51px 0;
            &:hover{
                background-position: -51px -20px;
            }
        }
    }

    .col-4 {
        width: 80px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        a {
            color:  ${props => props.isPlaying ? "white" : "#9b9b9b"};
        }
    }

    .col-5 {
        width: 45px;
    }

    .col-6 {
        width: 37px;
        padding-left: 6px;
        .icon-from {
            float: right;
            overflow: hidden;
            margin: 7px 0 0 10px;
            text-indent: -9999px;
            width: 14px;
            margin-left: 0;
            background-position: -80px 0px;
            &:hover {
                background-position: -80px -20px;
            }
        }
    }

    &:hover {
        background-color: rgba(0,0,0,0.4);
        color: white;
        .col-3 {
            opacity: 1;
        }

        .col-4 {
            a {
                color: white;
            }
        }
    }
`