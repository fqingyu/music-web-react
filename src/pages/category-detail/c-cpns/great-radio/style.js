import styled from 'styled-components';

export const GreatRadioWrapper = styled.div`
    padding: 0 40px 0;
    .radio-box {
        display: flex;
        justify-content: space-between;

        .item {
            width: 150px;
            margin-top: 15px;
            .item-image {
                width: 150px;
                height: 150px;
            }

            .content {
                .title {
                    display: block;
                    margin: 13px 0 6px;
                    line-height: 16px;
                    font-size: 14px;
                    color: #333;
                }

                .description {
                    line-height: 18px;
                    color: #999;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
            }
        }
    }
`