import styled from 'styled-components';

export const RankingHeaderWrapper = styled.div`
    padding: 40px;
    display: flex;
    

    .image-wrapper {
        position: relative;
        border: 1px solid #ccc;
        padding: 3px;
        .cover-image {
            width: 150px;
            height: 150px;
            display: block;
        }

        .mask {
            position: absolute;
            width: 150px;
            height: 150px;
            background-position: -230px -380px;
            top: 3px;
            left: 3px;

        }
    }
    
`

export const RankingHeaderLeft = styled.div`
    
`

export const RankingHeaderRight = styled.div`
    margin-left: 31px;
    width: 473px;
    .ranking-title {
        margin: 16px 0 4px;
        line-height: 24px;
        font-size: 20px;
    }

    .time-wrapper {
        margin-bottom: 20px;
        .icon {
            display: inline-block;
            margin: 9px 0 0 3px;
            width: 13px;
            height: 13px;
            background-position: -18px -682px;
        }

        .update-time {
            margin-left: 5px;
            color: #666;
        }
    }
    

    .frequency {
        color: #999;
    }
`
