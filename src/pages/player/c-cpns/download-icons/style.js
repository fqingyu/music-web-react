import styled from 'styled-components';

export const DownloadIconsWrapper = styled.div`
    .button-list {
        height: 65px;
        margin-bottom: 10px;
        background-position: 0 -392px;
        display: flex;
        .ios {
            display: block;
            width: 42px;
            height: 48px;
            text-indent: -9999px;
            &:hover {
                background-position: 0 -472px;
            }
        }

        .pc {
            width: 60px;
            margin: 0 26px 0 30px;
            display: block;
            height: 48px;
            text-indent: -9999px;
            &:hover {
                background-position: -72px -472px;
            }
        }

        .aos {
            display: block;
            width: 42px;
            height: 48px;
            text-indent: -9999px;
            &:hover {
                background-position: -158px -472px;
            }
        }
    }

    .info {
        color: #999;
        margin-bottom: 40px;
    }

    a {
        display: block;
        color: #333;
    }
`