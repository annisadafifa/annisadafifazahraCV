import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
    return(
      <div>
      <h2 className="text-2xl">Riwayat Pendidikan</h2>
      <RowRiwayat jenjang="SD" sekolah="SDN Tebet Barat 01 Jakarta" tahun="2008-2014" />
      <RowRiwayat jenjang="SMP" sekolah="SMPN 15 Jakarta" tahun="2014-2017" />
      <RowRiwayat jenjang="SMK" sekolah="SMK Jakarta Timur 1" tahun="2017-2020" />
      <RowRiwayat jenjang="SARJANA" sekolah="MA'SOEM UNIVERSITY" tahun="2022-SEKARANG" />
    </div>
    );
  }
  