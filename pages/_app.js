import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex">
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
      <div className="bg-black w-28 max-h-min">g</div>
    </div>
  );
}
