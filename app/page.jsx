import React from 'react';

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const AtSymbolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
  </svg>
);

const moods = [
  { emoji: '😊', name: 'Senang' },
  { emoji: '😢', name: 'Sedih' },
  { emoji: '❤️', name: 'Haru' },
  { emoji: '🔥', name: 'Marah' },
  { emoji: '🤔', name: 'Ragu' },
  { emoji: '😐', name: 'Biasa' },
];

export default function ConfessPage() {
  return (
    <main className="bg-slate-50 font-sans flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <div className="bg-white shadow-2xl shadow-slate-300/40 rounded-2xl p-6 sm:p-8 md:p-10">
          
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent pb-2">
              Tuliskan Pesanmu
            </h1>
            <p className="text-slate-500 mt-2 text-base">
              Kirimkan secara anonim dan pribadi hanya untuk saya.
            </p>
          </div>

          <form className="space-y-8">
            <div>
              <label htmlFor="pesan" className="block text-sm font-bold text-slate-700 mb-2">
                Isi Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows="6"
                className="block w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="Apa yang sedang kamu rasakan..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">
                Pilih Mood Kamu
              </label>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {moods.map((mood) => (
                  <button
                    key={mood.name}
                    type="button"
                    className="flex-1 min-w-[70px] text-center px-3 py-3 border-2 border-slate-200 rounded-xl cursor-pointer transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="text-3xl">{mood.emoji}</span>
                    <span className="block text-xs font-semibold text-slate-600 mt-1">{mood.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="nama" className="block text-sm font-bold text-slate-700 mb-2">
                  Nama <span className="font-normal text-slate-500">(Opsional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <UserIcon />
                  </div>
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    className="block w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="Biarkan kosong untuk anonim"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="media_sosial" className="block text-sm font-bold text-slate-700 mb-2">
                  Media Sosial <span className="font-normal text-slate-500">(Opsional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <AtSymbolIcon />
                  </div>
                  <input
                    type="text"
                    name="media_sosial"
                    id="media_sosial"
                    className="block w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="@username"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-lg text-base font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
        
        <footer className="text-center mt-8">
          <p className="text-sm text-slate-400">
            Dibuat dengan ❤️ untuk didengarkan.
          </p>
        </footer>
      </div>
    </main>
  );
}
