import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'
// https://api.github.com/users/ArthurBernardoDev/repos


interface Repository {
    name: string;
    description: string;
    html_url: string;
    repo: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch("https://api.github.com/users/ArthurBernardoDev/repos")  // fetch usado para pegar as informações da api do github
            .then(reponse => reponse.json())        // quando a api me der uma resposta, reponse.json para converter os dados para json       
            .then(data => setRepositories(data))        //quando a reposta para o json acabar de ser convertida, console.log(data) para ver esses dados no consoles
    }, [])
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    );
}