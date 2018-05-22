import React from 'react'
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor'

// import SocialShare from 'grommet/components/SocialShare';
// import Quote from 'grommet/components/Quote';
import Paragraph from 'grommet/components/Paragraph';
// import Tabs from 'grommet/components/Tabs'
// import Tab from 'grommet/components/Tab'

// import Carousel from 'grommet/components/Carousel';
// import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'



export const AppFooter=props=>{
    return (

        <footer className="footer">
            

        <Footer justify='around'>
          <Title>
            <s />
             todozer
          </Title>
          <Box direction='row'
            align='center'
            pad={{"between": "medium"}}>
            <Paragraph margin='none'>
              © {new Date().getFullYear()} serge toure Labs
            </Paragraph>
            <Menu direction='row'
              size='small'
              dropAlign={{"right": "right"}}>
              <Anchor href='#'>
                Support
              </Anchor>
              <Anchor href='#'>
                Contact
              </Anchor>
              <Anchor href='#'>
                About
              </Anchor>
            </Menu>
          </Box>
        </Footer>
                      </footer> 
    )
}