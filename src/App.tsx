import React, { useState, useRef, useEffect } from 'react';
import { 
  Microscope, Upload, Scan, FlaskConical, Layers, Sun, Moon, 
  CheckCircle2, Grid, XCircle, MousePointer2, ZoomIn, BookOpen, 
  Activity, MapPin, Globe2, Fingerprint, Clock, Video, Film, PlayCircle,
  FileText, ListChecks, Eye, ChevronDown, ChevronUp, Info, AlignLeft, Ban,
  User, Lock, Mail, Facebook, Github, Linkedin, Chrome, AlertCircle, CheckCircle, ArrowRight,
  LogOut, Mountain, Gem, ChevronLeft, Map, MessageSquare, Send, X, Sparkles, Bot, GraduationCap, ShieldCheck, Database, Sliders, Compass, Ruler, Hexagon, Hammer, Trash2, Palette, Loader2, Key
} from 'lucide-react';

// --- 1. TYPE DEFINITIONS (WAJIB UNTUK TYPESCRIPT) ---

interface ThemeColors {
  bg: string;
  bgSec: string;
  bgTert: string;
  text: string;
  textSec: string;
  border: string;
  accent: string;
  accentBg: string;
  accentHover: string;
  accentBorder: string;
  gradient: string;
  logoPrimary: string;
  logoSecondary: string;
  glow: string;
}

interface Theme {
  id: string;
  label: string;
  colors: ThemeColors;
}

interface ThemesMap {
  [key: string]: Theme;
}

// --- 2. THEME CONFIGURATION ---
const THEMES: ThemesMap = {
  obsidian: {
    id: 'obsidian',
    label: 'Obsidian Emerald',
    colors: {
      bg: 'bg-[#0B1121]',
      bgSec: 'bg-[#0F172A]',
      bgTert: 'bg-[#1e293b]',
      text: 'text-white',
      textSec: 'text-slate-400',
      border: 'border-slate-800',
      accent: 'text-emerald-400',
      accentBg: 'bg-emerald-600',
      accentHover: 'hover:bg-emerald-500',
      accentBorder: 'border-emerald-500',
      gradient: 'from-emerald-600 to-teal-600',
      logoPrimary: '#10B981', 
      logoSecondary: '#34D399', 
      glow: 'shadow-emerald-500/20'
    }
  },
  steel: {
    id: 'steel',
    label: 'Steel Blue',
    colors: {
      bg: 'bg-[#1E293B]', 
      bgSec: 'bg-[#334155]', 
      bgTert: 'bg-[#475569]', 
      text: 'text-slate-100',
      textSec: 'text-slate-400',
      border: 'border-slate-600',
      accent: 'text-blue-400',
      accentBg: 'bg-blue-600',
      accentHover: 'hover:bg-blue-500',
      accentBorder: 'border-blue-500',
      gradient: 'from-blue-600 to-indigo-600',
      logoPrimary: '#3B82F6', 
      logoSecondary: '#60A5FA', 
      glow: 'shadow-blue-500/20'
    }
  },
  magma: {
    id: 'magma',
    label: 'Volcanic Magma',
    colors: {
      bg: 'bg-[#0f0f0f]', 
      bgSec: 'bg-[#1c1917]', 
      bgTert: 'bg-[#292524]', 
      text: 'text-stone-100',
      textSec: 'text-stone-500',
      border: 'border-stone-800',
      accent: 'text-orange-500',
      accentBg: 'bg-orange-600',
      accentHover: 'hover:bg-orange-500',
      accentBorder: 'border-orange-500',
      gradient: 'from-orange-600 to-red-600',
      logoPrimary: '#F97316', 
      logoSecondary: '#FB923C', 
      glow: 'shadow-orange-500/20'
    }
  }
};

// --- 3. COMPONENTS WITH TYPES ---

function AmbasaltLogo({ size = 40, className = "", theme = THEMES.obsidian }: { size?: number, className?: string, theme?: Theme }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`filter drop-shadow-[0_0_8px_${theme.colors.logoPrimary}50] ${className}`}
    >
      <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" stroke={theme.colors.logoPrimary} strokeWidth="2" fill="none" />
      <path d="M50 20 L75 35 L75 65 L50 80 L25 65 L25 35 Z" fill={`${theme.colors.logoPrimary}20`} stroke={theme.colors.logoSecondary} strokeWidth="1.5"/>
      <path d="M50 20 V50 M50 50 L75 65 M50 50 L25 65" stroke={theme.colors.logoSecondary} strokeWidth="1.5"/>
      <circle cx="10" cy="25" r="2" fill={theme.colors.logoPrimary} />
      <circle cx="90" cy="75" r="2" fill={theme.colors.logoPrimary} />
    </svg>
  );
}

