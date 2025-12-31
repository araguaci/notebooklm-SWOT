# 📓 Informações do Notebook

## Notebook Vinculado

- **ID**: `b6025eba-787a-480f-8f3f-d70f2e5873a8`
- **URL**: https://notebooklm.google.com/notebook/b6025eba-787a-480f-8f3f-d70f2e5873a8
- **Título**: NotebookLM - Análise SWOT

## 🚀 Como Usar

### 1. Executar o Projeto

```bash
pnpm dev
```

Acesse `http://localhost:3000` no navegador.

### 2. Adicionar Materiais do NotebookLM

#### Opção A: Script Interativo (Recomendado)

```bash
pnpm run add-material
```

Siga as instruções do script para adicionar cada material.

#### Opção B: Edição Manual

1. Baixe os artefatos do NotebookLM (PDFs, vídeos, áudios, imagens)
2. Mova os arquivos para a pasta `./public/`
3. Edite o arquivo `public/materials.json` e adicione as informações de cada material

### 3. Estrutura de um Material

```json
{
  "id": "identificador-unico",
  "title": "Título do Material",
  "description": "Descrição detalhada",
  "type": "document|video|audio|image",
  "file": "nome-do-arquivo.extensao",
  "category": "documentos|videos|audios|imagens",
  "notebookUrl": "https://notebooklm.google.com/notebook/b6025eba-787a-480f-8f3f-d70f2e5873a8",
  "tags": ["Tag1", "Tag2"]
}
```

## 📋 Tipos de Material Suportados

- **document**: PDF, MD, TXT, DOCX
- **video**: MP4, WebM
- **audio**: M4A, MP3, WAV
- **image**: PNG, JPG, SVG

## 🔗 Links Úteis

- [NotebookLM Original](https://notebooklm.google.com/notebook/b6025eba-787a-480f-8f3f-d70f2e5873a8)
- [Documentação do Projeto](./README.md)
- [Guia Completo de Materiais](./GUIA_ADICIONAR_MATERIAIS.md)

