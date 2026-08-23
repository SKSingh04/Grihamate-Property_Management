import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <section
          id="home"
          className="flex min-h-screen items-center justify-center"
        >
          <h1 className="text-4xl font-bold text-[#2B3A67]">
            Grihamate
          </h1>
        </section>
      </main>
    </>
  );
}

export default App;