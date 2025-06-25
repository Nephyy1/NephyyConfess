import "./globals.css";

export const metadata = {
  title: "Kirim Pesan Pribadi",
  description: "Sebuah ruang untuk mengirimkan pesan secara anonim dan pribadi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
