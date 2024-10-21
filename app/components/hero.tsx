import foto from "../potoica.jpg";

export default function Hero(){
    return(
      <div>
      <h1 className="text-gray-300 font-bold"> CV ONLINE</h1>
      <h1 className="text-3xl">Annisa Dafifa Zahra</h1>
      <Profile/>
      <p>
      Saya adalah seorang mahasiswa jurusan sistem informasi semester 5 di universitas ma'soem. cita - cita saya ingin menjadi seorang yang berguna bagi nusa dan bangsa. saya ingin pergi ke sukabumi ke rumahnya alma.
      </p>
    </div>
    );
}

function Profile() {
    return <img src={foto.src} alt="Annisa Dafifa Zahra Profile" className="fotoku" />;
}