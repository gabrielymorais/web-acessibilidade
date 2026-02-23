# Versão A — Página NÃO Acessível (Intencional)

## Propósito
Esta é uma versão **deliberadamente não acessível** de uma página educativa sobre Segurança na Internet. O objetivo é demonstrar os impactos de **falta de acessibilidade** no uso do sistema por pessoas com diferentes necessidades.

## Erros Intencionais Implementados

### 1. ❌ Layout Fixo (sem responsividade)
- Largura fixa em **1200px** — não adapta a celulares ou tablets
- Sem media queries
- Conteúdo cortado em telas pequenas (<1024px)

### 2. ❌ Contraste Insuficiente
- Texto cinza (#c8ced8) em fundo branco
- Ratio de contraste: **4.2:1** (exigido mínimo 4.5:1 para WCAG AA)
- Difícil de ler, especialmente para pessoas com baixa visão

### 3. ❌ Estrutura HTML Não Semântica
- Tudo em `<div>` — sem `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Leitores de tela não conseguem navegar a estrutura logicamente
- Nenhum `<h1>`, `<h2>` — apenas divs com classe "título"

### 4. ❌ Imagens Sem Alt
- Exemplo: `<img src="login.jpg" />`
- Sem atributo `alt=""` → pessoas cegas não sabem o que há na imagem
- Impacto: 0% compreensão da imagem por screen reader

### 5. ❌ Navegação por Teclado Quebrada
- Links de navegação têm **`tabindex="-1"`** — impossível acessar por TAB
- Usuários que não usam mouse ficam presos
- Sem skip link para pular cabeçalho

### 6. ❌ Botões Apenas com Ícones
- Exemplo: `<div class="icon-btn">⚠️</div>`
- Sem texto descritivo
- Screen reader lê como "button ícone" indefinido
- Não é claro qual ação realiza

### 7. ❌ Links Genéricos
- "Clique aqui"
- "Saiba mais"
- "Abrir"
- Sem contexto — impossível entender para onde leva fora de contexto visual

### 8. ❌ Sem Ajuste de Fonte
- Tamanho fixo se zoom for ativado
- Pessoas com baixa visão não conseguem ampliar apenas o texto

### 9. ❌ Sem Foco Visível
- Ao navegar com TAB, não há indicador visual
- Usuário não sabe onde está o foco

### 10. ❌ Sem VLibras
- Sem integração com intérprete de Libras
- Pessoas surdas não têm acesso ao conteúdo em Libras

### 11. ❌ Sem Modo Escuro/Claro (sem adaptação visual)
- Não há alternância de tema (claro/escuro)
- Usuários sensíveis à luz (fotofobia) podem ter desconforto
- Em ambientes escuros (à noite), o brilho do fundo branco causa fadiga visual
- Não respeita preferências do sistema (como prefers-color-scheme)

### 12. ❌ Sem Modo Daltonismo (dependência de cores)
- Não há modo com paleta ajustada para daltonismo
- A interface depende de cores para transmitir significado (ex: “verde = correto”, - “vermelho = errado”)
- Pessoas com protanopia/deuteranopia podem não distinguir feedbacks visuais

Não há reforço por padrão/ícone/texto alternativo para diferenciação
## Como Testar os Problemas

### Teste de Teclado
1. Abra a página
2. Pressione **TAB** repetidamente
3. **Resultado esperado**: Links de navegação não ficam em foco (estão presos)
4. Menu hamburger não é acessível por teclado

### Teste de Contraste
1. Use uma ferramenta como [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
2. Insira `#c8ced8` (texto) em `#ffffff` (fundo)
3. **Resultado esperado**: Ratio de **4.2:1** (abaixo do mínimo de 4.5:1)

### Teste de Responsividade
1. Abra em navegador desktop (funciona)
2. Redimensione para 360px (celular)
3. **Resultado esperado**: Conteúdo sai da tela, impossível ler

### Teste de Screen Reader
1. Ative leitor de tela (NVDA, JAWS, VoiceOver)
2. Navegue pela página
3. **Resultado esperado**: Estrutura confusa, imagens sem descrição, links genéricos

## Impacto Observável
- ⏱️ **Tempo de leitura**: +40% comparado à versão B
- 😤 **Frustração**: Alta (escala 4-5/5)
- ♿ **Exclusão visual**: ~19% da população (baixa visão + cegueira)
- ⌨️ **Exclusão motora**: Usuários que usam teclado ficam bloqueados
- 👂 **Exclusão auditiva**: Sem alternativa em Libras

## Estrutura de Arquivos
```
versao-a/
├── index.html       (Página não acessível)
├── styles.css      (Estilos com contraste baixo e layout fixo)
└── README.md       (Este arquivo)
```

## Próximos Passos
Compare com a **Versão B** para ver como acessibilidade transforma a experiência do usuário.

---
**Nota**: Esta versão é intencional e educativa. Nunca publique código não acessível em produção.
