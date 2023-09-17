# Sobre o Projeto
- Esse script é para rodar em uma maquina local em vez de um VPS. Caso queira rodar em uma **VPS** desabilite o sistema de **notificão**.
- Você pode adicionar esse script em sua inicialização para que você possa receber as atualizações da sua **stamina** a cada **x tempo**.
- Por padrão eu deixei para receber os avisos no **Discord** a cada **1 hora** e as notificações do **Windows** quando a **stamina** for igual ou maior que **10**.
- Caso você queira alterar essas configurações entre na pasta: **src > services > StarRail**

# Projeto
- Antes de você começar a utilizar o **script**, é necessário que você vá até o site do **[Battle Chronicle](https://act.hoyolab.com/app/community-game-records-sea/index.html?bbs_presentation_style=fullscreen&bbs_auth_required=true&gid=6#/hsr)** do **Honkai: Star Rail**
- Depois de entrar com a sua conta e acessar o site, você vai apertar as seguintes teclas: **SHIFT + CTRL + C** > **Console**
- Agora cole esse **document** no **console**: ```document.write(document.cookie);```<br>
- Depois de colar o **document** vai abrir uma página em branco com alguns dados, você vai copiar os seguintes dados: **ltuid, ltoken, cookie_token**<br><br>
- Agora renomeie o **.env.example** para **.env**
- UID - UID da sua conta;
- ACCOUNTID - ltuid;
- COOKIE - cookie_tokenç;
- TOKEN - ltoken
- Agora vai em **src > config > config.json > discord.url** e cole a URL do seu **webhook**<br><br>
- Agora o projeto já está configura e você já pode inicializar.<br><br>

# Imagens
<img src="https://i.imgur.com/HScftMf.png">
<img src="https://i.imgur.com/flL5ahM.png">

# Agradecimentos
* Agradecimento especial para o **[thesadru](https://github.com/thesadru/genshin.py/blob/87b509eac1cfbbe901e028e06a1caec6f7dcafbc/genshin/utility/ds.py#L47)** pelo sistema de **DS**
