import styled from 'styled-components';
import sprite_01 from '@/assets/img/sprite_01.png'

export const HeaderWrapper = styled.div`
    height: 75px;
    color: #fff;
    background-color: #242424;

    .content {
        height: 70px;

        display: flex;
        justify-content: space-between;
    }

    .divider {
        height: 5px;
        background-color: #C20C0C;
    }
`

export const HeaderLeft = styled.div`
    display: flex;

    .logo {
        display: block;
        width: 176px;
        height: 69px;
        background-position: 0 0;
        text-indent: -99999px;
    }

    .select-list {
        display: flex;
        .select-item {
            position: relative;
            a {
                display: block;
                padding:0 19px;
                line-height: 70px;
                font-size: 14px;
                color: #CCC;
            }

            :last-of-type a {
                position: relative;
                ::after {
                    position: absolute;
                    content: "";
                    width: 28px;
                    height: 19px;
                    background-image: url(${sprite_01});
                    background-position: -190px 0;
                    top: 20px;
                    right: -15px;
                }
            }

            &:hover a, .active {
                color: #fff;
                background: #000;
                text-decoration: none;
            }

            .active .icon {
                position: absolute;
                display: inline-block;
                width: 12px;
                height: 7px;
                bottom: -1px;
                left: 50%;
                transform: translate(-50%, 0);
                background-position: -226px 0;
            }
        }
        
    }
`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;

    .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;
    }

    input {
        &::placeholder {
            font-size: 12px;
        }
    }

    .creator-center {
        background-color: transparent;
        color: #ccc;
        margin-left: 12px;
        width: 90px;
        height: 32px;
        border-radius: 16px;
        border: 1px solid #4F4F4F;
        &:hover {
            color: #fff;
            border: 1px solid #ccc;
            cursor: pointer;
        }
    }

    .login {
        background-color: transparent;
        color: #787878;
        margin-left: 14px;
        height: 32px;
        &:hover {
            color: #999;
            text-decoration: underline;
            cursor: pointer;
        }
    }
`