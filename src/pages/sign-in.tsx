import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SignInForm from 'components/organism/SignInForm';

export default function SignIn() {
  return (
    <section className="sign-in mx-auto">
      <div className="row">
        <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <form action="">
            <div className="container mx-auto">
              <div className="pb-50">
                <Link legacyBehavior href="/">
                  <a className="navbar-brand">
                    <Image src="/icon/logo.svg" alt="Logo" width={159} height={45} />
                  </a>
                </Link>
              </div>
              <SignInForm />
            </div>
          </form>
        </div>
        <div className="col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none">
          <Image src="/img/signIn-new.png" width={502} height={391.21} className="img-fluid pb-50" alt="" />
          <h2 className="text-4xl fw-bold text-white mb-30">Nakama</h2>
          <p className="text-white m-0">
            Your Mental Health is a Priorty
            <br />
            Take care of your mind, just as you would take care <br />
            of your body
          </p>
        </div>
      </div>
    </section>
  );
}
