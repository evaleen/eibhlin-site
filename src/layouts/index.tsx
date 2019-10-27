import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import { Main } from '../style/components'

import GlobalStyle from '../style/GlobalStyle'
import * as theme from '../style/theme'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Helmet>
        <title>Eibhlín McGeady</title>
        <link
          href="https://fonts.googleapis.com/css?family=Viga|Kalam:700|Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <Main>{children}</Main>
    </>
  </ThemeProvider>
)

export default Layout
