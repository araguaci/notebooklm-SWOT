"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FileText, Video, Music, Image as ImageIcon, 
  Download, ExternalLink, BookOpen, FileCheck, Link as LinkIcon, Notebook,
  Target, TrendingUp, Shield, AlertTriangle, Zap, Globe, Github, Heart
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- COMPONENTS ---

// 1. HERO SECTION
const Hero = () => (
  <section className="flex flex-col items-center justify-center pt-32 pb-20 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6"
    >
      <BookOpen size={14} /> Análise SWOT - NotebookLM
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-center bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent px-4"
    >
      🛰️ SWOT: Da Estratégia Empresarial <br className="hidden md:block" /> ao Monitoramento Oceânico Global
    </motion.h1>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-8 text-gray-300 text-base md:text-lg max-w-4xl text-center leading-relaxed px-4"
    >
      <p className="mb-4">
        Os textos detalham a <strong className="text-white">Análise SWOT</strong>, também conhecida como <strong className="text-white">Matriz FOFA</strong>, uma ferramenta estratégica essencial para diagnosticar <strong className="text-indigo-300">forças, fraquezas, oportunidades e ameaças</strong> em contextos empresariais, tecnológicos e pessoais.
      </p>
      <p className="mb-4">
        As fontes exploram desde as <strong className="text-white">origens históricas</strong> do método na década de 1960 até sua aplicação moderna em <strong className="text-white">engenharia de software</strong> e no monitoramento ambiental, como exemplificado pela missão satelital <strong className="text-cyan-300">SWOT (Surface Water and Ocean Topography)</strong>.
      </p>
      <p className="mb-4">
        Um destaque central é a <strong className="text-indigo-300">Análise SWOT Cruzada (TOWS)</strong>, que evolui o diagnóstico inicial ao conectar fatores internos e externos para gerar <strong className="text-white">planos de ação</strong> ofensivos, defensivos, de reforço ou confrontativos.
      </p>
      <p className="text-sm text-gray-400 italic">
        Embora o método seja elogiado por sua <strong>simplicidade, baixo custo e visão holística</strong>, os autores alertam para limitações como a <strong>subjetividade</strong>, a falta de métricas rígidas e a necessidade de evitar o otimismo excessivo na identificação de falhas.
      </p>
    </motion.div>
  </section>
);

// 2. SWOT INFO SECTION
const SWOTInfoSection = () => (
  <section className="max-w-7xl mx-auto px-4 py-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
        Sobre a Análise SWOT
      </h2>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto">
        Uma ferramenta estratégica essencial para tomada de decisão baseada em dados
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 hover:border-indigo-500/50 transition-all"
      >
        <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit mb-4">
          <Target size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Origem Histórica</h3>
        <p className="text-gray-400 text-sm">
          Desenvolvida na década de 1960, a análise SWOT tornou-se uma das ferramentas estratégicas mais utilizadas no mundo empresarial.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 hover:border-indigo-500/50 transition-all"
      >
        <div className="p-3 rounded-xl bg-green-500/10 text-green-400 w-fit mb-4">
          <TrendingUp size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Aplicações Modernas</h3>
        <p className="text-gray-400 text-sm">
          Desde engenharia de software até monitoramento ambiental, como a missão satelital SWOT da NASA.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 hover:border-indigo-500/50 transition-all"
      >
        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4">
          <Zap size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">SWOT Cruzada (TOWS)</h3>
        <p className="text-gray-400 text-sm">
          Evolução que conecta fatores internos e externos para gerar planos de ação concretos e acionáveis.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 hover:border-indigo-500/50 transition-all"
      >
        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-4">
          <Shield size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Vantagens</h3>
        <p className="text-gray-400 text-sm">
          Simplicidade, baixo custo, visão holística e capacidade de reduzir riscos e maximizar vantagens competitivas.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 hover:border-indigo-500/50 transition-all"
      >
        <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-4">
          <Globe size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Contextos de Uso</h3>
        <p className="text-gray-400 text-sm">
          Aplicável em contextos empresariais, tecnológicos e pessoais para diagnóstico estratégico completo.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 hover:border-indigo-500/50 transition-all"
      >
        <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-400 w-fit mb-4">
          <AlertTriangle size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Limitações</h3>
        <p className="text-gray-400 text-sm">
          Subjetividade, falta de métricas rígidas e necessidade de evitar otimismo excessivo na identificação de falhas.
        </p>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-8 text-center"
    >
      <h3 className="text-2xl font-bold text-white mb-4">
        Tomada de Decisão Baseada em Dados
      </h3>
      <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
        A análise SWOT apresenta a ferramenta como um guia prático para <strong className="text-white">tomada de decisão baseada em dados</strong>, visando reduzir riscos e maximizar vantagens competitivas no mercado. Em suma, é uma metodologia que transforma diagnóstico em ação estratégica.
      </p>
    </motion.div>
  </section>
);

