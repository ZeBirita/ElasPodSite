# ElasPod

Site oficial do ElasPod: um podcast e uma comunidade de escuta, acolhimento e transformação para mulheres. O site é estático e usa HTML, CSS e JavaScript, sem dependências de build.

## Executar localmente

Abra `index.html` no navegador ou sirva a pasta com qualquer servidor HTTP estático. O site está preparado para `https://elaspod.com/`.

## Publicar episódios

As capas e os textos dos oito cartões estão em `index.html`. Quando o áudio de um episódio estiver disponível:

1. Coloque o ficheiro numa localização publicada, por exemplo `assets/audio/episodio-01.mp3`, ou use um URL HTTPS.
2. Preencha o atributo `data-src` do respetivo elemento `audio` com o caminho ou URL do ficheiro.
3. Atualize o estado e a data do episódio no cartão.

O JavaScript ativa o controlo nativo de áudio apenas quando `data-src` está preenchido. Sem ficheiro configurado, o cartão indica «Áudio em breve».

## Contacto e Rodas de Conversa

Os botões abrem uma conversa no WhatsApp oficial `+351 910 526 079`, com a mensagem pré-configurada. O URL usa o formato `https://wa.me/351910526079`.

## Estrutura

- `index.html`: conteúdo, navegação e metadados do site.
- `assets/css/style.css`: identidade visual responsiva.
- `assets/js/script.js`: menu móvel, controlos de áudio e voltar ao início.
- `assets/images/`: imagens e capas disponíveis no projeto.
