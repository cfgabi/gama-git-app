import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function Repositories() {
    const history = useHistory()
    const [ repos, setRepos ] = useState([])

    useEffect(() => {
        let reposName = localStorage.getItem('reposName')
        if (reposName !== null) {
            reposName = JSON.parse(reposName)
            setRepos(reposName)
            localStorage.clear()
        } else {
            history.push('/')
        }
        
    }, [])
    
    return (
        <>
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {
                    repos.map(repo => {
                    return (
                        <S.ListItem>{ repo }</S.ListItem>
                    )
                    })
                }
            </S.List>
            <S.LinkHome to='/'>Voltar</S.LinkHome>
        </S.Container>
        </>
    )
}

export default Repositories;