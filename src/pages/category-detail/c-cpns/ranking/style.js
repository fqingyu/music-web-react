import styled from 'styled-components';

export const RankingWrapper = styled.div`
    margin-top: 35px;
    padding: 0 40px;
    .ranking-box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
            display: flex;
            width: 400px;
            height: 161px;
            margin-left: 30px;
            padding: 20px 0;
            border-bottom: 1px solid #e7e7e7;

            > a {
                display: block;
                img {
                    width: 120px;
                    height: 120px;
                }
            }
            
            .content {
                margin-left: 20px;

                .title {
                    height: 64px;
                    display: block;
                    margin-top: 10px;
                    color: #333;
                    font-size: 18px;
                    font-weight: bold;
                }

                .author {
                    margin-bottom: 6px;
                    line-height: 20px;
                    
                    i {
                        display: inline-block;
                        background-position: -50px -300px;
                        width: 14px;
                        height: 15px;
                    }

                    a {
                        margin-left: 5px;
                        color: #333;
                    }
                }

                .info {
                    color: #999;
                }
            }
        }
    }
`