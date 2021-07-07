import styled from 'styled-components';

export const SongCover = styled.div`
	width: 206px;
	margin-right: 16px;
	.cover {
		position: relative;
		width: 198px;
		height: 198px;
		img {
			width: 130px;
			height: 130px;
			margin: 34px;
		}
		.background {
			position: absolute;
			width: 206px;
			height: 205px;
			top: -4px;
			left: -4px;
			background-position: -140px -580px;
		}
	}

	.outchain {
		margin-top: 20px;
		text-align: center;
		a {
			text-decoration: underline;
			color: #0c73c2;
		}
		.icon {
			display: inline-block;
			width: 16px;
			height: 16px;
			background-position: -34px -863px;
			vertical-align: middle;
		}
	}
`

export const SongDetailWrapper = styled.div`
	.title {
		/* display: flex; */
		/* height: 31.28px; */
		.icon {
			width: 54px;
			height: 24px;
			background-position: 0 -463px;
			margin-right: 9px;
			float: left;
		}
		.title-wrapper {
			margin-left: 64px;
			position: relative;
			top: -6px;
			font-size: 24px;
			.title-name {
				margin-right: 14px;
				height: 31px;
				font-size: 24px;
				color: #333;
				vertical-align: top;
				margin-top: -9px;
				font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
			}
			.mv-icon {
				cursor: pointer;
				vertical-align: middle;
				i {
					display: inline-block;
					width: 21px;
					height: 18px;
					background-position: 0 -18px;
					margin-top: 3px
				}
			}
			.subtitle-name {
				margin: 1px 0 5px;
				color: #bababa;
				font-size: 14px;
			}
		}
	}
	

	> p {
		margin: 10px 0;
		color: #999;
		a {
			color: #0c73c2;
		}
	}

	.button-list {
		a {
			height: 31px;
			line-height: 31px;
		}
		.play {
			color: #fff;
			background-position: right -428px;
			i {
				padding: 0 7px 0 8px;
				color: #fff;
    			background-position: 0 -387px;
				display: inline-block;
			}
			a {
				width: 31px;
				margin-left: -3px;
				padding-right: 0;
				background-position: 0 -1588px;
			}
		}
	}

	.lyric-content {
		margin-top: 37px;
		line-height: 23px;
		font-size: 12px;
		.hide-lyric {
			display: ${props => props.moreLyric === true ? "" : "none"};
		}
		.expand {
			margin-top: 5px;
			width: 35px;
			color: #0c73c2;
			cursor: pointer;
			.icon {
				width: 11px;
				height: 8px;
				background-position: ${props => props.moreLyric === true ? "-45px -520px" : "-65px -520px"};
				display: inline-block;
			}
		}

		.expand:hover {
			text-decoration: underline;
		}
	}

	.user-operation {
		margin-top: 48px;
		text-align: right;
		line-height: 30px;
		color: #666;
		.report {
			color: #999;
		}
		.contribute {
			a {
				color: #0c73c2;
				text-decoration: underline;
			}
		}
	}
`