import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import JumlahBuku from './components/JumlahBuku'
import JumlahKategori from './components/JumlahKategori'

describe ('Test komponen RakBaca', () => {
    test('menampilkan judul Total Buku', () => {
        render(<JumlahBuku jumlah={10} />)
        expect(screen.getByText('Total Buku')).toBeInTheDocument()
    })

    test('menampilkan jumlah buku', () => {
        render(<JumlahBuku jumlah={10} />)
        expect(screen.getByText('10')).toBeInTheDocument()
    })

    test('menampilkan judul jumlah kategori', () => {
        render(<JumlahKategori jumlah={5} />)
        expect(screen.getByText('5')).toBeInTheDocument()
    })

    test('menampilkan judul Total Kategori', () => {
        render(<JumlahKategori jumlah={5} />)
        expect(screen.getByText('Total Kategori')).toBeInTheDocument()
    })

    test('menampilkan angka 0 ketika belum ada buku', () => {
        render(<JumlahBuku jumlah={0} />)
        expect(screen.getByText('0')).toBeInTheDocument()
    })
})