
# Atividade Programação Web - Prof. Rafael Altieris
* [atividade-proposta]
* [vercel]
## 1. Restruturação para reutilizar componente (ImcCalc -> FormCalc)

O antigo componente `ImcCalc` foi refatorado para se tornar `FormCalc`, **um componente genérico e dinâmico**. Ele agora recebe via `props` as funções de cálculo e um objeto `dadosPagina` contendo os títulos e placeholders. Isso permitiu que o mesmo formulário servisse tanto para receber **peso e altura para o calculo de IMC**, quanto **hora e preço para o calculo de orçamento**.

> O arquivo e as classes de CSS continuam com os mesmos nomes.

### 2. Separação de Telas (Screens)

Para organizar o fluxo da aplicação, foram criadas duas telas principais:

* **`CalculadoraIMC`**: Alimenta o `FormCalc` com dados de Peso/Altura e renderiza a tabela clássica de IMC (`ImcTable`).
* **`CalculadoraOrcamento`**: Alimenta o `FormCalc` com dados de Valor da Hora e Horas Estimadas, aplicando a fórmula do orçamento e renderiza a `OrcamentoTable`.

### 3. Desafio Extra: Taxa de Urgência

Foi implementado o bônus de urgência **utilizando o componente base `Button`** através da classe `#urgencia-btn`

* Na tela de exibição do resultado (`OrcamentoTable`), foi adicionado um botão com o identificador `#urgencia-btn`. * Ao ser acionado, ele aplica um multiplicador que **eleva o valor total do orçamento em 20%** de forma imediata.

[atividade-proposta]: https://github.com/najumattos/aula-react/blob/main/AtividadeProposta.pdf

[vercel]: https://aula-react-flame.vercel.app/
