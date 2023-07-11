import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userslice } from "../redux/userslice";

const Login = ()=> {
  const [users, setusers] = useState();
  const [name, setname] = useState();
  const [pass, setpass] = useState();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((resp) => setusers(resp.data.users));
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handlelogin = ()=>{
    const user = users?.filter((r)=>{
      if (r.username === name) {
        if (r.password === pass) {
          dispatch(userslice.actions.getuserdata(r));
          navigate('/products');
          return r;
        }
      }
    }
    );
    console.log(user);
    if (user.lenght === 0) {
      document.querySelector('.wrong').innerHTML = 'wrong Username or password'
    }
  };
  return (
    <>
      <section className="vh-120 ">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3"></i>
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>
                        <p classNameName="wrong fa-1"></p>
                        <h5 className="fw-normal mb-3 pb-3">
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            onChange={(e)=>setname(e.target.value)}
                          />
                          <label className="form-label" for="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            onChange={(e) => setpass(e.target.value)}
                          />
                          <label className="form-label" for="form2Example27">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            onClick={()=>handlelogin()}
                            className="btn btn-dark btn-lg btn-block"
                          >
                            Login
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2">
                          Don't have an account? <a href="#!">Register here</a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
