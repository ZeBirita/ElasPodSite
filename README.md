# ElasPod

Site oficial do ElasPod: um podcast e uma comunidade de escuta, acolhimento e transformação para mulheres. O site é estático e usa HTML, CSS e JavaScript, sem dependências de build.

## Executar localmente

Abra `index.html` no navegador ou sirva a pasta com qualquer servidor HTTP estático. O site está preparado para `https://elaspod.com/`.

## Páginas

- `index.html`: página inicial e seleção dos episódios mais recentes (até oito).
- `episodios.html`: catálogo completo carregado do arquivo central de dados.
- `sobre.html`: missão, visão, valores e apresentação do projeto e da idealizadora.
- `rodas-de-conversa.html`: funcionamento, combinados de cuidado e agendamento.
- `contato.html`: canal oficial de contato.

## Atualizar episódios

Todos os dados dos episódios ficam em `assets/js/episodes.js`. Para adicionar, atualizar ou remover um episódio, edite apenas esse catálogo: número, título, descrição, duração, URL do áudio e caminho da capa. Os cartões da página inicial e do catálogo completo são gerados automaticamente com esses dados.

Os campos `duration` e `audioUrl` podem ficar vazios enquanto a gravação não estiver publicada. URLs de episódios do Spotify são apresentados como players incorporados; ficheiros de áudio e outros URLs diretos usam o player nativo. As capas devem ser guardadas em `assets/images/`.

## Contacto e design

Os botões abrem uma conversa no WhatsApp oficial `+351 910 526 079`. O endereço usa o formato `https://wa.me/351910526079`. Os estilos responsivos compartilhados estão em `assets/css/style.css`; a navegação móvel e a renderização dos episódios ficam em `assets/js/script.js`.
