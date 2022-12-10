import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { GiBrazilFlag } from "react-icons/gi";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, CreateText, HasAcc, Row, Wrapper, LogIn } from './styles';
import { IFormData } from "./types";

const Create = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm<IFormData>({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    const onClickCreate = () => {
        navigate('/create')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie a sua conta e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Nome completo" leftIcon={<MdPerson/>} name="nome"  control={control} />
                    <Input placeholder="Seu melhor @E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input placeholder="Celular ex:(11)96123-456" leftIcon={<GiBrazilFlag />} name="celular"  control={control} />
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.password && <span>Senha é obrigatório</span>}
                    
                    
                </form>
                <Row>
                    <Button title="CRIAR MINHA CONTA GRÁTIS" variant="secundary" type="submit" onClick={onClickCreate}/>
                </Row>
                <Row>
                <CreateText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</CreateText>
                </Row>
                <Row>
                    <HasAcc>Já tenho conta. <LogIn href="/login">Fazer login.</LogIn></HasAcc>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Create }