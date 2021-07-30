import styled from 'styled-components';

export const ThemeHeaderDjradioWrapper = styled.div`
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    display: flex;
    justify-content: space-between;

    .category-name {
        color: #333;
        font-size: 24px;
        a {
            color: #333;
        }

        span {
            font-family: simsun;
        }
    }

    .more {
        color: #666;
        margin-top: 14px;
    }
`