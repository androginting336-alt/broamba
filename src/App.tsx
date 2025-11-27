import React, { useState, useRef, useEffect } from 'react';
import { 
  Microscope, Upload, Scan, FlaskConical, Layers, Sun, Moon, 
  CheckCircle2, Grid, XCircle, MousePointer2, ZoomIn, BookOpen, 
  Activity, MapPin, Globe2, Fingerprint, Clock, Video, Film, PlayCircle,
  FileText, ListChecks, Eye, ChevronDown, ChevronUp, Info, AlignLeft, Ban,
  User, Lock, Mail, Facebook, Github, Linkedin, Chrome, AlertCircle, CheckCircle, ArrowRight,
  LogOut, Mountain, Gem, ChevronLeft, Map, MessageSquare, Send, X, Sparkles, Bot, GraduationCap, ShieldCheck, Database, Sliders, Compass, Ruler, Hexagon, Hammer, Trash2, Palette, Loader2, Key, RefreshCw
} from 'lucide-react';

// --- 1. DEFINISI TIPE (TYPESCRIPT) ---
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

// --- 2. KONFIGURASI TEMA ---
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

// --- 3. KOMPONEN VISUAL ---
function AmbasaltLogo({ size = 40, className = "", theme = THEMES.obsidian }: { size?: number, className?: string, theme?: Theme }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`filter drop-shadow-[0_0_8px_${theme.colors.logoPrimary}50] ${className}`}>
      <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" stroke={theme.colors.logoPrimary} strokeWidth="2" fill="none" />
      <path d="M50 20 L75 35 L75 65 L50 80 L25 65 L25 35 Z" fill={`${theme.colors.logoPrimary}20`} stroke={theme.colors.logoSecondary} strokeWidth="1.5"/>
      <path d="M50 20 V50 M50 50 L75 65 M50 50 L25 65" stroke={theme.colors.logoSecondary} strokeWidth="1.5"/>
      <circle cx="10" cy="25" r="2" fill={theme.colors.logoPrimary} />
      <circle cx="90" cy="75" r="2" fill={theme.colors.logoPrimary} />
    </svg>
  );
}

