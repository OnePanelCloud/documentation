---  
sidebar_position: 3.1  
title: Criação de um Reverse Proxy  
---

# Criação de um Reverse Proxy

Um *Reverse Proxy* atua como intermediário entre os clientes e os servidores, direcionando as solicitações feitas pelos clientes para o servidor adequado. Isso é útil para balanceamento de carga, segurança e anonimização de serviços. Vamos ver como criar um Reverse Proxy em nosso painel.

## Passo a Passo

Para começar, navegue até a aba `Proxy Reverso` ou clique [aqui](https://console.onepanel.com.br/app/reverse-proxy/new).

### 1. Selecione uma VPS

Para criar um *Reverse Proxy*, você precisará de uma **VPS previamente criada**. Se ainda não possui uma VPS, siga as instruções [nesta página](https://docs.pscanary.com/vps/criacao/) para criar uma.

![Criação de um reverse proxy](../../../static/img/prints/reverse-proxy/new.png)

### 2. Preenchendo os Campos

Você verá uma tela onde poderá configurar seu proxy reverso. Aqui estão algumas explicações dos campos principais:

- **Nome do Proxy**: Este é o nome que você dará ao seu proxy reverso. Ele será exibido no painel de controle.
  
- **Endereço de Destino (Target URL)**: O endereço IP ou domínio para o qual o proxy irá redirecionar as requisições. Este deve ser o endereço da VPS que você quer proteger ou balancear.

- **Porta de Origem (Source Port)**: A porta pela qual o proxy será acessado pelos usuários. Normalmente, essa é a porta padrão de HTTP (80) ou HTTPS (443), mas você pode definir outra, se necessário.

- **Path**: O *path* define um diretório específico ou recurso no servidor de destino. Por exemplo, se você definir o *path* como `/api`, todas as requisições para `meudominio.com/api` serão redirecionadas para o servidor de destino especificado.

![Criação de um reverse proxy 2](../../../static/img/prints/reverse-proxy/new2.png)

### 3. Configurações Opcionais

- **Balanceamento de Carga**: Se você tiver mais de uma VPS, pode habilitar o balanceamento de carga para distribuir as solicitações entre várias máquinas.
  
- **SSL**: Caso precise de um certificado SSL, você pode configurar as opções de SSL diretamente nesta interface. Certifique-se de que seu domínio esteja corretamente configurado para o SSL.

### 4. Finalizando

Após preencher todos os campos corretamente, clique em `Adicionar` para criar o proxy reverso.

![Criação de um reverse proxy 3](../../../static/img/prints/reverse-proxy/new3.png)

Pronto! Seu *Reverse Proxy* foi criado com sucesso. Agora ele estará redirecionando as solicitações conforme configurado.

---

Essa estrutura adiciona clareza à página e oferece informações valiosas sobre os campos e suas funções, além de linkar com páginas relacionadas que auxiliam no processo de criação de VPS e configuração de proxy.
