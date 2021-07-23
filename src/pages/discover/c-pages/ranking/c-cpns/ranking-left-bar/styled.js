import styled from 'styled-components';

export const RankingLeftBarWrapper = styled.div`
    margin-top: 40px;
    h2 {
        padding: 0 10px 12px 15px;
        font-size: 14px;
        color: #000;
    }

    .space {
        height: 20px;
    }

    .item {
        &:hover {
            text-decoration: none;
            background: #f4f2f2;
        }
        padding: 10px 0 10px 20px;
        display: flex;
        .left {
            margin-right: 10px;
        }

        .right {
            .name {
                color: #000;
                width: 150px;
                overflow: hidden;
                margin-top: 2px;
                margin-bottom: 6px;
            }

            .frequency {
                color: #999;
            }
        }
    }
`