import styled from 'styled-components';

export const HotDjWrapper = styled.div`
    margin-top: 30px;
    ul {
        margin: 20px 0 0 20px;
        .item {
            width: 210px;
            height: 50px;
            display: flex;
            .image {
                width: 40px;
                margin-right: 10px;
            }

            .info {
                a {
                    color: #000
                }
                p {
                    width: 160px;
                    color: #666;
                    line-height: 21px;
                }
            }
        }
    }
`