import React from 'react';
import Image from 'next/image';
import SignUpForm from 'components/organism/SignUpForm';

export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <a className="navbar-brand" href="../index.html">
              <Image src="/icon/logo.svg" alt="logo" width={150} height={45} />
            </a>
          </div>
          <SignUpForm />
        </form>
      </div>
    </section>
  );
}
