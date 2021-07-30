import styled from 'styled-components';

export const RadioBlockWrapper = styled.div`
    padding: 0 40px 0 40px;
    margin-bottom: 35px;
    .content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
            width: 435px;
            height: 160px;
            padding: 20px 0;
            border-bottom: 1px solid #e7e7e7;
            display: flex;
            .item-image {
                height: 120px;
                width: 120px;
            }

            .cat-content {
                .title {
                    display: block;
                    margin: 16px 0 20px 20px;
                    font-size: 18px;
                    font-weight: bold;
                    color: #333;
                }

                .description {
                    margin-left: 20px;
                    color: #999;
                }
            }
        }
    }
`