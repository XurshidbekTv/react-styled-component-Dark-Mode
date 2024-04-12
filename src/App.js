import React, { useState, useContext } from 'react'
import { Container,Line, IconCon, MobileContainer, Icon, Img, ImgWrapper, TitleImg, Desc, Item, Title, ToggleMode} from './appStyle'
import img from './cat.jpg'
import { ThemeContext } from './contex'


const App = () => {
  
  const [mode, setMode]=useState(false);
  const [theme, setTheme]= useContext(ThemeContext)
  const dark={
    icon:'white',
    title:'white',
    background: 'black'
  }
  const light={
    icon:'black',
    title:'black',
    background: 'white'
  }
  const onChange=()=>{
    setMode(!mode)
    setTheme(mode ? dark : light)
  }
  return (
   <Container>
    <MobileContainer color={theme.background}>
      <IconCon>
        <Icon.Arrow color={theme.icon}/>
        <Icon.Switch color={theme.icon}/>
      </IconCon>
      <ImgWrapper>
        <Img src={img} alt='logo'/>
        <TitleImg color={theme.title}>
         Xurshidbek Tv Usa
        </TitleImg>
        <Desc color={theme.title}>
          Youtube Chanel
        </Desc>
      </ImgWrapper>
      {/* Dark mode */}
      <Item>
        <Icon.Dark color={theme.icon}/>
        <Title color={theme.title}>
         Dark Mode
        </Title>
       <ToggleMode
        checked={mode}
        onChange={onChange}
        size={50}
       />
      </Item>
      {/* Grid */}
      <Item>
        <Icon.Grid/>
        <Title color={theme.title}>
         Story
        </Title>
      </Item>
      {/* user */}
      <Item>
        <Icon.UserCheck/>
        <Title color={theme.title}>
         Chat heads
        </Title>
      </Item>
      {/* Gorup */}
       <Item>
        <Icon.Group/>
        <Title color={theme.title}>
         Groups
        </Title>
      </Item>
      <Line/>
      <Item>
        <Icon.Media/>
        <Title color={theme.title}>
         Media and Photos
        </Title>
      </Item>
      <Item>
        <Icon.Settings/>
        <Title color={theme.title}>
        Settings and Privcy
        </Title>
      </Item>
      <Item>
        <Icon.Comment/>
        <Title color={theme.title}>
         Help Center
        </Title>
      </Item>
      <Item>
        <Icon.Notification/>
        <Title color={theme.title}>
        Notification
        </Title>
      </Item>
    </MobileContainer>
   </Container>
  )
}

export default App