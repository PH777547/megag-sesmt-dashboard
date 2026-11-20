
import "./globals.css";

export const metadata = {
  title: "Mega G | Dashboard SESMT",
  description: "Painel Gerencial de Segurança do Trabalho",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
