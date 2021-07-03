import styled from 'styled-components';
import wrap_bg from '@/assets/img/wrap-bg.png';

export const PlayerWrapper = styled.div`
    .content {
		background: url(${wrap_bg}) repeat-y;
		background-color: #fff;
		display: flex;
    }
`

export const PlayerLeft = styled.div`
	width: 710px;
	display: flex;
	justify-content: center;
	padding-top: 37px;
	

	.song-info {
		width: 414px;
	}
`

export const PlayerRight = styled.div`
	width: 270px;
	padding: 20px 40px 40px 30px;
`