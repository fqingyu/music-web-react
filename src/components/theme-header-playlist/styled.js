import styled from 'styled-components';

export const ThemeHeaderPlayListWrapper = styled.div`
    height: 42px;
    border-bottom: 2px solid #c20c0c;

    .cat-name {
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
        
    }
`