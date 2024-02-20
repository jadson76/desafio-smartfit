# Desafio Frontend - Smart Fit

![Smart Fit](./src/assets/images/svg/logo.svg)

Este reposit�rio cont�m a solu��o para o desafio de [Front-end da Smart Fit](https://github.com/bioritmo/front-end-code-challenge-smartsite/tree/master) desenvolvido durante o v�deo em meu canal. Eu utilizei o framework Angular para desenvolver a aplica��o, e voc� pode assistir o v�deo onde resolvi o desafio em meu canal [aqui](https://www.youtube.com/watch?v=ozZXMkp8MnQ).

## ?? Sobre o desafio

A Smart Fit, atuando no segmento de fitness, passou por v�rias mudan�as durante a pandemia. Foi necess�rio desenvolver uma p�gina para buscar unidades abertas ou fechadas para consulta e reserva. 

Neste desafio, foi implementado as seguintes funcionalidades de acordo com as regras de neg�cio definidas:

### Funcionalidades
[x] Carrega unidades atrav�s do arquivo JSON [locations.json](https://test-frontend-developer.s3.amazonaws.com/data/locations.json) utilizando o m�todo `GET`.
[x] Busca por todas as unidades.
[x] Busca por unidades com filtros.
[x] Previs�o do n�mero de resultados encontrados.
[x] Listagem das unidades encontradas ap�s a busca.

### Regras de neg�cio
- Filtra unidades abertas ou fechadas.
- Filtra unidades por per�odo de funcionamento.
- Exibe a mensagem "Nenhuma unidade encontrada" quando n�o h� resultados.
- Valida e exibe os �cones corretos de acordo com o status da unidade.

## ?? Layout

O layout da aplica��o foi baseado nos materiais disponibilizados, incluindo designs para dispositivos m�veis e desktop, cores, imagens e fontes. A fidelidade ao layout proposto foi mantida, e a aplica��o � responsiva para dispositivos m�veis, tablets e desktops.

## ?? Como Executar

Para executar a aplica��o localmente, siga os passos abaixo:

1. Clone este reposit�rio:

```bash
  git clone https://github.com/Fernanda-Kipper/smartfit-frontend-challenge.git
  cd smartfit-frontend-challenge

```

2. Instale as depend�ncias

```bash
  npm install
```

3. Inicie a aplica��o

```bash
  npm start
```

## Licen�a
Este projeto est� sob a licen�a MIT. Consulte o arquivo [LICENSE](./LICENSE) para obter mais detalhes.