// 3. NOTEBOOK SECTION
interface Notebook {
  id: string;
  url: string;
  title: string;
  description?: string;
}

const NotebookSection = () => {
  const [notebooks, setNotebooks] = useState<Notebook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/materials.json")
      .then((res) => res.json())
      .then((data) => {
        setNotebooks(data.notebooks || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar notebooks:", err);
        setLoading(false);
      });
  }, []);

  if (loading || notebooks.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Notebook Vinculado
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notebooks.map((notebook, index) => (
          <motion.div
            key={notebook.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-3xl bg-white/[0.02] border border-white/10 p-6 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Notebook size={24} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{notebook.title}</h3>
              {notebook.description && (
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{notebook.description}</p>
              )}

              <div className="flex flex-wrap gap-2">
                <a
                  href={notebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg text-sm font-medium transition-colors"
                >
                  <ExternalLink size={16} />
                  Abrir no NotebookLM
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// 4. MATERIALS SECTION
const MaterialCard = ({
  title,
  description,
  type,
  file,
  icon,
  delay,
  notebookUrl,
  tags
}: {
  title: string;
  description: string;
  type: "document" | "video" | "audio" | "image";
  file: string;
  icon: React.ReactNode;
  delay: number;
  notebookUrl?: string;
  tags?: string[];
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTypeColor = () => {
    switch (type) {
      case "document": return "from-indigo-500/20 to-purple-500/20";
      case "video": return "from-red-500/20 to-pink-500/20";
      case "audio": return "from-green-500/20 to-emerald-500/20";
      case "image": return "from-blue-500/20 to-cyan-500/20";
      default: return "from-gray-500/20 to-gray-600/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl bg-white/[0.02] border border-white/10 p-6 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor()} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
            {icon}
          </div>
          <a
            href={`/${file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            onClick={(e) => {
              if (type === "image") {
                e.preventDefault();
                window.open(`/${file}`, "_blank");
              }
            }}
          >
            <ExternalLink size={18} className="text-gray-400" />
          </a>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <a
            href={`/${file}`}
            download
            className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg text-sm font-medium transition-colors"
          >
            <Download size={16} />
            Baixar
          </a>
          <a
            href={`/${file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm font-medium transition-colors"
          >
            <ExternalLink size={16} />
            Abrir
          </a>
          {notebookUrl && (
            <a
              href={notebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm font-medium transition-colors"
              title="Abrir no NotebookLM"
            >
              <LinkIcon size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface Material {
  id: string;
  title: string;
  description: string;
  type: "document" | "video" | "audio" | "image";
  file: string;
  category: string;
  notebookUrl?: string;
  tags?: string[];
}

const MaterialsSection = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/materials.json")
      .then((res) => res.json())
      .then((data) => {
        setMaterials(data.materials || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar materiais:", err);
        setLoading(false);
      });
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText size={24} />;
      case "video":
        return <Video size={24} />;
      case "audio":
        return <Music size={24} />;
      case "image":
        return <ImageIcon size={24} />;
      default:
        return <FileCheck size={24} />;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Materiais Disponíveis
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Todos os artefatos gerados pelo NotebookLM organizados por categoria
        </p>
      </motion.div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-400"></div>
          <p className="mt-4 text-gray-400">Carregando materiais...</p>
        </div>
      ) : materials.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Nenhum material encontrado.</p>
          <p className="text-gray-500 text-sm mt-2">
            Adicione materiais editando o arquivo <code className="bg-white/5 px-2 py-1 rounded">public/materials.json</code>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Ou use o comando: <code className="bg-white/5 px-2 py-1 rounded">npm run add-material</code>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <MaterialCard
              key={material.id}
              title={material.title}
              description={material.description}
              type={material.type}
              file={material.file}
              icon={getIcon(material.type)}
              delay={index * 0.1}
              notebookUrl={material.notebookUrl}
              tags={material.tags}
            />
          ))}
        </div>
      )}
    </section>
  );
};

// 5. MEDIA PREVIEW SECTION
const MediaPreview = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/materials.json")
      .then((res) => res.json())
      .then((data) => {
        setMaterials(data.materials || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar materiais:", err);
        setLoading(false);
      });
  }, []);

  const videos = materials.filter((m) => m.type === "video");
  const audios = materials.filter((m) => m.type === "audio");
  const images = materials.filter((m) => m.type === "image");

  if (loading) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Visualizações
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Video Players */}
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-3xl bg-white/[0.02] border border-white/10 p-6 overflow-hidden"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Video size={24} className="text-red-400" />
              {video.title}
            </h3>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/20">
              <video
                controls
                className="w-full h-full"
                src={`/${video.file}`}
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </motion.div>
        ))}

        {/* Audio Players */}
        {audios.map((audio, index) => (
          <motion.div
            key={audio.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (videos.length + index) * 0.1 }}
            className="rounded-3xl bg-white/[0.02] border border-white/10 p-6"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Music size={24} className="text-green-400" />
              {audio.title}
            </h3>
            <div className="relative rounded-xl overflow-hidden bg-black/20 p-4">
              <audio
                controls
                className="w-full"
                src={`/${audio.file}`}
              >
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>
          </motion.div>
        ))}

        {/* Image Previews */}
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (videos.length + audios.length + index) * 0.1 }}
            className="lg:col-span-2 rounded-3xl bg-white/[0.02] border border-white/10 p-6"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <ImageIcon size={24} className="text-blue-400" />
              {image.title}
            </h3>
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden bg-black/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/${image.file}`}
                alt={image.title}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// 6. FOOTER
const Footer = () => (
  <footer className="border-t border-white/10 pt-20 pb-10 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
        Artefatos do NotebookLM
      </h3>
      <p className="text-gray-400 mb-6 text-sm">
        Organize e compartilhe seus estudos do NotebookLM
      </p>
      
      <div className="mb-6 pt-6 border-t border-white/5">
        <p className="text-gray-500 text-xs mb-3">
          Baseado no template open source
        </p>
        <div className="flex flex-col items-center gap-3 text-sm">
          <a
            href="https://github.com/araguaci/notebooklm-showcase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <Github size={16} />
            <span>notebooklm-showcase</span>
            <ExternalLink size={14} />
          </a>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span>Criado por</span>
            <a
              href="https://github.com/araguaci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              @araguaci
            </a>
            <span>•</span>
            <a
              href="https://artesdosul.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
            >
              <span>@artesdosul</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
        Feito com <Heart size={12} className="text-red-400 fill-red-400" /> para a comunidade
      </p>
      <p className="text-gray-600 text-xs mt-2">
        © {new Date().getFullYear()} - Template open source
      </p>
    </div>
  </footer>
);

// --- MAIN PAGE ---
export default function Page() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <SWOTInfoSection />
        <NotebookSection />
        <MaterialsSection />
        <MediaPreview />
        <Footer />
      </div>
    </div>
  );
}

