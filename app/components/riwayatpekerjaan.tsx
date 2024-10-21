import RowPekerjaan from "./rowpekerjaan";

export default function RiwayatPekerjaan() {
    return(
      <div>
      <h2 className="text-2xl">Riwayat Pekerjaan</h2>
      <RowPekerjaan tahunbekerja="2008" instansi="garuda" bekerjasebagai="pramugari" />
      <RowPekerjaan tahunbekerja="2009" instansi="lion" bekerjasebagai="pramugari" />
      <RowPekerjaan tahunbekerja="2010" instansi="alfamart" bekerjasebagai="keptok" />
      <RowPekerjaan tahunbekerja="2011" instansi="alfamidi" bekerjasebagai="keptok" />
    </div>
    );
  }
  