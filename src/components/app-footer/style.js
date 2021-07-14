import styled from 'styled-components';

export const FooterWrapper = styled.div`
    height: 172px;
    background-color: #f2f2f2;
    border-top: 1px solid #d3d3d3;
    .content {
        display: flex;
        justify-content: space-between;
    }
`

export const FooterLeft = styled.div`
    width: 520px;
    padding-top: 15px;
    line-height: 24px;
    color: #666;
    .footer-link {
        a {
            color: #999;
            font-size: 12px;
        }

        .line {
            margin: 0 8px 0 10px;
            color: #c2c2c2;
        }
    }

    
    .copyright {
        margin-right: 14px;
    }

    .report {
        margin-right: 14px;
    }
`

export const FooterRight = styled.ul`
    display: flex;
    width: 420px;
    margin-top: 33px;
    .item {
        display: flex;
        flex-direction: column;
        width: 60px;
        height: 70px;
        margin-left: 30px;
        text-align: center;

        .link {
            display: block;
            width: 50px;
            height: 45px;
            background-size: 110px 552px;
            margin: 0 auto;
            text-indent: -99999px;
        }

        :nth-child(1) .link {
            background-position: -63px -456.5px;
        }

        :nth-child(2) .link {
            background-position: -63px -101px;
        }

        :nth-child(3) .link {
            background-position: 0 0;
        }

        :nth-child(4) .link {
            background-position: -60px -50px;
        }

        :nth-child(5) .link {
            background-position: 0 -101px;
        }

        .title {
            width: 52px;
            height: 14px;
            margin: 5px 5px 0 5px;
            background-size: 180px 139px;
        }

        :nth-child(1) .title {
            width: 72px;
            background-position: 0 -108px;
            margin-left: -6px
        }

        :nth-child(2) .title {
            background-position: -1px -91px;
        }

        :nth-child(3) .title {
            background-position: 0 0;
        }

        :nth-child(4) .title {
            background-position: 0 -54px;
        }

        :nth-child(5) .title {
            background-position: -1px -72px;
        }
    }
    
`