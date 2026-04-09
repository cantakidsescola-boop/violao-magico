import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Music, 
  Sparkles, 
  ShieldCheck, 
  Gamepad2, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Play,
  ChevronDown,
  MessageCircle
} from 'lucide-react';
import MagicParticles from './components/MagicParticles';

const faqs = [
  {
    question: "Para qual idade o método é recomendado?",
    answer: "O Violão Mágico foi desenhado especialmente para crianças de 5 a 12 anos, com uma linguagem lúdica e missões fáceis de acompanhar."
  },
  {
    question: "Precisa ter um violão em casa?",
    answer: "Sim! O aplicativo ouve as notas reais que a criança toca no violão para dar o feedback na tela. Um violão infantil simples já é o suficiente para começar."
  },
  {
    question: "Como vou receber o acesso?",
    answer: "Assim que o pagamento for confirmado, você receberá um e-mail com o link de acesso e sua senha para baixar o aplicativo e começar a jogar."
  },
  {
    question: "E se meu filho não gostar?",
    answer: "Você tem 7 dias de garantia incondicional. Se a criança não se adaptar ou você não gostar do método, devolvemos 100% do seu dinheiro, sem burocracia."
  }
];

function FAQItem({ faq }: { faq: { question: string, answer: string }, key?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass-card rounded-2xl overflow-hidden border-white/10 transition-all mb-4">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <span className="font-display font-bold text-lg text-gray-200">{faq.question}</span>
        <ChevronDown className={`w-5 h-5 text-magic-purple transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-gray-400">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-magic-dark font-sans text-white selection:bg-magic-pink selection:text-white relative overflow-hidden">
      <MagicParticles />

      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-magic-sky flex items-center justify-center glow-purple">
            <Music className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight">Violão Mágico</span>
        </div>
        <a href="https://ggcheckout.app/checkout/v2/G65twmmZoF9HNY3RxtsY" className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all font-medium">
          Acessar App
        </a>
      </nav>

      <main className="relative z-10">
        {/* SECTION 1: HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-magic-purple/20 border border-magic-purple/30 text-magic-purple mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">O Despertar do Talento</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Transforme o aprendizado de violão na <span className="text-gradient">melhor brincadeira</span> do seu filho.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              O método gamificado que ensina crianças a tocarem suas primeiras músicas em tempo recorde, sem tédio e sem cobranças. Por apenas R$27.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.a 
                href="https://ggcheckout.app/checkout/v2/G65twmmZoF9HNY3RxtsY"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-magic-sky font-bold text-lg shadow-[0_0_40px_rgba(236,72,153,0.4)] hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all flex items-center justify-center gap-2"
              >
                COMEÇAR AGORA
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <p className="text-sm text-gray-400 font-medium">Acesso imediato • Pagamento único</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
            {/* Floating Mockup */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-20 rounded-[2.5rem] p-2 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl glow-blue"
            >
              <div className="rounded-[2rem] overflow-hidden bg-gray-900 aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Criança tocando violão feliz" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                {/* App UI Overlay Mockup */}
                <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-magic-yellow flex items-center justify-center">
                      <Star className="w-6 h-6 text-yellow-900 fill-current" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg">Missão Concluída!</p>
                      <p className="text-sm text-gray-300">+50 Estrelas Mágicas</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                    <Play className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-magic-purple/20 blur-[100px] rounded-full z-0"></div>
          </motion.div>
        </section>

        {/* SECTION 2: PAIN POINTS */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Aulas chatas e teoria maçante? <span className="text-magic-pink">Nunca mais.</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Esqueça as partituras complicadas e os exercícios repetitivos que fazem as crianças desistirem na primeira semana.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 border-red-500/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-300">Método Tradicional</h3>
                </div>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    Teoria musical complexa antes de tocar a primeira nota.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    Exercícios repetitivos que causam dor nos dedos e frustração.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✕</span>
                    Músicas antigas que não conectam com o universo da criança.
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 border-magic-blue/30 relative overflow-hidden group glow-blue"
              >
                <div className="absolute inset-0 bg-magic-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-magic-blue/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-magic-blue" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Violão Mágico</h3>
                </div>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="text-magic-blue mt-1">✓</span>
                    Toca a primeira música em 15 minutos através de cores.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-magic-blue mt-1">✓</span>
                    Aprende brincando com missões e recompensas visuais.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-magic-blue mt-1">✓</span>
                    Repertório atualizado com as músicas favoritas deles.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3: FEATURES GRID */}
        <section className="py-24 relative bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Por dentro do <span className="text-gradient">Reino Mágico</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Tudo que seu filho precisa para se apaixonar pela música, em um ambiente seguro e encantador.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Gamepad2,
                  title: "Missões Musicais",
                  desc: "O aprendizado vira um jogo. Cada nota certa é um passo para salvar o reino da música.",
                  color: "text-magic-purple",
                  bg: "bg-magic-purple/20"
                },
                {
                  icon: Music,
                  title: "Músicas que Amam",
                  desc: "De trilhas de filmes a sucessos infantis. Eles tocam o que realmente gostam de ouvir.",
                  color: "text-magic-pink",
                  bg: "bg-magic-pink/20"
                },
                {
                  icon: Play,
                  title: "Videoaulas Animadas",
                  desc: "Aulas fora do tradicional. O formato em desenho animado deixa tudo muito mais viciante e divertido.",
                  color: "text-magic-blue",
                  bg: "bg-magic-blue/20"
                },
                {
                  icon: MessageCircle,
                  title: "Professor Integrado",
                  desc: "Um professor integrado dentro do aplicativo que responde todas as suas dúvidas a qualquer momento.",
                  color: "text-magic-yellow",
                  bg: "bg-magic-yellow/20"
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: OFFER */}
        <section className="py-32 relative text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-magic-sky blur-[150px] opacity-30 pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
              O primeiro passo para uma <span className="text-gradient">vida inteira de música</span>
            </h2>
            
            <div className="glass-card rounded-[3rem] p-10 md:p-16 max-w-2xl mx-auto border-magic-pink/30 shadow-[0_0_80px_rgba(236,72,153,0.15)]">
              <p className="text-xl text-gray-400 mb-4 line-through">De R$ 97,00</p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-3xl font-bold text-gray-400">por apenas</span>
                <span className="font-display text-7xl font-bold text-white">R$27</span>
              </div>
              
              <p className="text-lg text-magic-pink font-medium mb-10">Pagamento único • Acesso vitalício</p>
              
              <motion.a 
                href="https://ggcheckout.app/checkout/v2/G65twmmZoF9HNY3RxtsY"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-5 rounded-full bg-magic-sky font-bold text-xl shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_rgba(99,102,241,0.7)] transition-all flex items-center justify-center gap-3 mb-6"
              >
                QUERO COMEÇAR A JORNADA MÁGICA
                <Sparkles className="w-6 h-6" />
              </motion.a>
              
              <div className="flex items-center justify-center gap-6 text-sm text-gray-400 font-medium">
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Compra Segura</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> 7 Dias de Garantia</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQ */}
        <section className="py-24 relative">
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Dúvidas <span className="text-gradient">Frequentes</span>
              </h2>
              <p className="text-xl text-gray-400">
                Ainda não tem certeza? Nós ajudamos você.
              </p>
            </div>
            
            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Music className="w-5 h-5 text-magic-purple" />
            <span className="font-display font-bold text-lg text-gray-300">Violão Mágico</span>
          </div>
          <p>© {new Date().getFullYear()} Violão Mágico. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
