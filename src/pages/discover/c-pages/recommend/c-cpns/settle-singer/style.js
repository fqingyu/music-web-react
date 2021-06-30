import styled from 'styled-components';

export const SettleSingerWrapper = styled.div`
    margin-top: 15px;
    .singer-list {
        margin: 6px 0 14px 20px;
        .singer {
            margin-top: 14px;
            a {
                display: flex;
                .info {
                    width: 148px;
                    height: 62px;
                    padding-left: 14px;
                    border: 1px solid #e9e9e9;
                    border-left: none;
                    background: #fafafa;
                    h4 {
                        margin-top: 8px;
                    }

                    p {
                        width: 90%;
                        margin-top: 8px;
                    }
                }
            }

            a:hover {
                text-decoration: none;
                .info {
                    background: #f4f4f4;
                }
            }
        }
    }

    .recruit {
        .btn {
            margin-left: 20px;
            border-radius: 4px;
            display: inline-block;
            height: 31px;
            line-height: 31px;
            vertical-align: top;
            text-align: center;
            background-position: right -100px;
            padding: 0 5px 0 0;
        }

        .btn:hover {
            text-decoration: none;
            background-position: right -182px;
        }

        .content {
            width: 200px;
            font-weight: bold;
            color: #333;
            background-position: 0 -59px;
            display: inline-block;
            height: 31px;
            line-height: 31px;
            vertical-align: top;
            text-align: center;
            cursor: pointer;
        }
    }
`