import React from "react";
import {Container,Nametext,Progress,UserPicture} from './styles'
import { IUserInfo } from "./types";

const UserInfo = ({ name, image, percentual}: IUserInfo) => {
    return (
        <Container>
            <UserPicture src={image}/>
            <div>
                <Nametext>{name}</Nametext>
                <Progress percentual={percentual}/>
            </div>
        </Container>
    )
}

export {UserInfo}