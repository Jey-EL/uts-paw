import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import JumlahBuku from '../components/JumlahBuku.jsx'
import JumlahKategori from '../components/JumlahKategori.jsx'
import './Beranda.css'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section>
      <p>{mahasiswa.tema}</p>
      <h1>Selamat Datang</h1>
      <p>Simpan dan kelola buku yang kamu baca</p>
      <Link to="/koleksi">Lihat Koleksi</Link>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <td><JumlahBuku jumlah={items.length}/></td>
              <td><JumlahKategori jumlah={jumlahKategori}/></td>
            </tr>
          </tbody>
        </table>
      )}
      
    </section>
  )
}