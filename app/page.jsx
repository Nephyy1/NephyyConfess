import React from 'react';

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
  </svg>
);

const PaperAirplaneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    </svg>
);

const moods = [
  { emoji: '😊', name: 'Gembira' },
  { emoji: '😢', name: 'Sedih' },
  { emoji: '❤️', name: 'Berbunga' },
  { emoji: '🔥', name: 'Marah' },
  { emoji: '🤔', name: 'Bingung' },
  { emoji: '✨', name: 'Terinspirasi' },
];

export default function ConfessPage() {
  return (
    <main className="bg-gradient-to-br from-white to-slate-100 font-sans flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white/70 backdrop-blur-xl border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-6 sm:p-10">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
              Ruang Pesan Pribadi
            </h1>
            <p className="text-slate-500 mt-3 text-base max-w-md mx-auto">
              Semua yang terkirim bersifat rahasia dan hanya akan terbaca oleh saya.
            </p>
          </div>

          <form className="space-y-10">
            <div>
              <label htmlFor="pesan" className="block text-sm font-medium text-slate-600 mb-2">
                Pesan Anda
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows="6"
                className="block w-full px-4 py-3 bg-slate-50/80 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                placeholder="Tuliskan apapun yang ingin Anda sampaikan..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600 mb-3">
                Bagaimana Perasaanmu?
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
                {moods.map((mood) => (
                  <button
                    key={mood.name}
                    type="button"
                    className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 border-2 border-slate-200 rounded-xl cursor-pointer transition-all duration-300 group hover:border-indigo-400 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="text-4xl transition-transform duration-300 group-hover:scale-110">{mood.emoji}</span>
                    <span className="block text-xs font-semibold text-slate-600 mt-2">{mood.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-slate-600 mb-2">
                  Nama Anda <span className="font-normal text-slate-400">(Opsional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <UserIcon />
                  </div>
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    className="block w-full pl-12 pr-4 py-3 bg-slate-50/80 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                    placeholder="Biarkan kosong untuk anonim"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tautan" className="block text-sm font-medium text-slate-600 mb-2">
                  Sertakan Tautan <span className="font-normal text-slate-400">(Opsional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <LinkIcon />
                  </div>
                  <input
                    type="url"
                    name="tautan"
                    id="tautan"
                    className="block w-full pl-12 pr-4 py-3 bg-slate-50/80 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                    placeholder="Profil, email, atau lainnya"
                  />
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-4 border border-transparent rounded-lg shadow-lg text-base font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-indigo-400/50"
              >
                <PaperAirplaneIcon />
                <span>Kirim Pesan</span>
              </button>
            </div>
          </form>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Dibuat untuk didengarkan.
          </p>
        </div>
      </div>
    </main>
  );
      }
