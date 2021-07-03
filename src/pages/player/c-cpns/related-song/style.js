import styled from 'styled-components';

export const RelatedSongWrapper = styled.div`
    ul {
        margin-bottom: 25px;
        .item {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            color: #999;
            .info {
                div {
                    height: 16px;
                    .title {
                        display: inline-block;
                        line-height: 16px;
                        color: #333;
                        width: 156px;
                    }
                    .artist {
                        display: inline-block;
                        line-height: 16px;
                        color: #999;
                        width: 156px;
                    }
                }
            }

            .btn-list {
                position: relative;
                top: 8px;
                .play {
                    margin-right: 16px;
                    background-position: -69px -455px;
                    width: 10px;
                    height: 11px;
                    opacity: 0.9;
                    cursor: pointer;
                }

                }
                .addto {
                    background-position: -87px -454px;
                    width: 10px;
                    height: 11px;
                    opacity: 0.9;
                    cursor: pointer;
                }
            }
        }
    }
`