# language: pt 

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar os Travelers
    Para que eles fiquem saudáveis.

    Contexto: 
        Dado um Doctor com o nome "House"
        E ele sempre começa a viagem com 1 refeição
        E ele sempre começa a viagem saudável.
        E o passageiro de nome <name> que está com saúde <isHealthy>
            | name   | isHealthy |
            | John   | false     |
            | Sabrina| true      |

    Cenário: Curou um Traveler doente
        Quando o Doctor cura o Traveler "John"
        Então ele volta a estar saudável.

    Cenário: Se o Traveler ja estiver saudável
        Quando o Doctor tenta curar a Traveler "Sabrina";
        Então ela permanece saudável.