import React from 'react';

export default function SignUpForm() {
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
      <div className="pt-50">
        <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Full Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter your name"
        />
      </div>
      {/* create gender form */}
      <div className="pt-30">
        <label htmlFor="jk" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Jenis Kelamin
        </label>
        <select name="jk" id="jk" className="form-select form-control rounded-pill text-lg form-select-lg mb-3">
          <option selected>Pilih Jenis Kelamin</option>
          <option value="1">Laki-laki</option>
          <option value="2">Perempuan</option>
        </select>
      </div>
      {/* No hp */}
      <div className="pt-30">
        <label htmlFor="nohp" className="form-label text-lg fw-medium color-palette-1 mb-10">
          No HP
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="nohp"
          name="nohp"
          aria-describedby="nohp"
          placeholder="Enter your No HP"
        />
      </div>
      <div className="pt-30">
        <label htmlFor="username" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Username
        </label>
        <input
          type="username"
          className="form-control rounded-pill text-lg"
          id="username"
          name="username"
          aria-describedby="username"
          placeholder="Enter your Username"
        />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <a
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          href="../src/sign-up-photo.html"
          role="button"
        >
          Daftar
        </a>
        <a
          className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
          href="../src/sign-in.html"
          role="button"
        >
          Sign In
        </a>
      </div>
    </>
  );
}
