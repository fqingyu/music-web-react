import styled from 'styled-components';

export const PlayListWrapper = styled.div`
    position: relative;
    background: white;
    padding: 40px;
    border-left: 1px solid rgb(211, 211, 211);
    border-right: 1px solid rgb(211, 211, 211);
    
    .playlist-container {
        /* margin: 30px 0 0 -50px; */
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 900px;
    }

    .cover-bottom {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`