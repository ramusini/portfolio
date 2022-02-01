import "./styles.css";
import Link from "./compornents/Link";
import HeaderTitle from "./compornents/Header";
import MainText from "./compornents/MainText";

export default function App() {
  return (
    <>
      <header>
        <HeaderTitle />
        <Link />
      </header>
      <main>
        <MainText />
      </main>
    </>
  );
}
