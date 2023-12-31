import React,{useEffect,useState} from "react";
import  BackgroundImageCover  from "./../../assets/img/hero-bg2.jpg";
import HeroBackground from '../../assets/img/hero-bg.jpg'
// import './completeStyle.css';
import './completeStyle.css';
import {signIn} from './../../function/index'
function LoginPage({changeLoginStatus}) {
  const [email,setEmail]=useState('noumancanava@gmail.com');
  const [password,setPassword]=useState('nomi12345');
  useEffect(() =>{

  },[])
  return (
    <div>
      <main className="main-content mt-0">
        <section>
          <div className="page-header min-vh-75">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                  <div className="card card-plain mt-8">
                    <div className="card-header pb-0 text-left bg-transparent">
                      <h3 className="font-weight-bolder text-info text-gradient">
                        Welcome back
                      </h3>
                      <p className="mb-0">
                        Enter your email and password to sign in
                      </p>
                    </div>
                    <div className="card-body">
                      <form role="form">
                        <label>Email</label>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value);}}
                            aria-describedby="email-addon"
                          />
                        </div>
                        <label>Password</label>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value);}}
                            aria-describedby="password-addon"
                          />
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                        <div className="text-center">
                          <button
                            type="button"
                            onClick={async ()=>{let response=await signIn(email,password); console.log(response)  ;changeLoginStatus(response) }}
                            className="btn bg-gradient-info w-100 mt-4 mb-0"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Don't have an account?
                        <a
                          href="#"
                          className="text-info text-gradient font-weight-bold"
                        >
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                    <div
                      className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                      style={{backgroundImage: `url(${BackgroundImageCover})`}}
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default LoginPage;

