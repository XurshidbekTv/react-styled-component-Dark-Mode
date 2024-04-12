import styled, {css} from "styled-components";
import {Settings} from '@styled-icons/evaicons-solid/Settings'
import {KeyboardArrowLeft} from '@styled-icons/material-twotone/KeyboardArrowLeft'
import {Switch} from '@styled-icons/icomoon/Switch'
import {Moon} from '@styled-icons/heroicons-solid/Moon'
import {Grid1x2Fill} from '@styled-icons/bootstrap/Grid1x2Fill'
import {UserCheck} from '@styled-icons/boxicons-regular/UserCheck'
import {UserPlus} from '@styled-icons/boxicons-regular/UserPlus'
import {PermMedia} from '@styled-icons/material/PermMedia'
import {CommentDots} from '@styled-icons/boxicons-solid/CommentDots'
import {BellFill} from '@styled-icons/bootstrap/BellFill'

import Toggle from "react-dark-mode-toggle";

export const ToggleMode =styled(Toggle)`
margin-left: auto;
`
export const  Container= styled.div`
display:flex;
flex-direction:column;
width: 100wh;
height:fit-content;
padding:100px 300px;
box-sizing: border-box;
justify-content:center;
align-items:center;
background:white;
`
export const MobileContainer=styled.div`
width:400px;
height:620px;
background:${({color})=>color};
box-shadow:5px 5px 12px 6px rgba(0,0, 0, 0.25);
box-sizing:border-box;
`
export const IconCon=styled.div`
width:100%;
padding:20px;
display:flex;
box-sizing:border-box;
`
export const Icon=styled.div``

Icon.Arrow=styled(KeyboardArrowLeft)`
color:${({color})=>color};
width:30px;
height:30px;
cursor:pointer;
`
Icon.Switch=styled(Switch)`
color:${({color})=>color};
width:20px;
height:20px;
cursor:pointer;
margin-left:auto;
`
export const ImgWrapper= styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`
export const Img= styled.img`
width:100px;
height:100px;
border:0.5px solid #000;
border-radius:50%;
margin:10px;
`
export const TitleImg= styled.div`
font-size:22px;
font-style:bold;
font-family: SF Pro Display;
color:${({color})=>color};
`
export const Desc = styled.div`
font-size:15px;
font-style:bold;
font-family: SF Pro Display;
color:${({color})=>color};
`
export const Item =styled.div`
display : flex;
padding:10px 30px;
`
export const Title=styled.div`
font-size:17px;
font-style:bold;
font-family: SF Pro Display;
padding-left:10px;
color:${({color})=>color};
`
export const Line =styled.div`
width:85%;
height:1px;
background:#E9E9E9;
margin:10px 30px;
box-sizing:border-box;
`
Icon.Dark=styled(Moon)`
width:20px ;
height:20px;
color:${({color})=>color};
margin-right:10px;
`
Icon.Grid=styled(Grid1x2Fill)`
width:20px ;
height:20px;
color:#FBB65C;
margin-right:10px;
`
Icon.UserCheck=styled(UserCheck)`
width:30px ;
height:30px;
color:#FF7EB0;
`
Icon.Group=styled(UserPlus)`
width:30px ;
height:30px;
color:#36E3FF;
`
Icon.Media=styled(PermMedia)`
width:20px ;
height:20px;
color:#5476FF;
margin-right:10px;
`
Icon.Settings=styled(Settings)`
width:20px ;
height:20px;
color:#0BC623;
margin-right:10px;
`
Icon.Comment=styled(CommentDots)`
width:20px ;
height:20px;
color:#0BC630;
margin-right:10px;
`
Icon.Notification=styled(BellFill)`
width:20px ;
height:20px;
color:#A394C2;
margin-right:10px;
`
// export const Settings=styled(Settings)`

// `