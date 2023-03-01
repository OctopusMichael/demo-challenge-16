import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setData }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (name) => {
    setData(name);
  };

  return (
    <>
      <div className="container-fluid section-container-main">
        <div className="row ">
          <div className="col-12 col-lg-6 section-left">
            <div>
              <h1>Learn to code by watching others </h1>
              <p>
                See how experienced developers solve problems in real-time.
                Watching scripted tutorials is great, but understanding how
                developers think is invaluable.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="section-title">
              <h1>
                Try it free 7 days{" "}
                <span className="muted">then $20/mo. thereafter</span>
              </h1>
            </div>
            <div className="section-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className={errors.email?.type == "required"  ? "input-error" : "nothing-here"}
                  type="text"
                  placeholder="First Name"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors.name?.type === "required" && <p> First Name cannot be empty  </p> }

                <input
                  className={errors.lastName?.type == "required" ? "input-error" : "nothing-here"}
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: true,
                  })}
                />
                 {errors.lastName?.type === "required" && <p > Last Name cannot be empty  </p> }

                <input
                  className={errors.email?.type == "required" || errors.email?.type == "pattern" ? "input-error" : "nothing-here"}
                  type="text"
                  placeholder="Email Address"
                  {...register("email", {
                    required: true,
                    pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i,
                  })}
                />
                {errors.email?.type === "required" && <p > Email cannot be empty  </p> }
                {errors.email?.type === "pattern" && <p > Looks like this is not an email  </p> }

                <input
                  className={errors.password?.type == "required"  ? "input-error" : "nothing-here"}
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                  })}
                />
                {errors.password?.type === "required" && <p > Password cannot be empty.  </p> }

                <button type="submit" className="btn">
                  {" "}
                  CLAIM YOUR FREE TRIAL{" "}
                </button>

                <div className="footer-form">
                  <p>
                    By clicking the button, you are agreeing to our{" "}
                    <span>
                      <b>Terms and Services</b>
                    </span>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
