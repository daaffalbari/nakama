import React from 'react';
import ArticleItem from 'components/molecules/articleItem';

export default function Article() {
  return (
    <section className="article pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl text-center fw-bold color-palette-1 mb-30">Artikel</h2>
        <p className="text-md-center color-paletter-1 mb-3o">
          Yuk, Tambah wawasan kamu tentang kesehatan mental dengan membaca artikel yang ada
        </p>
        <div className="row gap-lg-0 pb-5 pt-5 gap-4" data-aos="fade-up">
          <ArticleItem
            image="/img/ar3.png"
            title="Shalat Duha bang"
            description="Shalat wajib jadi harus ditunaikan secepatnya..."
            href="/article/1"
            category="Kesehatan"
          />
          <ArticleItem
            image="/img/ar1.png"
            title="Menjaga Kesehatan Mental"
            description="Menjaga Kesehatana Mental"
            href=""
            category="Kesehatan Mental"
          />
          <ArticleItem
            image="/img/ar2.png"
            title="Tips Menjada Kesehatan Mental"
            description="Aku mau ngeshare beberapa Tips yang aku dapetin ketika kemarin di posisi terpuruk"
            href="#"
            category="Tips and Trick"
          />
          <div className="text-center mt-3 ">
            <a className="btn btn-article text-lg rounded-pill" href="#" role="button">
              Lihat Lebih Banyak
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
