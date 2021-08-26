# language: pt

Funcionalidade: Hunter
    Como um Hunter 
    Eu devo caçar comida
    E dar comida aos outros Travelers
    Para que então todos possuam comida

    Contexto:
        Dado um Hunter de nome "Slade"
        E ele sempre começa a viagem com 2 refeições
        E ele sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vez
        Então a quantidade de refeições deve ser igual a 7.

    Cenário: Caçou para conseguir mais refeições ainda
        Quando o Hunter sair para caçar 3 vezes
        Então a quantidade de refeições deve ser maior ainda e igual a 17.

    Cenário: Comeu e permaneçeu saudável
        Quando o Hunter sair para caçar 1 vez
        E come somente 1 vez
        Então ele permaneçe saudável.

    Cenário: Comeu e se tornou doente
        Quando o Hunter sair para caçar 1 vez
        E come 4 vezes
        Então ele ficará doente.

    Cenário: Transferindo comida para outro Traveler
        Dado um Traveler de nome "Gabriel" com 1 refeição
        Quando o Hunter sair para caçar 1 vez
        E transfere 2 refeições pra o Traveler
        Então o Traveler fica com 3 refeições.
        E o Hunter com 5 refeições.
