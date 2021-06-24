import React, { memo } from 'react';

import { footerLinks, footerImages } from '@/services/local-data.js'
import { FooterWrapper, FooterLeft, FooterRight } from './style'

export default memo(function CMAppFooter() {
    return (
        <FooterWrapper>
            <div className="content wrap-v2">
                <FooterLeft>
                    <p className="footer-link">
                        {
                            footerLinks.map((item, index) => {
                                return (
                                    <span key={item.title}>
                                        <a href={item.link}>{item.title}</a>
                                        <span className="line">|</span>
                                    </span>
                                )
                            })
                        }
                    </p>
                    <p>
                        <span className="copyright">网易公司版权所有©1997-2021</span>
                        <span>杭州乐读科技有限公司运营：</span>
                        <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png" target="_blank" rel="noreferrer">浙网文[2021] 1186-054号</a>
                    </p>
                    <p>
                        <span className="report">违法和不良信息举报电话：0571-89853516</span>
                        <span>举报邮箱：<a href="mailto:ncm5990@163.com">ncm5990@163.com</a></span>
                    </p>
                    <p>
                        <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noreferrer" target="_blank">粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
                    </p>
                </FooterLeft>
                <FooterRight>
                    {
                        footerImages.map((item, index) => {
                            return (
                                <li key={item.link} className="item">
                                    <a className="link" href={item.link} rel="noopener noreferrer" target="_blank">网易云音乐</a>
                                    <span className="title"></span>
                                </li>
                            )
                        })
                    }
                </FooterRight>
            </div>
        </FooterWrapper>
    )
})
