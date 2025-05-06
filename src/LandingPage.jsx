import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Stethoscope, Code, BarChart2, LifeBuoy, SlidersHorizontal } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function LandingPage() {
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href !== "#") {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    });
  }, []);

  const [currentHero, setCurrentHero] = useState(0);

  const heroSlides = [
    {
      video: "/medico-fundo.mp4",
      titulo: "Excelência em Sistemas para sua Empresa",
      descricao: "Desenvolvemos softwares que transformam a gestão de hospitais, clínicas e negócios com eficiência e inovação."
    },
    {
      video: "/tecnologia-fundo.mp4",
      titulo: "Inteligência e automação para suas decisões mais importantes",
      descricao: "Transformamos dados em decisões com painéis, relatórios e robôs sob medida para o seu hospital!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const solucoes = [
    {
      title: "Consultoria Hospitalar",
      description: "Consultorias especializadas para otimizar processos clínicos e administrativos.",
      icon: <Stethoscope className="w-10 h-10 text-blue-400 mb-4 group-hover:text-blue-700 transition-colors" />,
      link: "/consultoria-hospitalar"
    },
    {
      title: "Desenvolvimento de Software",
      description: "Sistemas personalizados para gestão, controle e inovação da sua empresa.",
      icon: <Code className="w-10 h-10 text-blue-400 mb-4 group-hover:text-blue-700 transition-colors" />,
      link: "/desenvolvimento-software"
    },
    {
      title: "Inteligência de Dados",
      description: "Transforme dados em decisões estratégicas com nossas soluções de BI e análise.",
      icon: <BarChart2 className="w-10 h-10 text-blue-400 mb-4 group-hover:text-blue-700 transition-colors" />,
      link: "/inteligencia-dados"
    },
    {
      title: "Suporte Técnico",
      description: "Equipe pronta para garantir a operação contínua e segura dos seus sistemas.",
      icon: <LifeBuoy className="w-10 h-10 text-blue-400 mb-4 group-hover:text-blue-700 transition-colors" />,
      link: "/suporte-tecnico"
    },
    {
      title: "Soluções Sob Medida",
      description: "Desenvolvimento de sistemas personalizados conforme sua demanda.",
      icon: <SlidersHorizontal className="w-10 h-10 text-blue-400 mb-4 group-hover:text-blue-700 transition-colors" />,
      link: "/solucoes-sob-medida"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50 text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-6 py-2 bg-white shadow-md">
        <div className="flex items-center gap-6">
          <img src="/logo-ma-tecnologia.png" alt="MA Tecnologia Logo" className="h-20 w-auto object-contain" />
          <nav className="flex items-center gap-10 text-lg font-semibold">
            <a href="#hero" className="text-black hover:text-white hover:bg-blue-700 px-4 py-2 rounded">Home</a>
            <a href="#sobre" className="text-black hover:text-white hover:bg-blue-700 px-4 py-2 rounded">Sobre</a>
            <a href="#solucoes" className="text-black hover:text-white hover:bg-blue-700 px-4 py-2 rounded">Soluções</a>
            <a href="#contato" className="text-black hover:text-white hover:bg-blue-700 px-4 py-2 rounded">Contato</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contato" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-full shadow hover:brightness-110">Fale Conosco</a>
          <a href="#cliente" className="bg-white border border-blue-700 text-blue-700 px-5 py-2 rounded-full hover:bg-blue-700 hover:text-white">Já sou cliente</a>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative scroll-mt-32 h-[650px] flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <video
            key={index}
            autoPlay
            muted
            loop
            playsInline
            src={slide.video}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentHero ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
          />
        ))}

        <div className="absolute z-10 bg-white bg-opacity-80 p-8 rounded-xl max-w-2xl text-center transition-all duration-700">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Soluções Tecnológicas
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
            {heroSlides[currentHero].titulo}
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            {heroSlides[currentHero].descricao}
          </p>
          <a href="#contato" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800">
            Solicitar Demonstração
          </a>
        </div>

        <div className="absolute bottom-4 right-4 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHero(index)}
              className={`w-3 h-3 rounded-full border border-white ${index === currentHero ? 'bg-white' : 'bg-transparent'} transition-all duration-300`}
            />
          ))}
        </div>
      </section>

      {/* Soluções */}
      <section id="solucoes" className="scroll-mt-32 py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Nossas Soluções</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
          {solucoes.map((s, i) => (
            <div key={i} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 p-6 flex flex-col justify-between">
              <div>
                {s.icon}
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>
              <div className="mt-4 text-right">
                <Link to={s.link} className="inline-block text-sm text-blue-600 font-medium hover:underline">Saiba mais →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="scroll-mt-32 py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Sobre a MA Tecnologia</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg">
          A MA Tecnologia é uma empresa especializada no desenvolvimento de sistemas inteligentes para clínicas médicas, eventos e organizações. Com foco em inovação, eficiência e atendimento personalizado, oferecemos soluções que geram resultados concretos.
        </p>
      </section>

      {/* Contato */}
      <section id="contato" className="scroll-mt-32 py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Entre em Contato</h2>
        <form className="max-w-xl mx-auto space-y-6">
          <input type="text" placeholder="Seu nome" className="w-full border px-4 py-3 rounded-xl" />
          <input type="email" placeholder="Seu e-mail" className="w-full border px-4 py-3 rounded-xl" />
          <textarea placeholder="Sua mensagem" rows="5" className="w-full border px-4 py-3 rounded-xl"></textarea>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-800">
              Enviar Mensagem
            </button>
          </div>
        </form>
      </section>

      {/* Clientes */}
      <section className="py-20 px-8 bg-gradient-to-b from-blue-800 via-blue-700 to-blue-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Nossos Clientes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center max-w-6xl mx-auto">
          {[
            { nome: "CMD Clínica Médica Diagnóstico", logo: "/logo-cmd.png" },
            { nome: "INGOH", logo: "/logo-ingoh.png" },
            { nome: "Banco de Olhos de Goiás", logo: "/logo-banco-olhos.png" },
          ].map((cliente, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="h-48 w-48 md:h-52 md:w-52 bg-[#e6ecf0] rounded-full flex items-center justify-center p-6">
                <img src={cliente.logo} alt={cliente.nome} className="h-full w-full object-contain grayscale hover:grayscale-0 transition duration-300" />
              </div>
              <p className="text-white text-sm text-center">{cliente.nome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MA Tecnologia. Todos os direitos reservados.
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5562999999999?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20MA%20Tecnologia!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 z-50"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}