const gridPattern = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`;

function ThemeSwitcher({ currentTheme, setTheme }: { currentTheme: string, setTheme: (theme: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-full border ${THEMES[currentTheme].colors.border} hover:bg-white/5 transition-colors ${THEMES[currentTheme].colors.textSec} hover:text-white`} title="Ganti Tema">
        <Palette size={18} />
      </button>
      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 py-2 rounded-xl border shadow-xl z-50 ${THEMES[currentTheme].colors.bgSec} ${THEMES[currentTheme].colors.border}`}>
          {Object.values(THEMES).map((t) => (
            <button key={t.id} onClick={() => { setTheme(t.id); setIsOpen(false); }} className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 hover:bg-white/5 transition-colors ${currentTheme === t.id ? t.colors.accent : t.colors.text}`}>
              <div className={`w-3 h-3 rounded-full ${t.colors.accentBg}`}></div> {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// --- 4. AUTH SCREEN ---
function AuthScreen({ onLogin, theme, setTheme, currentTheme }: { onLogin: () => void, theme: Theme, setTheme: (t: string) => void, currentTheme: string }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handleAuth = () => {
    setError("");
    if (!email || !password) { setError("Kredensial wajib diisi."); return; }
    if (!email.includes('@')) { setError("Format email tidak valid."); return; }
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); onLogin(); }, 1000);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme.colors.bg} ${theme.colors.text} font-sans relative overflow-hidden transition-colors duration-500`}>
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent`}></div>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: gridPattern }}></div>
      <div className="absolute top-6 right-6 z-50"><ThemeSwitcher currentTheme={currentTheme} setTheme={setTheme} /></div>

      <div className={`w-full max-w-4xl h-[600px] grid md:grid-cols-2 ${theme.colors.bgSec} border ${theme.colors.border} rounded-2xl shadow-2xl overflow-hidden relative z-10`}>
        <div className={`relative hidden md:flex flex-col justify-between p-10 ${theme.colors.bgTert}/30 border-r ${theme.colors.border}`}>
           <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.colors.gradient}`}></div>
           <div>
              <div className="flex items-center gap-3 mb-8"><AmbasaltLogo size={32} theme={theme} /><span className={`text-xl font-bold tracking-tight ${theme.colors.text}`}>AMBASALT <span className={theme.colors.accent}>PRO</span></span></div>
              <h1 className={`text-4xl font-bold leading-tight mb-4 ${theme.colors.text}`}>Advanced <br/> Petrographic Intelligence.</h1>
              <p className={`${theme.colors.textSec} text-sm leading-relaxed max-w-xs`}>Platform analisis geologi profesional berbasis AI untuk identifikasi mineral presisi tinggi.</p>
           </div>
           <div className="grid grid-cols-2 gap-4 mt-8">
              <div className={`p-3 rounded ${theme.colors.bgTert} border ${theme.colors.border}`}><Microscope className={`${theme.colors.accent} mb-2`} size={20} /><div className={`text-xs ${theme.colors.textSec} font-bold uppercase`}>Optical Engine</div><div className={`text-sm font-bold ${theme.colors.text}`}>High Fidelity</div></div>
              <div className={`p-3 rounded ${theme.colors.bgTert} border ${theme.colors.border}`}><ShieldCheck className={`${theme.colors.accent} mb-2`} size={20} /><div className={`text-xs ${theme.colors.textSec} font-bold uppercase`}>Accuracy</div><div className={`text-sm font-bold ${theme.colors.text}`}>Enterprise Grade</div></div>
           </div>
        </div>

        <div className={`flex flex-col justify-center p-10 ${theme.colors.bgSec}`}>
           <div className="max-w-sm w-full mx-auto space-y-6">
              <div className="mb-2"><h2 className={`text-2xl font-bold ${theme.colors.text} mb-1`}>Login Akses</h2><p className={`${theme.colors.textSec} text-xs`}>Masuk ke workstation geologi virtual.</p></div>
              <div className="space-y-4">
                 <div className="space-y-1"><label className={`text-[10px] font-bold ${theme.colors.textSec} uppercase tracking-wider`}>Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full ${theme.colors.bg} border ${theme.colors.border} rounded-lg py-2.5 px-4 ${theme.colors.text} text-sm focus:outline-none focus:border-current ${theme.colors.accentBorder} transition-colors`} /></div>
                 <div className="space-y-1"><label className={`text-[10px] font-bold ${theme.colors.textSec} uppercase tracking-wider`}>Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full ${theme.colors.bg} border ${theme.colors.border} rounded-lg py-2.5 px-4 ${theme.colors.text} text-sm focus:outline-none focus:border-current ${theme.colors.accentBorder} transition-colors`} /></div>
              </div>
              {error && <div className="flex items-center gap-2 text-red-400 text-xs bg-red-900/20 p-3 rounded border border-red-900/50 animate-pulse"><AlertCircle size={14} /> {error}</div>}
              <button onClick={handleAuth} disabled={isLoading} className={`w-full bg-gradient-to-r ${theme.colors.gradient} text-white font-bold py-3 rounded-lg shadow-lg ${theme.colors.glow} transition-all text-sm flex items-center justify-center gap-2 ${isLoading ? 'opacity-70' : 'hover:scale-[1.02]'}`}>{isLoading ? <Loader2 size={16} className="animate-spin" /> : 'Masuk Dashboard'} {!isLoading && <ArrowRight size={16} />}</button>
              <div className="flex justify-center gap-6 mt-4"><button className={`${theme.colors.textSec} hover:text-red-500 transition-all`}><Chrome size={20} /></button><button className={`${theme.colors.textSec} hover:text-blue-600 transition-all`}><Facebook size={20} /></button><button className={`${theme.colors.textSec} hover:text-blue-400 transition-all`}><Linkedin size={20} /></button></div>
           </div>
        </div>
      </div>
    </div>
  );
}

// --- 5. SELECTION SCREEN ---
function SelectionScreen({ onSelect, onLogout, currentTheme, setTheme }: { onSelect: (mode: string) => void, onLogout: () => void, currentTheme: string, setTheme: (t: string) => void }) {
  const t = THEMES[currentTheme];
  return (
    <div className={`min-h-screen flex flex-col font-sans ${t.colors.bg} ${t.colors.text} relative overflow-hidden transition-colors duration-500`}>
       <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: gridPattern }}></div>
       <header className={`px-8 py-5 border-b ${t.colors.border} ${t.colors.bgSec}/90 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center`}>
          <div className="flex items-center gap-3"><AmbasaltLogo size={24} theme={t} /><span className="font-bold text-lg tracking-tight">AMBASALT <span className={`font-normal ${t.colors.accent}`}>VIRTUAL LAB</span></span></div>
          <div className="flex items-center gap-4"><ThemeSwitcher currentTheme={currentTheme} setTheme={setTheme} /><div className={`h-6 w-px ${t.colors.border}`}></div><button onClick={onLogout} className={`${t.colors.textSec} hover:text-red-400 transition-colors`}><LogOut size={16} /></button></div>
       </header>
       <main className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
          <div className="w-full max-w-7xl">
             <div className="mb-12"><h1 className="text-3xl md:text-4xl font-bold mb-3">Pilih Modul Analisis</h1><p className={`${t.colors.textSec} text-lg max-w-2xl`}>Tentukan metode simulasi geologi yang ingin Anda gunakan.</p></div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ModuleCard title="Analisis Spesimen Tangan" subtitle="(Hand Specimen)" icon={<Hammer size={32} />} desc="Identifikasi makroskopis tekstur, struktur, dan komposisi mineral pada skala sampel setangan." color="blue" onClick={() => onSelect('rock')} theme={t} />
                <ModuleCard title="Mikroskopi Irisan Tipis" subtitle="(Thin Section)" icon={<Microscope size={32} />} desc="Simulasi petrografi optik virtual dengan kontrol polarisasi (PPL/XPL)." color="emerald" highlight onClick={() => onSelect('thin_section')} theme={t} />
                <ModuleCard title="Identifikasi Mineral" subtitle="(Mineral ID)" icon={<Gem size={32} />} desc="Identifikasi spesifik mineral tunggal berdasarkan habit kristal dan sifat fisik." color="purple" onClick={() => onSelect('mineral')} theme={t} />
             </div>
          </div>
       </main>
    </div>
  );
}

function ModuleCard({ title, subtitle, icon, desc, color, onClick, highlight, theme }: { title: string, subtitle: string, icon: React.ReactNode, desc: string, color: string, onClick: () => void, highlight?: boolean, theme: Theme }) {
  const isObsidian = theme.id === 'obsidian';
  let accentColor = theme.colors.accent;
  let accentBorder = theme.colors.accentBorder;
  if (color === 'blue') { accentColor = 'text-blue-400'; accentBorder = 'group-hover:border-blue-500'; }
  if (color === 'purple') { accentColor = 'text-purple-400'; accentBorder = 'group-hover:border-purple-500'; }
  if (color === 'emerald' && !isObsidian) { accentColor = 'text-emerald-400'; accentBorder = 'group-hover:border-emerald-500'; }

  return (
     <div onClick={onClick} className={`group relative p-8 rounded-xl ${theme.colors.bgSec} border transition-all duration-300 cursor-pointer flex flex-col h-full ${highlight ? `${theme.colors.accentBorder} shadow-[0_0_30px_rgba(0,0,0,0.2)]` : `${theme.colors.border}`} ${accentBorder} hover:-translate-y-1 hover:shadow-xl`}>
        <div className="relative z-10 flex flex-col h-full">
           <div className="flex justify-between items-start mb-6"><div className={`p-4 rounded-lg ${theme.colors.bg} border ${theme.colors.border} ${accentColor}`}>{icon}</div></div>
           <h3 className={`text-xl font-bold ${theme.colors.text} mb-1 group-hover:text-white transition-colors`}>{title}</h3>
           <p className={`text-xs font-bold mb-4 ${accentColor} opacity-80`}>{subtitle}</p>
           <p className={`${theme.colors.textSec} text-sm leading-relaxed mb-8 flex-1 border-t ${theme.colors.border} pt-4 opacity-80`}>{desc}</p>
           <div className="mt-auto flex items-center justify-between"><span className={`text-[10px] ${theme.colors.textSec} font-mono uppercase tracking-widest font-bold`}>Module V.2.0</span><div className={`p-1.5 rounded-full border ${theme.colors.border} ${accentColor} group-hover:bg-white/5 transition-colors`}><ArrowRight size={14} /></div></div>
        </div>
     </div>
  );
}

// --- 6. MAIN APP (DENGAN MEKANISME ANTI-GAGAL) ---
function AmbasaltMainApp({ mode, onBack, onLogout, currentTheme, setTheme }: { mode: string, onBack: () => void, onLogout: () => void, currentTheme: string, setTheme: (t: string) => void }) {
  // KEY DEFAULT
  const [apiKey, setApiKey] = useState("AIzaSyBOXJH1l7DG_kkqeKkLsYz6I-7L7Agz5sI"); 
  const [showKeyInput, setShowKeyInput] = useState(false); // Untuk popup darurat

  const t = THEMES[currentTheme];

  // STATE
  const [analysisMode, setAnalysisMode] = useState('image'); 
  const [pplImage, setPplImage] = useState<string | null>(null); 
  const [pplBase64, setPplBase64] = useState<string | null>(null);
  const [pplMime, setPplMime] = useState("image/jpeg");
  const [xplImage, setXplImage] = useState<string | null>(null); 
  const [xplBase64, setXplBase64] = useState<string | null>(null);
  const [xplMime, setXplMime] = useState("image/jpeg");
  
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

  // API Call dengan Error Handling Khusus Lomba
  const analyzeSample = async () => {
    setLoading(true);
    setResult(null); setErrorMsg(null); setGridData([]); setSelectedCell(null);

    if (isThinSection && analysisMode === 'image') setUsePointCounting(true);

    try {
      const contentParts = [];
      let systemPrompt = "";
      // STRUKTUR JSON YANG LEBIH KETAT
      const jsonFormat = `
        OUTPUT JSON (Strict, No Backslash):
        {
          "rockName": "Scientific Name",
          "classificationType": "Tipe Klasifikasi",
          "description": "Deskripsi detail.",
          "paragenesis": "Urutan pembentukan.",
          "petrogenesis": "Interpretasi asal-usul.",
          "occurrences": { "indonesia": ["Lokasi A", "Lokasi B"], "world": ["Region A", "Region B"] },
          "pointCountingStats": "Ringkasan komposisi",
          "gridAnalysis": [ {"index": 0, "mineral": "Nama", "colorHex": "#RRGGBB", "feature": "Optik"} ], 
          "minerals": [
              { 
                "name": "Nama Mineral", 
                "percentage": "%", 
                "description": "Deskripsi.",
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
         setLoadingStep("Menginisialisasi Petrografi...");
         systemPrompt = `PERAN: Senior Petrographer. TUGAS: Analisis Thin Section. Fokus: Sifat optik mikroskopis. Wajib isi 'gridAnalysis' untuk 16 titik (0-15). Total komposisi harus 100% (termasuk opak/massa dasar). ${jsonFormat}`;
      } else if (isHandSpecimen) {
         setLoadingStep("Menginisialisasi Analisis Makroskopis...");
         systemPrompt = `PERAN: Geologist Lapangan. TUGAS: Identifikasi Hand Specimen. Fokus: Tekstur makroskopis, warna, kekerasan. ${jsonFormat}`;
      } else {
         setLoadingStep("Menginisialisasi Mineralogi...");
         systemPrompt = `PERAN: Expert Mineralogist. TUGAS: Identifikasi Mineral Tunggal. Fokus: Kristalografi, sifat fisik. ${jsonFormat}`;
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

      // CALL API
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: contentParts }] })
      });

      // --- MEKANISME ANTI GAGAL (FAIL-SAFE) ---
      if (response.status === 403) {
         // JIKA 403: MUNCULKAN MODAL DARURAT UNTUK GANTI KUNCI
         setLoading(false);
         setShowKeyInput(true); 
         return; // Stop di sini, biarkan user masukkan kunci baru
      }

      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      
      const data = await response.json();
      
      if (data && data.candidates) {
        let text = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
        const firstOpen = text.indexOf('{');
        const lastClose = text.lastIndexOf('}');
        if (firstOpen !== -1 && lastClose !== -1) text = text.substring(firstOpen, lastClose + 1);
        const parsed = JSON.parse(text);
        setResult(parsed);
        if (isThinSection && parsed.gridAnalysis) setGridData(parsed.gridAnalysis);
      } else {
         throw new Error("No data received");
      }

    } catch (error: any) {
      console.error(error);
      setErrorMsg("Analisis Gagal. Cek koneksi atau kunci API.");
    } finally {
      setLoading(false);
    }
  };

  // Fungsi Helper Upload
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'ppl' | 'xpl' | 'video') => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
        if (typeof reader.result === 'string') {
            const base64 = reader.result.split(',')[1];
            if (type === 'ppl') { setPplImage(reader.result); setPplBase64(base64); setPplMime(file.type); }
            if (type === 'xpl') { setXplImage(reader.result); setXplBase64(base64); setXplMime(file.type); }
            if (type === 'video') { setVideoUrl(URL.createObjectURL(file)); setVideoBase64(base64); setVideoFile(file); }
            // Reset hasil sebelumnya
            if (type === 'ppl' || type === 'video') { setResult(null); setGridData([]); setErrorMsg(null); }
        }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={`min-h-screen ${t.colors.bg} ${t.colors.text} font-sans flex flex-col relative transition-colors duration-500`}>
      
      {/* --- EMERGENCY KEY MODAL (Hanya Muncul jika Error 403) --- */}
      {showKeyInput && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`${t.colors.bgSec} border border-red-500/50 rounded-xl p-6 w-full max-w-md shadow-2xl`}>
             <h2 className="text-xl font-bold text-red-400 mb-2 flex items-center gap-2"><AlertCircle size={24}/> API Key Kedaluwarsa</h2>
             <p className={`${t.colors.textSec} text-sm mb-4`}>Kunci default telah habis kuota atau diblokir. Masukkan kunci baru untuk melanjutkan.</p>
             <input 
               type="text" 
               placeholder="Tempel API Key Baru (AIza...)" 
               className={`w-full bg-black border ${t.colors.border} rounded-lg p-3 text-white text-sm mb-4 focus:outline-none focus:border-emerald-500`}
               onChange={(e) => setApiKey(e.target.value)}
             />
             <div className="flex gap-3 justify-end">
               <button onClick={() => setShowKeyInput(false)} className="px-4 py-2 text-sm text-slate-400 hover:text-white">Batal</button>
               <button onClick={() => { setShowKeyInput(false); analyzeSample(); }} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-sm">Simpan & Coba Lagi</button>
             </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <nav className={`h-16 border-b ${t.colors.border} ${t.colors.bgSec}/95 backdrop-blur sticky top-0 z-50`}>
        <div className="max-w-screen-2xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={onBack} className={`flex items-center gap-2 ${t.colors.textSec} hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group`}><ChevronLeft size={14} /> Kembali</button>
            <div className={`h-6 w-px ${t.colors.border}`}></div>
            <div className="flex items-center gap-3"><span className={`${t.colors.accent}`}>{config.icon}</span><h1 className="text-sm font-bold tracking-widest uppercase">{config.title}</h1></div>
          </div>
          <div className="flex items-center gap-4">
             {/* TOMBOL KUNCI MANUAL (Untuk jaga-jaga) */}
             <button onClick={() => setShowKeyInput(true)} className={`p-2 rounded-full hover:bg-white/5 ${t.colors.textSec} hover:text-yellow-400 transition-colors`} title="Ganti API Key Manual"><Key size={16} /></button>
             <ThemeSwitcher currentTheme={currentTheme} setTheme={setTheme} />
             <div className={`w-8 h-8 rounded ${t.colors.bgTert} border ${t.colors.border} flex items-center justify-center`}><User size={14} /></div>
             <button onClick={onLogout}><LogOut size={16} className={`${t.colors.textSec} hover:text-red-400`} /></button>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-screen-2xl mx-auto px-6 py-8 grid lg:grid-cols-12 gap-8 w-full relative z-10">
        
        {/* CONTROLS */}
        <div className="lg:col-span-5 space-y-6">
          <div className={`${t.colors.bgSec} border ${t.colors.border} rounded-xl shadow-xl p-6`}>
             <div className={`flex ${t.colors.bg} p-1 rounded-lg mb-6 border ${t.colors.border}`}>
                 <button onClick={() => handleSwitchAnalysisMode('image')} className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${analysisMode === 'image' ? `${t.colors.bgTert} ${t.colors.text} shadow` : `${t.colors.textSec} hover:text-white`}`}>Gambar Statis</button>
                 <button onClick={() => handleSwitchAnalysisMode('video')} className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${analysisMode === 'video' ? `${t.colors.bgTert} ${t.colors.text} shadow` : `${t.colors.textSec} hover:text-white`}`}>Video Feed</button>
             </div>

             {/* INPUTS */}
             {analysisMode === 'image' ? (
                 <div className="grid grid-cols-2 gap-4">
                    {/* PPL */}
                    <div className={`relative aspect-square bg-black border ${t.colors.border} overflow-hidden group cursor-pointer rounded-lg ${isThinSection ? `col-span-1 rounded-full ring-4 ring-[${t.colors.bgTert}]` : 'col-span-2'}`}>
                        {pplImage ? <img src={pplImage} className="w-full h-full object-cover" style={{transform: `scale(1.5) rotate(${stageRotation}deg)`}} /> 
                        : <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600"><Sun size={24} className="mb-2"/><span className="text-[10px] font-bold">UPLOAD {isThinSection ? 'PPL' : 'FOTO'}</span></div>}
                        {isThinSection && usePointCounting && <InteractiveGrid gridData={gridData} selectedCell={selectedCell} onSelect={setSelectedCell} />}
                        <input type="file" onChange={(e) => handleUpload(e, 'ppl')} className="absolute inset-0 opacity-0 cursor-pointer z-30" />
                    </div>
                    
                    {/* XPL (Only Thin Section) */}
                    {isThinSection && (
                       <div className={`relative aspect-square bg-black border ${t.colors.border} overflow-hidden group cursor-pointer rounded-full ring-4 ring-[${t.colors.bgTert}]`}>
                           {xplImage ? <img src={xplImage} className="w-full h-full object-cover" style={{transform: `scale(1.5) rotate(${stageRotation}deg)`}} /> 
                           : <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600"><Moon size={24} className="mb-2"/><span className="text-[10px] font-bold">UPLOAD XPL</span></div>}
                           {usePointCounting && <InteractiveGrid gridData={gridData} selectedCell={selectedCell} onSelect={setSelectedCell} />}
                           <input type="file" onChange={(e) => handleUpload(e, 'xpl')} className="absolute inset-0 opacity-0 cursor-pointer z-30" />
                       </div>
                    )}
                 </div>
             ) : (
                <div className={`aspect-video bg-black border ${t.colors.border} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                   {videoUrl ? <video src={videoUrl} controls className="w-full h-full object-contain z-10" /> 
                   : <div className="text-center text-slate-600"><Film size={32} className="mx-auto"/><p className="text-xs font-bold">DROP VIDEO</p></div>}
                   <input type="file" onChange={(e) => handleUpload(e, 'video')} className="absolute inset-0 opacity-0 cursor-pointer z-20" />
                </div>
             )}

             {/* CONTROLS */}
             {isThinSection && analysisMode === 'image' && (
                 <div className={`mt-6 p-4 ${t.colors.bg} border ${t.colors.border} rounded-lg`}>
                     <div className="flex justify-between items-center mb-3"><h3 className={`text-[10px] font-bold ${t.colors.textSec}`}>STAGE CONTROLS</h3><button onClick={() => setUsePointCounting(!usePointCounting)} className={`text-[10px] font-bold px-2 py-1 rounded border ${usePointCounting ? `${t.colors.accentBg} text-white border-transparent` : `${t.colors.border} ${t.colors.textSec}`}`}>{usePointCounting ? 'GRID ON' : 'GRID OFF'}</button></div>
                     <input type="range" min="0" max="360" value={stageRotation} onChange={(e) => setStageRotation(parseInt(e.target.value))} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
                 </div>
             )}

             <div className="mt-6">
                 <button onClick={analyzeSample} disabled={loading || (!pplImage && !videoFile)} className={`w-full py-3.5 bg-gradient-to-r ${t.colors.gradient} text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg ${t.colors.glow} transition-all flex items-center justify-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}`}>
                   {loading ? <Scan className="animate-spin" size={16} /> : <Sparkles size={16} />} {loading ? 'PROCESSING...' : 'RUN ANALYSIS'}
                 </button>
                 {loading && <div className={`mt-3 text-center text-[10px] ${t.colors.textSec} animate-pulse`}>{loadingStep}</div>}
                 {errorMsg && <div className="mt-4 p-3 bg-red-900/20 border border-red-900/50 rounded flex items-center gap-3 text-red-400 text-xs"><AlertCircle size={14} /> {errorMsg}</div>}
             </div>
          </div>
        </div>

        {/* RIGHT PANEL: RESULTS */}
        <div className="lg:col-span-7">
          <div className={`${t.colors.bgSec} border ${t.colors.border} rounded-xl h-[750px] flex flex-col relative shadow-xl overflow-hidden`}>
            {result ? (
              <div className={`flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar ${t.colors.bgSec}`}>
                 <section>
                    <span className={`px-2 py-0.5 rounded ${t.colors.bgTert} border ${t.colors.border} ${t.colors.accent} text-[10px] font-bold uppercase`}>{result.classificationType}</span>
                    <h1 className={`text-4xl font-bold ${t.colors.text} my-3`}>{result.rockName}</h1>
                    <p className={`${t.colors.textSec} text-sm leading-7 border-l-2 ${t.colors.border} pl-4`}>{result.description}</p>
                 </section>
                 
                 {/* Grid Details */}
                 {isThinSection && selectedCell !== null && (
                    <section className={`${t.colors.bg} border ${t.colors.border} p-4 rounded-lg animate-in fade-in slide-in-from-top-2`}>
                        <div className="flex justify-between items-center mb-2"><span className={`text-xs font-bold ${t.colors.textSec}`}>GRID POINT #{selectedCell + 1}</span><button onClick={() => setSelectedCell(null)}><X size={14} className="text-slate-500"/></button></div>
                        {gridData.find(d => d.index === selectedCell) ? <div className="grid grid-cols-2 gap-4"><div><span className="text-[10px] text-slate-500 block">MINERAL</span><span className={`text-sm font-bold ${t.colors.text}`}>{gridData.find(d => d.index === selectedCell).mineral}</span></div><div><span className="text-[10px] text-slate-500 block">FEATURE</span><span className="text-xs text-slate-400">{gridData.find(d => d.index === selectedCell).feature}</span></div></div> : <span className="text-xs text-slate-500">No data.</span>}
                    </section>
                 )}

                 {/* Minerals */}
                 <div className="space-y-2">
                    {result.minerals?.map((m: any, i: number) => (
                      <div key={i} className={`border ${t.colors.border} rounded-lg overflow-hidden`}>
                         <div className={`${t.colors.bg} p-3 flex justify-between items-center cursor-pointer`} onClick={() => setExpandedMineralIndex(expandedMineralIndex === i ? null : i)}>
                            <div className="flex items-center gap-3"><div className={`${t.colors.textSec} ${expandedMineralIndex === i ? t.colors.accent : ''}`}>{expandedMineralIndex === i ? <Eye size={16} /> : <ChevronDown size={16} />}</div><span className={`font-bold text-sm ${t.colors.text}`}>{m.name}</span></div>
                            <span className={`text-xs font-bold ${t.colors.text} ${t.colors.bgTert} px-2 py-0.5 rounded`}>{m.percentage}</span>
                         </div>
                         {expandedMineralIndex === i && m.detailedOpticalProps && (
                            <div className={`p-4 ${t.colors.bgSec} border-t ${t.colors.border} grid grid-cols-2 gap-4 text-xs`}>
                               <OpticalItem label="Warna" value={m.detailedOpticalProps.warnaInterferensi} />
                               <OpticalItem label="Bentuk" value={m.detailedOpticalProps.habitusShape} />
                               <OpticalItem label="Relief" value={m.detailedOpticalProps.relief} />
                               <OpticalItem label="Belahan" value={m.detailedOpticalProps.cleavageFracture} />
                            </div>
                         )}
                      </div>
                    ))}
                 </div>
              </div>
            ) : (
               <div className={`flex-1 flex flex-col items-center justify-center ${t.colors.textSec} opacity-50`}>
                  {loading ? <div className="text-center"><Loader2 size={32} className="animate-spin mb-4 mx-auto"/><p className="text-xs font-mono uppercase">{loadingStep}</p></div> : <><Database size={48} strokeWidth={1} className="mb-4"/><p className="text-sm">Siap Menganalisis.</p></>}
               </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function OpticalItem({ label, value }: { label: string, value: string }) {
  return <div><span className="text-[9px] opacity-70 font-bold uppercase block mb-0.5">{label}</span><span className="opacity-90">{value || "-"}</span></div>;
}

function InteractiveGrid({ gridData, selectedCell, onSelect }: { gridData: any[], selectedCell: number | null, onSelect: (index: number) => void }) {
  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 z-40 pointer-events-auto shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
      {Array.from({ length: 16 }).map((_, i) => {
        const hasData = gridData.find(d => d.index === i);
        const isSelected = selectedCell === i;
        const cellColor = hasData?.colorHex || '#ffffff'; 
        return (
          <div key={i} onClick={(e) => { e.stopPropagation(); onSelect(i); }} className={`relative border border-white/20 cursor-pointer transition-all duration-200 group ${isSelected ? 'border-white border-2 z-10 shadow-lg' : 'hover:bg-white/10'}`} style={{ backgroundColor: isSelected ? `${cellColor}40` : 'transparent', borderColor: isSelected ? cellColor : undefined }}>
             {hasData && <div className="absolute inset-0 flex items-center justify-center"><div className="w-2 h-2 rounded-full shadow-md" style={{ backgroundColor: cellColor }}></div></div>}
             <div className={`absolute top-0.5 left-1 text-[8px] font-mono font-bold leading-none drop-shadow-md ${isSelected ? 'text-white' : 'text-white/60'}`}>{i + 1}</div>
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
  const handleSelectMode = (mode: string) => { setAppMode(mode); setScreen('app'); };
  const handleLogout = () => { setScreen('auth'); setAppMode('thin_section'); };
  const handleBackToMenu = () => setScreen('selection');

  if (screen === 'app') return <AmbasaltMainApp mode={appMode} onBack={handleBackToMenu} onLogout={handleLogout} currentTheme={currentTheme} setTheme={setTheme} />;
  if (screen === 'selection') return <SelectionScreen onSelect={handleSelectMode} onLogout={handleLogout} currentTheme={currentTheme} setTheme={setTheme} />;
  return <AuthScreen onLogin={handleLoginSuccess} theme={THEMES[currentTheme]} setTheme={setTheme} currentTheme={currentTheme} />;
}
