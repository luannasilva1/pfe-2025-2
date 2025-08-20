'use client';
import Image from 'next/image';

export default function Profile() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Image 
        src="/img.jpg" // Caminho da imagem dentro da pasta public
        alt="Foto de perfil"
        width={150}     // Largura da imagem
        height={150}    // Altura da imagem
        style={{ borderRadius: '50%' }} // Deixa a imagem redonda
      />
      <h2>Luanna Silva</h2>
      <p>
        Sou estudante da disciplina Programação Front-End.<br />
        Gosto tecnologia e adoro aprender sobre desenvolvimento web.
      </p>
    </div>
  );
}
