import React from 'react';
import Image from 'next/image';

export default function MainBanner() {
  return (
    <section className="header pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg-6 col-12 my-auto">
            <p className="text-support text-lg color-palette-2">Halo Nakama,</p>
            <h1 className="header-title color-palette-1 fw-bold">
              Kamu <span className="d-sm-inline d-none">Tidak</span>
              <span className="d-sm-none d-inline">a </span>
              <span className="underline-blue"> Sendirian</span>
            </h1>
            <p className="mt-30 mb-40 text-lg color-palette-1">
              Kami siap mendengarkan dan membantu
              <br className="d-md-block d-none" />
              masalah kamu.
            </p>
            <div className="d-flex flex-lg-row flex-column gap-4">
              <a className="btn btn-get text-lg text-white rounded-pill" href="#feature" role="button">
                Login
              </a>
              <a className="btn-learn text-lg color-palette-1 my-auto text-center" href="#" role="button">
                Daftar Akun
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-12 d-lg-block d-none">
            <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
              <div className="position-relative" data-aos="zoom-in">
                <Image src="/img/headernew.png" className="img-fluid" width={440} height={440} alt="header" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
