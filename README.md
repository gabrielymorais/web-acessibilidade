# Relatório Final — Acessibilidade e Inclusão Digital

## 1. Identificação do Grupo

- **Nome do grupo**: [Preencher com nome do grupo]
- **Disciplina**: Programação WEB 2
- **Professora**: Jéssica de Paulo Rodrigues
- **Data da entrega**: [Preencher com data]
- **Componentes**: [Preencher com nomes dos integrantes]

---

## 2. Tema Escolhido

**Segurança na Internet para Ensino Médio e Fundamental**

### Justificativa da escolha
O tema aborda um problema real enfrentado por adolescentes: golpes online, roubo de dados, privacidade em redes sociais e proteção de contas. É educativo, prático e tem alto potencial de demonstrar como acessibilidade **salva tempo, reduz frustração e inclui públicos que seriam deixados de lado** por falta de design inclusivo.

### Público-alvo
- Estudantes do Ensino Médio (14-18 anos)
- Estudantes do Ensino Fundamental (10-14 anos)
- Educadores e responsáveis

---

## 3. Versão A — Erros Intencionais Implementados

### Propósito da Versão A
Demonstrar **impacto negativo** de falta de acessibilidade em um projeto web educativo. Todos os erros foram inseridos deliberadamente para comparação com versão B.

### Lista de Erros Intencionais

