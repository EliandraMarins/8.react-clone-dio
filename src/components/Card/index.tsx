import { FiThumbsUp} from 'react-icons/fi' 
import React from 'react'
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserPicture, UserInfo} from './styles' 


const Card = () => {
  return (
    <CardContainer>
        
        <ImageBackground src="https://www.eurocontrol.int/sites/default/files/styles/3_1_1200x400/public/2021-01/banner-innovation-hub-project%402x.png?h=8f74817f&itok=CvC8V_6p"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/65451469?v=4"/>
                <div>
                    <h4>Eliandra marins</h4>
                    <p>Ha 2 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de React</h4>
                <p>Projeto feito com o curso de React no bootcamp Orange+... <strong>Saiba Mais</strong></p>

            </PostInfo>
            <HasInfo>
                <h4>#JavaScript #CSS #HTML #React</h4>
                <p>
                    <FiThumbsUp/>25
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }