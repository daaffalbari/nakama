import React from 'react';
import Link from 'next/link';

export default function SignInForm() {
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Login</h2>
      <p className="text-md color-palette-2 m-0 text-center">Selamat Datang</p>
      <p className="text-sm color-palette-2 m-0 text-center">Silahkan Masukan Username dan Password Anda</p>
      <div className="pt-50">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">Username</label>
        <input type="username" className="form-control rounded-pill text-lg" placeholder="Enter your Username" />
      </div>
      <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
        <input type="password" className="form-control rounded-pill text-lg" placeholder="Your password" />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button type="button" className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16">
          Continue to Sign In
        </button>
        <Link legacyBehavior href="/sign-up">
          <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill">Sign Up</a>
        </Link>
      </div>
    </>
  );
}