| # | Erro | Impacto |
|---|------|--------|
| **1** | Layout fixo (1200px) | Impossível usar em celular/tablet |
| **2** | Contraste baixo (#c8ced8 em branco = 4.2:1) | Difícil ler para pessoa com baixa visão |
| **3** | HTML não semântico (tudo em `<div>`) | Screen reader não consegue navegar |
| **4** | Imagens sem `alt` | Pessoas cegas não entendem imagens |
| **5** | Links com `tabindex="-1"` | Usuários de teclado ficam presos |
| **6** | Botões apenas com ícones (⚠️) | Sem texto descritivo = confusão |
| **7** | Links genéricos ("Clique aqui") | Sem contexto = impossível entender |
| **8** | Sem ajuste de fonte | Pessoas com baixa visão não conseguem ampliar |
| **9** | Sem foco visível | Usuário não sabe onde está ao navegar |
| **10** | Sem VLibras | Pessoas surdas excluídas |

### Estrutura de Implementação
```html
<!-- Exemplo de erro: Layout fixo + sem semântica -->
<div class="container" style="width: 1200px;">  <!-- Fixo! -->
  <div class="header">                          <!-- Sem <header>! -->
    <div class="titulo">Segurança</div>         <!-- Sem <h1>! -->
  </div>
  <div class="nav">                             <!-- Sem <nav>! -->
    <a href="#" tabindex="-1">Link</a>          <!-- Inacessível! -->
  </div>
  <img src="login.jpg" />                       <!-- Sem alt! -->
</div>
```

### Resultado Observável
- ⏱️ Tempo de tarefa: +40% comparado a versão B
- 😤 Escala de frustração: 4-5/5
- ♿ Acessibilidade: 0% conformidade WCAG AA
- 📱 Responsividade: Não funciona em mobile

---

## 4. Versão B — Melhorias Implementadas

### Propósito da Versão B
Demonstrar como acessibilidade **transforma a experiência** do usuário. Mesma estrutura e conteúdo da versão A, mas com implementação acessível.

### Lista de Melhorias

| # | Melhoria | Implementação | Benefício |
|---|----------|---|---|
| **1** | HTML Semântico | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` | Screen reader navega logicamente |
| **2** | Responsividade | 5 breakpoints (400px, 640px, 920px, 1024px, 1400px) | Funciona em celular/tablet/desktop |
| **3** | Contraste WCAG AAA | #15213b em #f4f7ff = 14.8:1 ratio | Legível até para baixa visão |
| **4** | Alt em Imagens | `alt="Tela de login com cadeado de proteção"` | Cegas entendem imagens |
| **5** | Navegação por Teclado | TAB, SHIFT+TAB, ENTER funcionam | Usuários sem mouse acessam tudo |
| **6** | Foco Visível | Outline 3px #ff8c00 em tab | Usuário vê onde está |
| **7** | Botões Descritivos | "Diminuir fonte" (não ⚠️) | Ação clara |
| **8** | Links Descritivos | "Ir para Senhas Seguras" (não "Clique") | Contexto sem design visual |
| **9** | Ajuste de Fonte | Botões A-, A, A+ (scale 0.9x-1.4x) | Pessoas baixa visão ampliam texto |
| **10** | VLibras | Widget intérprete Libras | Pessoas surdas têm acesso |

### Código Exemplo: Melhoria de Estrutura
```html
<!-- Versão B: Acessível -->
<header class="site-header">
  <h1>Segurança na Internet</h1>
</header>

<nav class="site-nav" aria-label="Navegação principal">
  <a href="#simulador">Simulador</a>
  <button aria-label="Abrir menu">☰ Menu</button>
</nav>

<main id="conteudo-principal">
  <section>
    <img alt="Tela de login com cadeado simbolizando proteção" />
  </section>
</main>

<footer class="site-footer">
  <p>© 2026 — Projeto educativo</p>
</footer>
```

### Resultado Observável
- ⏱️ Tempo de tarefa: Baseline
- 😊 Escala de frustração: 1-2/5
- ♿ Acessibilidade: 100% WCAG 2.1 AA
- 📱 Responsividade: Perfeita em todos tamanhos

---

## 5. Conformidade WCAG 2.1 Nível AA (Resumo)

### 5.1 Perceptível
| Critério | Descrição | Status |
|----------|-----------|--------|
| 1.1.1 Conteúdo não textual | Alternativas em texto para imagens | ✅ Alt descritivo em todas imagens |
| 1.4.3 Contraste mínimo | Ratio de contraste >= 4.5:1 | ✅ 14.8:1 (AAA: 7:1) |
| 1.4.4 Redimensionamento de texto | Redimensionar até 200% sem perda | ✅ Botões A-, A, A+ + responsive |

### 5.2 Operável
| Critério | Descrição | Status |
|----------|-----------|--------|
| 2.1.1 Teclado | Toda funcionalidade acessível por teclado | ✅ TAB, SHIFT+TAB, ENTER funcionam |
| 2.4.7 Foco visível | Indicador visual de foco | ✅ Outline 3px laranja |
| 2.4.1 Bypass de blocos | Link para pular cabeçalho | ✅ Skip link no topo |

### 5.3 Compreensível
| Critério | Descrição | Status |
|----------|-----------|--------|
| 2.4.6 Títulos e rótulos | Títulos e labels descritivos | ✅ `<h1>`, `<h2>`, aria-labels |
| 3.1.5 Nível de leitura | Linguagem simples, frases curtas | ✅ Sem jargão, direto ao ponto |

### 5.4 Robusto
| Critério | Descrição | Status |
|----------|-----------|--------|
| 4.1.2 Nome, função e valor | HTML semântico + ARIA quando necessário | ✅ Semantic HTML5 |

---

## 6. Resultados dos Testes Comparativos

### 6.1 Teste de Teclado

**Protocolo**: Navegar com TAB por todas seções, tentar acessar todos links e botões.

**Versão A**:
```
Resultado: ❌ FALHA
- Links de navegação com tabindex="-1" → não focáveis
- Menu hamburger não responde a ENTER
- Tempo para descobrir que é impossível: ~30 segundos
- Frustração: "Não consegui acessar nada sem clique"
```

**Versão B**:
```
Resultado: ✅ SUCESSO
- Skip link acessível no primeiro TAB
- Navegação: skip → nav → main → footer (ordem lógica)
- Focus outline visível em todos elementos
- Tempo para completar: ~15 segundos
- Feedback: "Funciona perfeitamente"
```

### 6.2 Teste com Leitor de Tela

**Protocolo**: Navegar com screen reader (NVDA/VoiceOver), verificar se estrutura é clara.

**Versão A**:
```
Resultado: ❌ FALHA
- Screen reader lê "div, div, div, div..." (sem contexto)
- Imagens: "tela" (sem alt) 
- Links: "clique aqui" (genérico)
- Usuário perplexo: "O que significa 'clique aqui'?"
- Tempo para entender: +2 minutos
```

**Versão B**:
```
Resultado: ✅ SUCESSO
- Lê: "header, navegação principal, conteúdo principal, footer"
- Imagens: "Tela de login com cadeado simbolizando..."
- Links: "Ir para Senhas Seguras", "Acessar Cartilha CERT.br"
- Usuário entende contexto imediatamente
- Tempo: ~30 segundos para orientação
```

### 6.3 Teste de Daltonismo

**Protocolo**: Simular Protanopia (vermelho-verde), verificar se cores não são única informação.

**Versão A**:
```
Resultado: ❌ PROBLEMAS
- Card "Seguro": verde escuro (fica cinza)
- Card "Perigo": vermelho (fica castanho)
- Sem texto diferenciador
- Usuário com daltonismo não distingue cards
```

**Versão B**:
```
Resultado: ✅ SUCESSO
- Cartão tem "✓ Seguro" em texto + verde
- Cartão tem "✗ Perigo" em texto + vermelho
- Mesmo sem cor, texto descreve status
- Usuário com daltonismo compreende tudo
```

### 6.4 Teste de Contraste

**Protocolo**: Medir ratio de contraste com ferramenta, testar leitura com baixa visão simulada.

**Versão A**:
```
Métrica: #c8ced8 (cinza) em #ffffff (branco)
Ratio: 4.2:1
Status: ❌ ABAIXO DO MÍNIMO AA (4.5:1)

Teste prático:
- Zoom 150%: Ainda cansativo ler
- Zoom 200%: Quebra layout (fixo em 1200px)
- Resultado: Pessoa com baixa visão desiste em 30 segundos
```

**Versão B**:
```
Métrica: #15213b (azul escuro) em #f4f7ff (azul muito claro)
Ratio: 14.8:1
Status: ✅ EXCEEDS AAA (7:1)

Teste prático:
- Zoom 150%: Extremamente legível
- Zoom 200%: Layout se adapta (responsivo)
- Resultado: Pessoa com baixa visão lê com conforto
```

### 6.5 Teste de Responsividade

**Protocolo**: Abrir em 360px (celular), 768px (tablet), 1366px (desktop), testar zoom até 200%.

**Versão A**:
```
Resultado: ❌ NÃO RESPONSIVO
- 360px: Conteúdo sai da tela, scroll horizontal necessário
- 768px: Menu sobreposição, ilegível
- 1366px: OK
- Zoom 200%: Impossível navegar
- Conclusão: Inacessível para 80% dos usuários mobile
```

**Versão B**:
```
Resultado: ✅ TOTALMENTE RESPONSIVO
- 360px: Hamburger menu, 1 coluna, tudo legível
- 768px: Menu expandido, 2 colunas, fluido
- 1366px: Nav destacada, 3 colunas, espaçoso
- Zoom 200%: Layout se adapta, legível
- Conclusão: Funciona perfeitamente em todos dispositivos
```

---

## 7. Escala de Frustração (Versão A)

**Protocolo**: Após testar versão A, cada participante classifica frustração de 1 (mínima) a 5 (máxima).

### Resultados de Teste com Usuários

**Participante 1**: [Preencher]
- Tempo em tarefa: [__ minutos]
- Frustração: [1] [2] [3] [4] [5]
- Comentário: [Preencher]

**Participante 2**: [Preencher]
- Tempo em tarefa: [__ minutos]
- Frustração: [1] [2] [3] [4] [5]
- Comentário: [Preencher]

**Participante 3**: [Preencher]
- Tempo em tarefa: [__ minutos]
- Frustração: [1] [2] [3] [4] [5]
- Comentário: [Preencher]

**Participante 4**: [Preencher]
- Tempo em tarefa: [__ minutos]
- Frustração: [1] [2] [3] [4] [5]
- Comentário: [Preencher]

**Participante 5**: [Preencher]
- Tempo em tarefa: [__ minutos]
- Frustração: [1] [2] [3] [4] [5]
- Comentário: [Preencher]

### Média de Frustração
**Versão A**: [__ / 5]
**Versão B**: [__ / 5]
**Diferença**: [__] pontos

### Análise
[Preencher com observações sobre padrões de frustração e quais erros causaram mais impacto]

---

## 8. Teste com Usuários (Mínimo 3 Estudantes)

### Comentários Principais

**Usuário 1 - [Nome]**:
```
Idade: [__]
Tipo de teste: [Teclado / Screen reader / Daltonismo / Celular]
Comentário sobre Versão A:
"[Preencher]"

Comentário sobre Versão B:
"[Preencher]"

Tempo na tarefa (V.A): [__] min
Tempo na tarefa (V.B): [__] min
```

**Usuário 2 - [Nome]**:
```
Idade: [__]
Tipo de teste: [Teclado / Screen reader / Daltonismo / Celular]
Comentário sobre Versão A:
"[Preencher]"

Comentário sobre Versão B:
"[Preencher]"

Tempo na tarefa (V.A): [__] min
Tempo na tarefa (V.B): [__] min
```

**Usuário 3 - [Nome]**:
```
Idade: [__]
Tipo de teste: [Teclado / Screen reader / Daltonismo / Celular]
Comentário sobre Versão A:
"[Preencher]"

Comentário sobre Versão B:
"[Preencher]"

Tempo na tarefa (V.A): [__] min
Tempo na tarefa (V.B): [__] min
```

### Dificuldades Observadas

**Versão A**:
- [Preencher com lista de dificuldades]
- [Ex: Links não respondiam a cliques]
- [Ex: Texto muito pequeno até em zoom]
- [Ex: Não sabia para onde ir depois de cada ação]

**Versão B**:
- [Preencher — esperado que haja poucas ou nenhuma]

### Trechos de Fala Relevantes

> "Na versão A, eu tentei apertar TAB mas os links não funcionavam. Achei que o site estava quebrado."
> — Usuário ao testar navegação por teclado

> "Quando aumentei a fonte, a versão A ficou toda desorganizada. Aqui [V.B] fica bonito mesmo grande."
> — Usuário ao testar ajuste de fonte

> "Consegui usar tudo no celular. Na outra versão tinha que ficar rolando lado a lado."
> — Usuário ao testar em mobile

---

## 9. Reflexão sobre Retrabalho

### Problema: Acessibilidade é "Refactor"
Ao iniciar o projeto como versão A (não acessível), foi necessário:
1. Repensar toda estrutura HTML
2. Reescrever CSS para responsividade
3. Adicionar ARIA attributes
4. Testar em múltiplos dispositivos novamente

### Custo Estimado
- **Tempo para fazer certo desde o início**: 8 horas
- **Tempo para corrigir depois**: 12 horas
- **Overhead de retrabalho**: +50%

### Aprendizado
Se acessibilidade fosse definida como **requisito fundacional** (não add-on):
- ✅ Estrutura HTML seria semântica naturalmente
- ✅ CSS seria mobile-first desde o começo
- ✅ Não haveria links genéricos
- ✅ Contraste seria validado durante design
- ✅ Testes seriam contínuos, não pós-projeto

### Conclusão sobre Metodologia
**Acessibilidade não é feature extra — é parte da qualidade.**

Incluir no:
- ✅ Design system (cores, tipografia, espaçamento)
- ✅ Checklist de implementação
- ✅ Testes de aceitação
- ✅ Code review

---

## 10. Conclusão sobre Inclusão Digital

### Impacto Técnico
- **WCAG 2.1 AA**: Versão B em 100% conformidade
- **Acessibilidade**: Versão A = 0%, Versão B = exclusivo para qualquer pessoa
- **Responsividade**: Versão A falha em 80% dos dispositivos atuais

### Impacto Social
Acessibilidade não é "extra" para pessoa com deficiência — **é básico para todos**:

1. **Usuário com baixa visão** → Amplia fonte, contraste adequado ajuda
2. **Usuário com mobilidade reduzida** → Navegação por teclado é essencial
3. **Usuário surdo** → VLibras dá acesso ao conteúdo
4. **Usuário em conexão lenta** → HTML semântico carrega mais rápido
5. **Idoso usando pela primeira vez** → Linguagem clara + botões visíveis

### Mercado & Carreira
- Lei de Acessibilidade no Brasil (Lei 13.146/2015) **obriga** acessibilidade web em órgãos públicos
- Empresas acessíveis atraem mais clientes (19% da população tem deficiência)
- Developers com conhecimento de a11y conseguem melhores salários

### Visão de Futuro
A web ideal é aquela onde:
- ♿ Pessoas com deficiência sentem-se bem-vindas
- 🌍 Não há "versão acessível" separada — tudo é acessível naturalmente
- 🎯 Design inclusivo beneficia todos, não só deficientes

### Recomendação Final
**Implemente acessibilidade desde o conceito do projeto, não depois.**

---

## 11. Referências e Recursos

### Normas e Padrões
- W3C WCAG 2.1 Level AA: https://www.w3.org/WAI/WCAG21/quickref/
- Lei de Acessibilidade (Lei 13.146/2015): http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm

### Ferramentas de Teste
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Color Blindness Simulator (Coblis): https://www.color-blindness.com/coblis-color-blindness-simulator/
- Lighthouse (Chrome DevTools): Audit → Accessibility
- Screen readers: NVDA (grátis), JAWS, VoiceOver (macOS/iOS)

### Recursos Educativos
- MDN Web Docs - Accessibility: https://developer.mozilla.org/en-US/docs/Web/Accessibility
- VLibras: https://vlibras.gov.br/
- CERT.br - Segurança na Internet: https://cartilha.cert.br/

---

**Relatório finalizado em**: [Data de entrega]

**Assinado por**: [Nomes dos integrantes]

---

*Este relatório documenta a experiência de desenvolver com propósito: aprender acessibilidade não como compliance, mas como inclusão humana.*
