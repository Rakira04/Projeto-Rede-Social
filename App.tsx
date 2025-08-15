import { StatusBar } from "expo-status-bar";
// Não é mais necessário importar o Home aqui
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      {/* O componente Routes será responsável por renderizar a Home ou outras telas */}
      <Routes />
      <StatusBar style="light" />
    </>
  );
}