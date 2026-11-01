import mahasiswa from '../../mahasiswa.json'
import './Tentang.css'

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/Jey-EL/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section>
      <h1>Tentang Saya</h1>
      <div id="konten">
        <figure>
          <img src={`${import.meta.env.BASE_URL}fotoku.jpg`} alt="Foto Jundi Lamtara" width="250px" height="auto" />
        </figure>
        <dl>
           <dt>Nama</dt>
              <dd>{nama}</dd>
              <dt>NIM</dt>
              <dd>{nim}</dd>
              <dt>Kelas</dt>
              <dd>{kelas}</dd>
              <dt>Tema</dt>
              <dd>{tema}</dd>
        </dl>
        <p>
          Kode sumber: <a id="link" href={REPO}>{REPO}</a>
        </p>
      </div>
    </section>
  )
}