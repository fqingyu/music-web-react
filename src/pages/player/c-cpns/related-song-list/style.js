import styled from 'styled-components';

export const RelatedSongListWrapper = styled.div`
    ul {
        margin-bottom: 40px;
        .item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            color: #999;
            .info {
                .title {
                    width: 140px;
                    display: inline-block;
                    color: #000;
                    font-size: 14px;
                }

                .creator {
                    max-width: 106px;
                    margin: 0 2px 0 4px;
                    color: #666;
                }
            }
        }
    }
`