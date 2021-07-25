import styled from 'styled-components';

export const ThemeHeaderRankingWrapper = styled.div`
    .content {
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #c20c0c;
        .left {
            width: 90%;
            display: flex;
            margin-bottom: 4px;
            .title {
                font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
                font-size: 20px;
                line-height: 28px;
            }

            .song-count {
                margin: 9px 0 0 20px;
                color: #666;
            }
        }

        .right {
            width: 20%;
            .play-count__wrapper {
                margin-top: 5px;
                .play-count {
                    color: #c20c0c;
                    font-weight: bold;
                }
            }
        }
    }
`