import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

// às vezes, utilizar várias divs em um código HTML pode acabar quebrando uma página
// principalmente no React, onde toda a estrutura HTML contida em um return precisa estar em um único elemento HTML
// Para esses casos é possível utilizar um fragmento HTML, com estrutura <></>, que não será renderizado.
// Todo o código HTML dentro do fragmento será renderizado normalmente.
function Home(props) {
    const history = useHistory()
    const [usuario, setUsuario] = useState('')
    const [ erro, setErro ] = useState(false)

    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(
            response => {
                const repos = response.data
                const reposName = []
                repos.map((repo) => {
                    reposName.push(repo.name)
                })
                localStorage.setItem('reposName', JSON.stringify(reposName))
                setErro(false)
                history.push('/repositories')
            }
        ).catch(err => {
            setErro(true)
        })
    }

    return (
        <>
        <S.Container>
            <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={
                e => setUsuario(e.target.value)
            } />
            <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
            { erro ? <S.ErrorMsg>Ocorreu um erro. Tente Novamente.</S.ErrorMsg> : '' }
        </S.Container>
        </>
    )
}

export default Home;