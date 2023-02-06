import React from 'react';

export default function Story() {
  return (
    <section className="story pb-40">
      <div className="container-xxl container-fluid">
        <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <div className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60" data-aos="zoom-in">
            <img src="/img/header-2new.png" width="612" height="452" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-5 col-12 ps-lg-60">
            <div className="">
              <h2 className="text-4xl fw-bold color-palette-1 mb-30">Ceritakan Masalahmu</h2>
              <p className="text-lg color-palette-1 mb-30">
                Yuk bagikan masalah yang pernah atau sedang kamu alami!
                <br className="d-sm-block d-none" />
                Siapa tahu masalah kamu juga pernah atau sedang dialami orang lain.
                <br className="d-sm-block d-none" />
                Kamu juga bisa membantu masalah orang lain dengan memberikan mereka nasihat dan motivasi.
              </p>
              <div className="d-mdb-block d-flex flex-column w-100">
                <a className="btn btn-read text-lg rounded-pill" href="https://arblo.vercel.app/" role="button">
                  Mulai Bagikan Cerita
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