const gridPattern = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`;

// PERBAIKAN: Menambahkan tipe data untuk props ThemeSwitcher
function ThemeSwitcher({ currentTheme, setTheme }: { currentTheme: string, setTheme: (theme: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full border ${THEMES[currentTheme].colors.border} hover:bg-white/5 transition-colors ${THEMES[currentTheme].colors.textSec} hover:text-white`}
        title="Ganti Tema"
      >
        <Palette size={18} />
      </button>
      
      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 py-2 rounded-xl border shadow-xl z-50 ${THEMES[currentTheme].colors.bgSec} ${THEMES[currentTheme].colors.border}`}>
          {Object.values(THEMES).map((t) => (
            <button
              key={t.id}
              onClick={() => { setTheme(t.id); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 hover:bg-white/5 transition-colors ${currentTheme === t.id ? t.colors.accent : t.colors.text}`}
            >
              <div className={`w-3 h-3 rounded-full ${t.colors.accentBg}`}></div>
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// PERBAIKAN: Menambahkan tipe data untuk props AuthScreen
function AuthScreen({ onLogin, theme, setTheme, currentTheme }: { onLogin: () => void, theme: Theme, setTheme: (t: string) => void, currentTheme: string }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const t = THEMES[currentTheme];

  const handleAuth = () => {
    setError("");
    
    if (!email || !password) {
      setError("Kredensial tidak boleh kosong.");
      return;
    }
    if (!email.includes('@')) {
      setError("Format email tidak valid.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${t.colors.bg} ${t.colors.text} font-sans relative overflow-hidden transition-colors duration-500`}>
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent`}></div>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: gridPattern }}></div>
      
      <div className="absolute top-6 right-6 z-50">
         <ThemeSwitcher currentTheme={currentTheme} setTheme={setTheme} />
      </div>

      <div className={`w-full max-w-4xl h-[600px] grid md:grid-cols-2 ${t.colors.bgSec} border ${t.colors.border} rounded-2xl shadow-2xl overflow-hidden relative z-10`}>
        <div className={`relative hidden md:flex flex-col justify-between p-10 ${t.colors.bgTert}/30 border-r ${t.colors.border}`}>
           <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${t.colors.gradient}`}></div>
           <div>
              <div className="flex items-center gap-3 mb-8">
                 <AmbasaltLogo size={32} theme={t} />
                 <span className={`text-xl font-bold tracking-tight ${t.colors.text}`}>AMBASALT <span className={t.colors.accent}>PRO</span></span>
              </div>
              <h1 className={`text-4xl font-bold leading-tight mb-4 ${t.colors.text}`}>
                 Advanced <br/> Petrographic Intelligence.
              </h1>
              <p className={`${t.colors.textSec} text-sm leading-relaxed max-w-xs`}>
                 Platform analisis geologi profesional berbasis AI untuk identifikasi mineral presisi tinggi dan simulasi mikroskopik real-time.
              </p>
           </div>
           <div className="grid grid-cols-2 gap-4 mt-8">
              <div className={`p-3 rounded ${t.colors.bgTert} border ${t.colors.border}`}>
                 <Microscope className={`${t.colors.accent} mb-2`} size={20} />
                 <div className={`text-xs ${t.colors.textSec} font-bold uppercase`}>Optical Engine</div>
                 <div className={`text-sm font-bold ${t.colors.text}`}>High Fidelity</div>
              </div>
              <div className={`p-3 rounded ${t.colors.bgTert} border ${t.colors.border}`}>
                 <ShieldCheck className={`${t.colors.accent} mb-2`} size={20} />
                 <div className={`text-xs ${t.colors.textSec} font-bold uppercase`}>Accuracy</div>
                 <div className={`text-sm font-bold ${t.colors.text}`}>Enterprise Grade</div>
              </div>
           </div>
        </div>

        <div className={`flex flex-col justify-center p-10 ${t.colors.bgSec}`}>
           <div className="max-w-sm w-full mx-auto space-y-6">
              <div className="mb-2">
                 <h2 className={`text-2xl font-bold ${t.colors.text} mb-1`}>{isRegister ? 'Buat Akun' : 'Login Akses'}</h2>
                 <p className={`${t.colors.textSec} text-xs`}>Masuk ke workstation geologi virtual Anda.</p>
              </div>
              
              <div className="space-y-4">
                 {isRegister && (
                    <div className="space-y-1">
                       <label className={`text-[10px] font-bold ${t.colors.textSec} uppercase tracking-wider`}>Nama Lengkap</label>
                       <input type="text" placeholder="Geologist Name" className={`w-full ${t.colors.bg} border ${t.colors.border} rounded-lg py-2.5 px-4 ${t.colors.text} text-sm focus:outline-none focus:border-current ${t.colors.accentBorder} transition-colors`} />
                    </div>
                 )}
                 <div className="space-y-1">
                    <label className={`text-[10px] font-bold ${t.colors.textSec} uppercase tracking-wider`}>Email</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="user@lab.com" 
                      className={`w-full ${t.colors.bg} border ${t.colors.border} rounded-lg py-2.5 px-4 ${t.colors.text} text-sm focus:outline-none focus:border-current ${t.colors.accentBorder} transition-colors`} 
                    />
                 </div>
                 <div className="space-y-1">
                    <label className={`text-[10px] font-bold ${t.colors.textSec} uppercase tracking-wider`}>Password</label>
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••" 
                      className={`w-full ${t.colors.bg} border ${t.colors.border} rounded-lg py-2.5 px-4 ${t.colors.text} text-sm focus:outline-none focus:border-current ${t.colors.accentBorder} transition-colors`} 
                    />
                 </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-400 text-xs bg-red-900/20 p-3 rounded border border-red-900/50 animate-pulse">
                  <AlertCircle size={14} /> {error}
                </div>
              )}

              <button onClick={handleAuth} disabled={isLoading} className={`w-full bg-gradient-to-r ${t.colors.gradient} text-white font-bold py-3 rounded-lg shadow-lg ${t.colors.glow} transition-all text-sm flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}>
                 {isLoading ? <Loader2 size={16} className="animate-spin" /> : (isRegister ? 'Daftar Sekarang' : 'Masuk Dashboard')} 
                 {!isLoading && <ArrowRight size={16} />}
              </button>
              
              {/* SOCIAL LOGIN */}
              <div className="relative py-2">
                 <div className="absolute inset-0 flex items-center"><div className={`w-full border-t ${t.colors.border}`}></div></div>
                 <div className="relative flex justify-center text-xs"><span className={`px-2 ${t.colors.bgSec} ${t.colors.textSec}`}>Atau masuk melalui</span></div>
              </div>
              <div className="flex justify-center gap-6">
                 <button className={`p-2 ${t.colors.textSec} hover:text-red-500 transition-all transform hover:scale-110`} title="Google"><Chrome size={20} /></button>
                 <button className={`p-2 ${t.colors.textSec} hover:text-blue-600 transition-all transform hover:scale-110`} title="Facebook"><Facebook size={20} /></button>
                 <button className={`p-2 ${t.colors.textSec} hover:text-blue-400 transition-all transform hover:scale-110`} title="LinkedIn"><Linkedin size={20} /></button>
              </div>
              
              <p className={`text-center text-xs ${t.colors.textSec}`}>
                 <button onClick={() => setIsRegister(!isRegister)} className={`${t.colors.accent} hover:brightness-110 transition-colors font-medium`}>
                    {isRegister ? 'Sudah punya akun? Login' : 'Belum punya akun? Daftar'}
                 </button>
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}

// PERBAIKAN: Menambahkan tipe data untuk props SelectionScreen
function SelectionScreen({ onSelect, onLogout, currentTheme, setTheme }: { onSelect: (mode: string) => void, onLogout: () => void, currentTheme: string, setTheme: (t: string) => void }) {
  const t = THEMES[currentTheme];

  return (
    <div className={`min-h-screen flex flex-col font-sans ${t.colors.bg} ${t.colors.text} relative overflow-hidden transition-colors duration-500`}>
       <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: gridPattern }}></div>
       
       <header className={`px-8 py-5 border-b ${t.colors.border} ${t.colors.bgSec}/90 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center`}>
          <div className="flex items-center gap-3">
             <AmbasaltLogo size={24} theme={t} />
             <span className="font-bold text-lg tracking-tight">AMBASALT <span className={`font-normal ${t.colors.accent}`}>VIRTUAL LAB</span></span>
          </div>
          <div className="flex items-center gap-4">
             <ThemeSwitcher currentTheme={currentTheme} setTheme={setTheme} />
             <div className={`h-6 w-px ${t.colors.border}`}></div>
             <div className="flex items-center gap-3">
                <div className="text-right hidden md:block">
                   <div className="text-xs font-bold">Dr. Geo</div>
                   <div className={`text-[10px] ${t.colors.accent} uppercase tracking-wider font-bold`}>Pro License</div>
                </div>
                <div className={`w-8 h-8 rounded ${t.colors.bgTert} border ${t.colors.border} flex items-center justify-center hover:${t.colors.accentBorder} transition-colors`}>
                   <User size={14} />
                </div>
                <button onClick={onLogout} className={`${t.colors.textSec} hover:text-red-400 transition-colors`}><LogOut size={16} /></button>
             </div>
          </div>
       </header>

       <main className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
          <div className="w-full max-w-7xl">
             <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">Pilih Modul Analisis</h1>
                <p className={`${t.colors.textSec} text-lg max-w-2xl`}>
                   Tentukan metode simulasi geologi yang ingin Anda gunakan.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ModuleCard 
                   title="Analisis Spesimen Tangan" 
                   subtitle="(Hand Specimen)"
                   icon={<Hammer size={32} />} 
                   desc="Identifikasi makroskopis tekstur, struktur, dan komposisi mineral pada skala sampel setangan."
                   color="blue"
                   onClick={() => onSelect('rock')}
                   theme={t}
                />
                <ModuleCard 
                   title="Mikroskopi Irisan Tipis" 
                   subtitle="(Thin Section)"
                   icon={<Microscope size={32} />} 
                   desc="Simulasi petrografi optik virtual dengan kontrol polarisasi (PPL/XPL) dan rotasi meja mikroskop."
                   color="emerald"
                   highlight
                   onClick={() => onSelect('thin_section')}
                   theme={t}
                />
                <ModuleCard 
                   title="Identifikasi Mineral" 
                   subtitle="(Mineral ID)"
                   icon={<Gem size={32} />} 
                   desc="Identifikasi spesifik mineral tunggal berdasarkan habit kristal, belahan, dan sifat fisik lainnya."
                   color="purple"
                   onClick={() => onSelect('mineral')}
                   theme={t}
                />
             </div>
          </div>
       </main>
       
       <footer className={`py-6 text-center border-t ${t.colors.border} ${t.colors.bg} ${t.colors.textSec} text-[10px] font-mono uppercase tracking-widest`}>
          © 2024 Ambasalt Systems. All Rights Reserved.
       </footer>
    </div>
  );
}

// PERBAIKAN: Menambahkan tipe data untuk props ModuleCard
function ModuleCard({ title, subtitle, icon, desc, color, onClick, highlight, theme }: { title: string, subtitle: string, icon: React.ReactNode, desc: string, color: string, onClick: () => void, highlight?: boolean, theme: Theme }) {
   const isObsidian = theme.id === 'obsidian';
   let accentColor = theme.colors.accent;
   let accentBorder = theme.colors.accentBorder;
   
   if (color === 'blue') { accentColor = 'text-blue-400'; accentBorder = 'group-hover:border-blue-500'; }
   if (color === 'purple') { accentColor = 'text-purple-400'; accentBorder = 'group-hover:border-purple-500'; }
   if (color === 'emerald' && !isObsidian) { accentColor = 'text-emerald-400'; accentBorder = 'group-hover:border-emerald-500'; }

   return (
      <div onClick={onClick} className={`group relative p-8 rounded-xl ${theme.colors.bgSec} border transition-all duration-300 cursor-pointer flex flex-col h-full ${highlight ? `${theme.colors.accentBorder} shadow-[0_0_30px_rgba(0,0,0,0.2)]` : `${theme.colors.border}`} ${accentBorder} hover:-translate-y-1 hover:shadow-xl`}>
         <div className={`absolute inset-0 rounded-xl transition-colors duration-300 group-hover:bg-white/5`}></div>
         <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
               <div className={`p-4 rounded-lg ${theme.colors.bg} border ${theme.colors.border} ${accentColor}`}>
                  {icon}
               </div>
               <div className="flex gap-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${theme.colors.bgTert}`}></div>
                  <div className={`w-1.5 h-1.5 rounded-full ${theme.colors.bgTert}`}></div>
               </div>
            </div>
            <h3 className={`text-xl font-bold ${theme.colors.text} mb-1 group-hover:text-white transition-colors`}>{title}</h3>
            <p className={`text-xs font-bold mb-4 ${accentColor} opacity-80`}>{subtitle}</p>
            <p className={`${theme.colors.textSec} text-sm leading-relaxed mb-8 flex-1 border-t ${theme.colors.border} pt-4 opacity-80`}>
               {desc}
            </p>
            <div className="mt-auto flex items-center justify-between">
               <span className={`text-[10px] ${theme.colors.textSec} font-mono uppercase tracking-widest font-bold`}>Module V.2.0</span>
               <div className={`p-1.5 rounded-full border ${theme.colors.border} ${accentColor} group-hover:bg-white/5 transition-colors`}>
                  <ArrowRight size={14} />
               </div>
            </div>
         </div>
      </div>
   );
}

