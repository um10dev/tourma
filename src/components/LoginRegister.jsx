import React, {useEffect, useState, useRef} from "react";
import * as authService from "../services/authService";

const LoginRegister = () => {
  const [isLogin, setLogin] = useState(true);
  const [formMarginTop, setFormMarginTop] = useState(0);
  const [height, setHeight] = useState();
  const tourmaDiv = useRef();
  const formDiv = useRef();

  useEffect(() => {
    let tourmaDivHeight = tourmaDiv.current.clientHeight + 24;
    let formDivHeight = formDiv.current.clientHeight;
    let windowHeight = window.innerHeight;
    let dynamicFormDivMargin = (windowHeight - (tourmaDivHeight + formDivHeight))/2;
    setFormMarginTop(dynamicFormDivMargin);
  }, [height])

  function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, ms);
    };
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setHeight(window.innerHeight);
    }, 250);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  function handleAuth() {
    if (isLogin === true) {
      // login call
      authService.login().then().catch();
    } else {
      // register call
      authService.register().then().catch();
    }
  }

  function toggleLogin() {
    setLogin(!isLogin);
  }

  return (
    <div>
      <div className="tourma-login-image">
        <div className="container full-100vh">
          <div className="row mt-4" id="tourma-logo" ref={tourmaDiv}>
            <div className="tourma-logo-font">TOURMA</div>
            <div>Manage tours. The easy way.</div>
          </div>
          <div className="row" id="auth-form" style={{marginTop: formMarginTop}} ref={formDiv}>
            <div className="col-5 col-sm-5 col-md-4 col-lg-3 col-xl-2 mx-auto">
              <form onSubmit={handleAuth}>
                {!isLogin && <div>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" className="form-control" id="fullName" placeholder="Full Name" />
                </div>}
                <div>
                  <label htmlFor="emailAddress">Email address</label>
                  <input type="email" className="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" autoComplete="off" placeholder="Password" />
                </div>
                {isLogin && <div>
                  <input type="checkbox" style={{marginRight: 5}} id="rememberMe" />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>}
                <button type="submit" className={"btn btn-" + (isLogin ? "primary" : "success") + " col-12 mt-3"}>{isLogin ? "Log In" : "Register"}</button>
                <div className="mt-2 text-center cursor-pointer" onClick={toggleLogin}>{isLogin ? "Create Account" : "Login"}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default LoginRegister;