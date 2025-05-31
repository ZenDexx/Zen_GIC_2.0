import "./styles/globals.css";

export const metadata = {
  title: "Zen GIC Final",
  description: "Evaluación interactiva del módulo GIC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
