import React from "react";
import '../styles/teamIntro.css';
import img_icon from '../assets/dog-icon.png'
import img_team1 from '../assets/유재영.jpg'
import img_team2 from '../assets/조유진.jpg'
import img_team3 from '../assets/최형택.jpg'

export default function TeamIntro() {
    let title = "개가 좋다"
    
    return <div className={'center'}>
        <h1 id={'title'}>{title}</h1>
        <table>
            <tbody>
                <tr>
                    <td><img className={''} src={img_icon} alt={''}/></td>
                    <td>
                        <table id={'grid'}>
                            <tbody>
                            <tr><td><a href={'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=치고르자브'}><img src={img_team1} alt={''} width={30} height={30}/></a></td><td><span>201904219 유재영</span></td></tr>
                            <tr><td><a href={'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=그레이하운드'}><img src={img_team2} alt={''} width={30} height={30}/></a></td><td><span>202204137 조유진</span></td></tr>
                            <tr><td><a href={'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=시츄'}><img src={img_team3} alt={''} width={30} height={30}/></a></td><td><span>202204150 최형택</span></td></tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <span>Address : 경기도 용인시 기흥구 강남로 40(구갈동)  우(16979), 대표전화 : 031-280-3114, 031-280-3500, 팩스번호 : 031-280-3173</span>
    </div>;
}