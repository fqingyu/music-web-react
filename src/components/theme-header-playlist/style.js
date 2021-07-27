import styled from 'styled-components';

export const ThemeHeaderPlayListWrapper = styled.div`
    height: 42px;
    border-bottom: 2px solid #c20c0c;

    >.cat-name {
        font-size: 24px;
    }

    .menu-button {
        font-size: 12px;
        font-weight: normal;
        margin: 2px 0 0 12px;
        padding: 0 5px 0 0;
        white-space: nowrap;
        display: inline-block;
        height: 31px;
        line-height: 31px;
        overflow: hidden;
        vertical-align: top;
        text-align: center;
        cursor: pointer;
        background-position: right -100px;
        .menu-main {
            color: #0c73c2 !important;
            padding: 8px 10px 10px 15px;
            background-position: 0 -59px;
        }

        .down-icon {
            display: inline-block;
            margin-left: 5px;
            width: 8px;
            height: 5px;
            background-position: -70px -543px;
        }
    }

    .cat-list-box {
        display: ${props => props.showMenu ? "block" : "none"};
        left: 0;
        position: absolute;
        width: 720px;
        height: 100px;
        z-index: 5;
        .header {
            height: 32px;
            .header-icon {
                position: absolute;
                top: 2px;
                left: 132px;
                display: inline-block;
                width: 24px;
                height: 11px;
                background-position: -48px 0;
            }
        }

        .content {
            width: 720px;
            padding: 0 10px;
            background-position: -720px 0;
            background-repeat: repeat-y;

            .total {
                height: 38px;
                padding-left: 26px;
                border-bottom: 1px solid #e6e6e6;

                .total-button {
                    display: inline-block;
                    width: 75px;
                    height: 26px;
                    background-position: 0 -64px;
                    text-align: center;
                    line-height: 26px;
                }
            }

            .cat-line {
                display: flex;
                .icon {
                    margin-right: 8px;
                    width: 23px;
                    height: 23px;
                    display: inline-block;
                }

                .language {
                    background-position: -20px -735px;
                }

                .style {
                    background-position: 0 -60px;
                }

                .senario {
                    background-position: 0 -88px;
                }

                .emotion {
                    background-position: 0 -117px;
                }

                .theme {
                    background-position: 0 -141px;
                }

                .cat-name {
                    display: flex;
                    align-items: center;
                    width: 70px;
                    margin: 0 -100px 0 26px;
                    padding-top: 15px;
                    border-right: 1px solid #e6e6e6;
                    font-weight: bold;
                }

                .cat-items {
                    width: 583px;
                    margin-left: 96px;
                    padding: 16px 15px 0 15px;
                    
                    line-height: 24px;
                    a { 
                        color: #333;
                        white-space: nowrap;
                    }
                    span {
                        margin: 0 8px 0 10px;
                        color: #d8d8d8;
                    }
                }
            }

            .cat-last-line {
                .cat-name {
                    width: 70px;
                    margin: 0 -100px 0 26px;
                    padding-top: 15px;
                    border-right: 1px solid #e6e6e6;
                }
            }
        }

        .footer {
            height: 20px;
            background-position: -1440px -12px;
        }
    }
`