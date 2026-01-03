import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { Callout, Table, Card, Grid } from '../../../components/mdx-components';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const components = {
  Callout,
  Card,
  Grid,
  h1: (props: any) => <h1 className="text-4xl font-bold mb-6 text-white mt-8" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mt-8 mb-4 text-white border-b border-white/10 pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mt-6 mb-3 text-white" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-bold mt-4 mb-2 text-white" {...props} />,
  p: (props: any) => <p className="mb-4 text-gray-300 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2 ml-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 text-gray-300 space-y-2 ml-4" {...props} />,
  li: (props: any) => <li className="ml-2" {...props} />,
  strong: (props: any) => <strong className="font-bold text-white" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
  a: (props: any) => <a className="text-indigo-400 hover:text-indigo-300 underline" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-4 text-gray-400" {...props} />,
  code: (props: any) => <code className="bg-white/10 px-2 py-1 rounded text-sm font-mono text-indigo-300" {...props} />,
  pre: (props: any) => <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto my-4" {...props} />,
  hr: (props: any) => <hr className="my-8 border-white/10" {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse border border-white/10 rounded-lg" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-white/5" {...props} />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr className="border-b border-white/10 hover:bg-white/5" {...props} />,
  th: (props: any) => <th className="px-4 py-3 text-left font-bold text-white" {...props} />,
  td: (props: any) => <td className="px-4 py-3 text-gray-300" {...props} />,
};

async function getMDXContent(slug: string[]) {
  const filename = slug.join('/');
  const filePath = join(process.cwd(), 'public', `${filename}.mdx`);
  
  try {
    const content = await readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    return null;
  }
}

export default async function DocsPage({ params }: { params: { slug: string[] } }) {
  const content = await getMDXContent(params.slug);
  
  if (!content) {
    return (
      <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Documento não encontrado</h1>
          <p className="text-gray-400 mb-4">O arquivo solicitado não foi encontrado.</p>
          <Link href="/" className="text-indigo-400 hover:text-indigo-300 underline">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }

  // Remove imports and exports from MDX content
  const processedContent = content
    .replace(/^import\s+.*$/gm, '')
    .replace(/^export\s+const\s+meta\s*=.*$/gm, '')
    .trim();

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar
        </Link>
        <div className="max-w-none">
          <MDXRemote source={processedContent} components={components} />
        </div>
      </div>
    </div>
  );
}