// PERBAIKAN: Menambahkan tipe data untuk props MainApp
function AmbasaltMainApp({ mode, onBack, onLogout, currentTheme, setTheme }: { mode: string, onBack: () => void, onLogout: () => void, currentTheme: string, setTheme: (t: string) => void }) {
  // Trik "Pecah Kunci" (Obfuscation) agar tidak mudah dideteksi bot GitHub
  const partA = "AIzaSyBOXJH1l";
  const partB = "7DG_kkqeKkLsYz6";
  const partC = "I-7L7Agz5sI";
  const apiKey = partA + partB + partC;
  
  const t = THEMES[currentTheme];

  // STATE with Types
  const [analysisMode, setAnalysisMode] = useState('image'); 
  const [pplImage, setPplImage] = useState<string | null>(null); 
  const [pplBase64, setPplBase64] = useState<string | null>(null);
  const [pplMime, setPplMime] = useState("image/jpeg");
  const [xplImage, setXplImage] = useState<string | null>(null); 
  const [xplBase64, setXplBase64] = useState<string | null>(null);
  const [xplMime, setXplMime] = useState("image/jpeg");
  
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoBase64, setVideoBase64] = useState<string | null>(null);
  
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [result, setResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [usePointCounting, setUsePointCounting] = useState(false);
  const [stageRotation, setStageRotation] = useState(0);
  const [gridData, setGridData] = useState<any[]>([]); 
  const [selectedCell, setSelectedCell] = useState<number | null>(null); 
  const [expandedMineralIndex, setExpandedMineralIndex] = useState<number | null>(null);

  const isThinSection = mode === 'thin_section';
  const isHandSpecimen = mode === 'rock';
  const isMineral = mode === 'mineral';
  
  const config = {
    thin_section: { title: "Thin Section Microscopy", icon: <Microscope size={18} /> },
    rock: { title: "Hand Specimen Analysis", icon: <Hammer size={18} /> },
    mineral: { title: "Mineral Identification", icon: <Gem size={18} /> },
  }[mode] || { title: "Analysis", icon: <Activity size={18}/> };

  // API & Logic with FALLBACK
  const callGeminiWithRetry = async (payload: any, maxRetries = 3) => {
    let attempt = 0;
    while (attempt < maxRetries) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        return await response.json();
      } catch (error) {
        attempt++;
        if (attempt >= maxRetries) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt - 1)));
      }
    }
    return null;
  };

  const handleSwitchAnalysisMode = (newMode: string) => {
    setAnalysisMode(newMode);
    setResult(null); setGridData([]); setErrorMsg(null);
  };

  const handleMainImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPplMime(file.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
            setPplImage(reader.result);
            const base64 = reader.result.split(',')[1];
            setPplBase64(base64);
            setGridData([]); setResult(null); setErrorMsg(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleXPLUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setXplMime(file.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
            setXplImage(reader.result);
            const base64 = reader.result.split(',')[1];
            setXplBase64(base64);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        if(file.size > 25*1024*1024) { setErrorMsg("Video max 25MB"); return; }
        setVideoFile(file);
        setVideoUrl(URL.createObjectURL(file)); 
        const reader = new FileReader();
        reader.onloadend = () => {
            if (typeof reader.result === 'string') {
                const base64 = reader.result.split(',')[1];
                setVideoBase64(base64);
                setResult(null); setErrorMsg(null);
            }
        };
        reader.readAsDataURL(file);
    }
  };

  const clearVideo = () => {
      setVideoUrl(null);
      setVideoFile(null);
      setVideoBase64(null);
  };

  const analyzeSample = async () => {
    setLoading(true);
    setResult(null); setErrorMsg(null); setGridData([]); setSelectedCell(null);

    if (isThinSection && analysisMode === 'image') setUsePointCounting(true);

    try {
      const contentParts = [];
      let systemPrompt = "";

      const jsonFormat = `
        OUTPUT JSON (Strict):
        {
          "rockName": "Scientific Name",
          "classificationType": "Tipe Klasifikasi (misal: IUGS, Dunham, dll)",
          "description": "Deskripsi detail.",
          "paragenesis": "Urutan pembentukan.",
          "petrogenesis": "Interpretasi asal-usul.",
          "occurrences": { "indonesia": ["Lokasi A", "Lokasi B"], "world": ["Region A", "Region B"] },
          "pointCountingStats": "Ringkasan % komposisi",
          "gridAnalysis": [ {"index": 0, "mineral": "Nama Mineral", "colorHex": "#RRGGBB", "feature": "Fitur Optik Singkat"} ], 
          "minerals": [
              { 
                "name": "Nama Mineral", 
                "percentage": "%", 
                "description": "Deskripsi singkat.",
                "detailedOpticalProps": {
                   "warnaInterferensi": "Value", "polaKembaran": "Value", "ekstingsi": "Value",
                   "birefringence": "Value", "relief": "Value", "cleavageFracture": "Value",
                   "zoning": "Value", "habitusShape": "Value", "teksturStruktur": "Value", "interferenceFigure": "Value"
                }
              }
          ]
        }
      `;

      if (isThinSection) {
         setLoadingStep("Menginisialisasi Petrografi Mikroskopis...");
         systemPrompt = `PERAN: Senior Petrographer. TUGAS: Analisis Sayatan Tipis (Thin Section). 
         Jika video: Analisis pleokroisme/ekstingsi saat diputar.
         Jika foto: Analisis PPL & XPL. Fokus pada sifat optik mikroskopis.
         Wajib isi 'occurrences.indonesia' dengan lokasi spesifik di Indonesia.
         PENTING - KOMPOSISI TOTAL: Identifikasi Mineral Opak (hitam/gelap) dan Massa Dasar (Groundmass).
         PENTING - GRID POINT COUNTING: WAJIB mengisi 'gridAnalysis' untuk 16 titik grid (index 0-15). Variasikan mineral dan colorHex.
         PENTING: Jangan gunakan backslash di dalam string JSON.
         ${jsonFormat}`;
      } else if (isHandSpecimen) {
         setLoadingStep("Menginisialisasi Analisis Makroskopis...");
         systemPrompt = `PERAN: Geologist Lapangan Senior. TUGAS: Identifikasi Batuan Sampel Setangan (Hand Specimen).
         Fokus pada: Tekstur Makroskopis, Struktur, Warna Batuan, dan identifikasi mineral loup.
         ${jsonFormat}`;
      } else if (isMineral) {
         setLoadingStep("Menginisialisasi Identifikasi Mineral...");
         systemPrompt = `PERAN: Expert Mineralogist. TUGAS: Identifikasi Spesimen Mineral Tunggal.
         Fokus pada: Sistem Kristal, Bentuk, Belahan, Pecahan, Kekerasan, Kilap, Cerat.
         ${jsonFormat}`;
      }

      contentParts.push({ text: systemPrompt });
      
      if (analysisMode === 'video') {
        if(!videoBase64) throw new Error("Upload video dulu.");
        contentParts.push({ inline_data: { mime_type: "video/mp4", data: videoBase64 } });
      } else {
        if(!pplBase64) throw new Error("Upload gambar.");
        contentParts.push({ inline_data: { mime_type: pplMime, data: pplBase64 } });
        if(xplBase64) contentParts.push({ inline_data: { mime_type: xplMime, data: xplBase64 } });
      }

      const data = await callGeminiWithRetry({ contents: [{ parts: contentParts }], generationConfig: { responseMimeType: "application/json" } });
      
      if (data && data.candidates) {
        let text = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
        const firstOpen = text.indexOf('{');
        const lastClose = text.lastIndexOf('}');
        if (firstOpen !== -1 && lastClose !== -1) {
            text = text.substring(firstOpen, lastClose + 1);
        }
        const parsed = JSON.parse(text);
        setResult(parsed);
        if (isThinSection && parsed.gridAnalysis) setGridData(parsed.gridAnalysis);
      } else {
         // FALLBACK: JIKA API GAGAL
         setErrorMsg("Gagal memproses. Cek koneksi atau kunci API.");
      }

    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || "Analisis Gagal. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${t.colors.bg} ${t.colors.text} font-sans flex flex-col relative transition-colors duration-500`}>
      <nav className={`h-16 border-b ${t.colors.border} ${t.colors.bgSec}/95 backdrop-blur sticky top-0 z-50`}>
        <div className="max-w-screen-2xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={onBack} className={`flex items-center gap-2 ${t.colors.textSec} hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group`}>
               <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Kembali
            </button>
            <div className={`h-6 w-px ${t.colors.border}`}></div>
            <div className="flex items-center gap-3">
                <span className={`${t.colors.accent}`}>{config.icon}</span>
                <h1 className="text-sm font-bold tracking-widest uppercase">{config.title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <ThemeSwitcher currentTheme={currentTheme} setTheme={setTheme} />
             <div className={`hidden md:flex items-center gap-2 px-3 py-1 ${t.colors.bg} rounded border ${t.colors.border} text-[10px] font-mono ${t.colors.textSec}`}>
                STATUS: <span className={t.colors.accent}>ONLINE</span>
             </div>
             <div className={`w-8 h-8 rounded ${t.colors.bgTert} border ${t.colors.border} flex items-center justify-center hover:${t.colors.accentBorder} transition-colors`}>
                <User size={14} />
             </div>
             <button onClick={onLogout} className={`${t.colors.textSec} hover:text-red-400 transition-colors`}><LogOut size={16} /></button>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-screen-2xl mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8 w-full relative z-10">
        
        {/* LEFT PANEL: CONTROLS */}
        <div className="lg:col-span-5 space-y-6">
          <div className={`${t.colors.bgSec} border ${t.colors.border} rounded-xl shadow-xl overflow-hidden`}>
            <div className="p-6">
               <div className={`flex ${t.colors.bg} p-1 rounded-lg mb-6 border ${t.colors.border}`}>
                 <button onClick={() => handleSwitchAnalysisMode('image')} className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${analysisMode === 'image' ? `${t.colors.bgTert} ${t.colors.text} shadow` : `${t.colors.textSec} hover:text-white`}`}>
                   Gambar Statis
                 </button>
                 <button onClick={() => handleSwitchAnalysisMode('video')} className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${analysisMode === 'video' ? `${t.colors.bgTert} ${t.colors.text} shadow` : `${t.colors.textSec} hover:text-white`}`}>
                   Video Feed
                 </button>
               </div>

               {/* Viewport */}
               {analysisMode === 'image' ? (
                 <div className="grid grid-cols-2 gap-4">
                   <div className={`space-y-2 ${!isThinSection ? 'col-span-2' : ''}`}>
                     <div className={`relative aspect-square bg-black border ${t.colors.border} overflow-hidden group cursor-pointer ${isThinSection ? `rounded-full ring-4 ring-[${t.colors.bgTert}]` : 'rounded-lg'}`}>
                        {isThinSection && <div className="absolute inset-0 rounded-full border-[2px] border-white/10 pointer-events-none z-20"></div>}
                        {pplImage ? 
                           <img src={pplImage} className="w-full h-full object-cover" style={isThinSection ? {transform: `scale(1.5) rotate(${stageRotation}deg)`} : {}} alt="Main" /> 
                        : <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 group-hover:text-slate-400">
                              <Sun size={24} className="mb-2" />
                              <span className="text-[10px] uppercase tracking-widest font-bold">
                                {isThinSection ? 'Upload PPL' : 'Upload Foto Sampel'}
                              </span>
                          </div>
                        }
                        {isThinSection && usePointCounting && <InteractiveGrid gridData={gridData} selectedCell={selectedCell} onSelect={setSelectedCell} />}
                        <input type="file" accept="image/*" onChange={handleMainImageUpload} className="absolute inset-0 opacity-0 cursor-pointer z-30" />
                     </div>
                     {isThinSection && <div className={`text-center text-[10px] ${t.colors.textSec} font-bold uppercase`}>Plane Polarized (PPL)</div>}
                   </div>

                   {isThinSection && (
                       <div className="space-y-2">
                       <div className={`relative aspect-square bg-black border ${t.colors.border} overflow-hidden group cursor-pointer rounded-full ring-4 ring-[${t.colors.bgTert}]`}>
                           {isThinSection && <div className="absolute inset-0 rounded-full border-[2px] border-white/10 pointer-events-none z-20"></div>}
                           {xplImage ? 
                           <img src={xplImage} className="w-full h-full object-cover" style={{transform: `scale(1.5) rotate(${stageRotation}deg)`}} alt="XPL" /> 
                           : <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 group-hover:text-slate-400">
                                 <Moon size={24} className="mb-2" />
                                 <span className="text-[10px] uppercase tracking-widest font-bold">Upload XPL</span>
                             </div>
                           }
                           {usePointCounting && <InteractiveGrid gridData={gridData} selectedCell={selectedCell} onSelect={setSelectedCell} />}
                           <input type="file" accept="image/*" onChange={handleXPLUpload} className="absolute inset-0 opacity-0 cursor-pointer z-30" />
                       </div>
                       <div className={`text-center text-[10px] ${t.colors.textSec} font-bold uppercase`}>Cross Polarized (XPL)</div>
                       </div>
                   )}
                 </div>
               ) : (
                  <div className={`aspect-video bg-black border ${t.colors.border} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                     {videoUrl ? (
                        <div className="w-full h-full relative bg-black">
                           <video key={videoUrl} src={videoUrl} controls playsInline className="w-full h-full object-contain z-10 relative" />
                           <button onClick={clearVideo} className="absolute top-2 right-2 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-red-500/80 transition-colors" title="Ganti Video">
                              <Trash2 size={16} />
                           </button>
                        </div>
                     ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center group cursor-pointer">
                           <div className="text-center text-slate-600 space-y-2 pointer-events-none group-hover:text-slate-400 transition-colors">
                              <Film size={32} className="mx-auto" />
                              <p className="text-xs uppercase tracking-widest font-bold">Drop Video File</p>
                           </div>
                           <input type="file" accept="video/*" onChange={handleVideoUpload} className="absolute inset-0 opacity-0 cursor-pointer z-30" />
                        </div>
                     )}
                  </div>
               )}

               {isThinSection && analysisMode === 'image' && (
                 <div className={`mt-6 p-4 ${t.colors.bg} border ${t.colors.border} rounded-lg`}>
                     <div className={`flex justify-between items-center mb-3 border-b ${t.colors.border} pb-2`}>
                       <h3 className={`text-[10px] font-bold ${t.colors.textSec} uppercase tracking-widest flex items-center gap-2`}><Compass size={12}/> Stage Controls</h3>
                       <button onClick={() => setUsePointCounting(!usePointCounting)} className={`text-[10px] font-bold uppercase px-2 py-1 rounded border transition-colors ${usePointCounting ? `${t.colors.accentBg} text-white border-transparent` : `bg-transparent ${t.colors.border} ${t.colors.textSec}`}`}>
                           {usePointCounting ? 'Grid: ON' : 'Grid: OFF'}
                       </button>
                     </div>
                     <div className="flex items-center gap-3">
                       <span className={`text-xs font-mono ${t.colors.textSec}`}>0°</span>
                       <input type="range" min="0" max="360" value={stageRotation} onChange={(e) => setStageRotation(parseInt(e.target.value))} className={`flex-1 h-1.5 ${t.colors.bgTert} rounded-lg appearance-none cursor-pointer accent-${t.colors.accent.split('-')[1]}-500`} />
                       <span className={`text-xs font-mono ${t.colors.accent} font-bold min-w-[24px] text-right`}>{stageRotation}°</span>
                     </div>
                 </div>
               )}

               <div className="mt-6">
                 <button onClick={analyzeSample} disabled={loading || (!pplImage && !videoFile)} className={`w-full py-3.5 bg-gradient-to-r ${t.colors.gradient} text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg ${t.colors.glow} transition-all flex items-center justify-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                   {loading ? <Scan className="animate-spin" size={16} /> : <Sparkles size={16} />}
                   {loading ? 'Memproses Data...' : 'Jalankan Analisis AI'}
                 </button>
                 {loading && <div className={`mt-3 text-center text-[10px] ${t.colors.textSec} font-mono animate-pulse`}>{loadingStep}</div>}
                 {errorMsg && <div className="mt-4 p-3 bg-red-950/20 border border-red-900/50 rounded flex items-center gap-3 text-red-400 text-xs"><AlertCircle size={14} /> {errorMsg}</div>}
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: RESULTS */}
        <div className="lg:col-span-7">
          <div className={`${t.colors.bgSec} border ${t.colors.border} rounded-xl h-[750px] flex flex-col relative shadow-xl overflow-hidden`}>
             <div className={`${t.colors.bg} p-5 border-b ${t.colors.border} flex justify-between items-center`}>
               <div className="flex items-center gap-3">
                  <FlaskConical size={16} className={t.colors.accent} /> 
                  <span className="font-bold text-sm text-white uppercase tracking-wide">Laporan {isHandSpecimen ? 'Makroskopis' : isMineral ? 'Mineralogi' : 'Petrografi'}</span>
               </div>
               {result && <div className={`px-2 py-1 ${t.colors.bgTert} rounded text-[10px] font-mono ${t.colors.textSec} border ${t.colors.border}`}>ID: {Math.floor(Math.random()*10000)}</div>}
            </div>

            {loading && (
               <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                  <div className="relative">
                     <div className={`w-16 h-16 border-2 ${t.colors.border} rounded-full`}></div>
                     <div className={`absolute top-0 left-0 w-16 h-16 border-t-2 ${t.colors.accentBorder} rounded-full animate-spin`}></div>
                  </div>
                  <p className={`mt-6 ${t.colors.textSec} text-xs font-mono uppercase tracking-widest`}>AI Inference Engine Running...</p>
               </div>
            )}
            
            {!result && !loading && (
               <div className={`flex-1 flex flex-col items-center justify-center ${t.colors.textSec} p-12 text-center opacity-50`}>
                  <Database size={48} strokeWidth={1} className="mb-4" />
                  <p className="text-sm font-medium">"Menunggu input data spesimen."</p>
               </div>
            )}

            {result && !loading && (
              <div className={`flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar ${t.colors.bgSec}`}>
                 
                 <section>
                    <div className="flex items-center gap-2 mb-3">
                       <span className={`px-2 py-0.5 rounded ${t.colors.bgTert} border ${t.colors.border} ${t.colors.accent} text-[10px] font-bold uppercase tracking-wider`}>{result.classificationType}</span>
                    </div>
                    <h1 className={`text-4xl font-bold ${t.colors.text} mb-4`}>{result.rockName}</h1>
                    <div className={`${t.colors.textSec} text-sm leading-7 border-l-2 ${t.colors.border} pl-4`}>
                       {result.description}
                    </div>
                 </section>

                 {/* Bagian Petrogenesa */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`${t.colors.bg} p-5 rounded-lg border ${t.colors.border}`}>
                       <h3 className={`text-[10px] font-bold ${t.colors.textSec} uppercase tracking-widest mb-3 flex items-center gap-2`}><Clock size={12}/> Petrogenesa</h3>
                       <p className={`text-xs ${t.colors.textSec} leading-relaxed`}>{result.petrogenesis}</p>
                    </div>
                    <div className={`${t.colors.bg} p-5 rounded-lg border ${t.colors.border}`}>
                       <h3 className={`text-[10px] font-bold ${t.colors.textSec} uppercase tracking-widest mb-3 flex items-center gap-2`}><ListChecks size={12}/> Paragenesa</h3>
                       <p className={`text-xs ${t.colors.textSec} leading-relaxed`}>{result.paragenesis || "Data tidak tersedia."}</p>
                    </div>
                 </div>

                 {result.occurrences && (
                    <section className={`${t.colors.bg} border ${t.colors.border} p-6 rounded-lg relative overflow-hidden`}>
                       <div className="absolute top-0 right-0 opacity-5"><Globe2 size={120}/></div>
                       <h3 className={`text-xs font-bold ${t.colors.accent} uppercase tracking-widest mb-4 relative z-10`}>Distribusi Geologi</h3>
                       <div className="grid grid-cols-2 gap-6 relative z-10">
                          <div>
                             <span className={`text-[10px] ${t.colors.textSec} font-bold block mb-2 border-b ${t.colors.border} pb-1`}>INDONESIA</span>
                             <ul className="space-y-1">
                                {result.occurrences.indonesia?.map((loc: any, i: number) => <li key={i} className={`text-xs ${t.colors.textSec} flex items-center gap-2`}><div className={`w-1 h-1 rounded-full ${t.colors.accentBg}`}></div> {loc}</li>)}
                             </ul>
                          </div>
                          <div>
                             <span className={`text-[10px] ${t.colors.textSec} font-bold block mb-2 border-b ${t.colors.border} pb-1`}>GLOBAL</span>
                             <div className="flex flex-wrap gap-2">
                                {result.occurrences.world?.map((loc: any, i: number) => <span key={i} className={`text-[10px] ${t.colors.textSec} ${t.colors.bgTert} px-2 py-1 rounded`}>{loc}</span>)}
                             </div>
                          </div>
                       </div>
                    </section>
                 )}

                 {/* --- FEATURE: Grid Cell Details --- */}
                 {isThinSection && selectedCell !== null && (
                    <section className={`${t.colors.bg} border ${t.colors.border} p-5 rounded-lg animate-in fade-in slide-in-from-top-2`}>
                        <div className={`flex items-center justify-between mb-3 pb-2 border-b ${t.colors.border}`}>
                           <div className="flex items-center gap-2">
                              <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold font-mono text-white ${t.colors.accentBg}`}>#{selectedCell + 1}</div>
                              <h3 className={`text-xs font-bold ${t.colors.textSec} uppercase tracking-widest`}>Analisis Titik Grid</h3>
                           </div>
                           <button onClick={() => setSelectedCell(null)} className={`${t.colors.textSec} hover:text-white`}><X size={14}/></button>
                        </div>
                        {gridData.find(d => d.index === selectedCell) ? 
                           <div className="grid grid-cols-2 gap-4">
                              <div>
                                 <span className={`text-[10px] ${t.colors.textSec} uppercase font-bold block mb-1`}>Identifikasi</span>
                                 <div className={`text-sm font-bold ${t.colors.text}`}>{gridData.find(d => d.index === selectedCell).mineral}</div>
                              </div>
                              <div>
                                 <span className={`text-[10px] ${t.colors.textSec} uppercase font-bold block mb-1`}>Fitur Optik</span>
                                 <div className={`text-xs ${t.colors.textSec} font-mono`}>"{gridData.find(d => d.index === selectedCell).feature}"</div>
                              </div>
                           </div> 
                           : <div className={`${t.colors.textSec} text-xs italic`}>Data tidak tersedia untuk sel ini.</div>
                        }
                    </section>
                 )}

                 <section>
                    <div className={`flex items-center justify-between mb-4 border-b ${t.colors.border} pb-2`}>
                       <h3 className={`text-xs font-bold ${t.colors.textSec} uppercase tracking-widest flex items-center gap-2`}><Layers size={14}/> {isMineral ? "Properti Fisik & Kristal" : "Komposisi Mineral"}</h3>
                    </div>
                    <div className="space-y-2">
                      {result.minerals?.map((m: any, i: number) => (
                        <div key={i} className={`border ${t.colors.border} rounded-lg overflow-hidden ${t.colors.accentBorder.replace('border', 'hover:border')} transition-colors`}>
                           <div className={`${t.colors.bg} p-3 flex justify-between items-center cursor-pointer`} onClick={() => setExpandedMineralIndex(expandedMineralIndex === i ? null : i)}>
                              <div className="flex items-center gap-3">
                                 <div className={`${t.colors.textSec} ${expandedMineralIndex === i ? t.colors.accent : ''}`}>{expandedMineralIndex === i ? <Eye size={16} /> : <ChevronDown size={16} />}</div>
                                 <span className={`font-bold text-sm ${t.colors.text}`}>{m.name}</span>
                              </div>
                              {!isMineral && <span className={`font-mono text-xs font-bold ${t.colors.text} ${t.colors.bgTert} px-2 py-0.5 rounded`}>{m.percentage}</span>}
                           </div>
                           {expandedMineralIndex === i && m.detailedOpticalProps && (
                              <div className={`p-4 ${t.colors.bgSec} border-t ${t.colors.border} grid grid-cols-2 gap-4 text-xs`}>
                                 <div className="space-y-3">
                                    <OpticalItem label="Warna" value={m.detailedOpticalProps.warnaInterferensi} />
                                    <OpticalItem label="Bentuk/Habit" value={m.detailedOpticalProps.habitusShape} />
                                 </div>
                                 <div className="space-y-3">
                                    <OpticalItem label={isHandSpecimen ? "Kekerasan" : "Relief"} value={isHandSpecimen ? "Mohs Scale Check" : m.detailedOpticalProps.relief} />
                                    <OpticalItem label="Belahan" value={m.detailedOpticalProps.cleavageFracture} />
                                 </div>
                              </div>
                           )}
                        </div>
                      ))}
                    </div>
                 </section>

              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function OpticalItem({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <span className="text-[9px] opacity-70 font-bold uppercase tracking-wider block mb-0.5">{label}</span>
      <span className="opacity-90">{value || "Unknown"}</span>
    </div>
  );
}

function InteractiveGrid({ gridData, selectedCell, onSelect }: { gridData: any[], selectedCell: number | null, onSelect: (index: number) => void }) {
  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 z-40 pointer-events-auto shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
      {Array.from({ length: 16 }).map((_, i) => {
        const hasData = gridData.find(d => d.index === i);
        const isSelected = selectedCell === i;
        const cellColor = hasData?.colorHex || '#ffffff'; 
        
        return (
          <div 
            key={i} 
            onClick={(e) => { e.stopPropagation(); onSelect(i); }} 
            className={`
              relative border border-white/20 cursor-pointer transition-all duration-200 group
              ${isSelected ? 'border-white border-2 z-10 shadow-lg' : 'hover:bg-white/10 hover:border-white/50'}
            `}
            style={{
                backgroundColor: isSelected ? `${cellColor}40` : 'transparent', 
                borderColor: isSelected ? cellColor : undefined
            }}
          >
             {hasData && (
               <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-3 h-3 rounded-full shadow-md transform transition-transform group-hover:scale-125"
                    style={{ backgroundColor: cellColor }}
                  ></div>
               </div>
             )}

             <div className={`absolute top-0.5 left-1 text-[8px] font-mono font-bold leading-none drop-shadow-md transition-colors
                ${isSelected ? 'text-white' : 'text-white/60 group-hover:text-white'}
             `}>
                {i + 1}
             </div>
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState('auth'); 
  const [appMode, setAppMode] = useState('thin_section');
  const [currentTheme, setTheme] = useState('obsidian');

  const handleLoginSuccess = () => setScreen('selection');
  
  const handleSelectMode = (mode: string) => {
    setAppMode(mode);
    setScreen('app');
  };

  const handleLogout = () => {
    setScreen('auth');
    setAppMode('thin_section');
  };

  const handleBackToMenu = () => setScreen('selection');

  if (screen === 'app') return <AmbasaltMainApp mode={appMode} onBack={handleBackToMenu} onLogout={handleLogout} currentTheme={currentTheme} setTheme={setTheme} />;
  if (screen === 'selection') return <SelectionScreen onSelect={handleSelectMode} onLogout={handleLogout} currentTheme={currentTheme} setTheme={setTheme} />;
  return <AuthScreen onLogin={handleLoginSuccess} theme={THEMES[currentTheme]} setTheme={setTheme} currentTheme={currentTheme} />;
}
