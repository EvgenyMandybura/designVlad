import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const NDA_KEY = process.env.REACT_APP_NDA_PASSWORD;

const Modal = (props) => {
  const [openNDA, setOpenNDA] = useState(false);
  const [isButtonSet, setIsButtonSet] = useState(false);
  useEffect(() => {
    const closeOnEscapeKeyDown = (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        props.onClose();
      }
    };
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [props]);

  const formik = useFormik({
    validationSchema: Yup.object({
      name: Yup.string().label("Full Name").required(),
    }),
    initialValues: {
      name: "",
    },
    onSubmit: function (values) {
      if (NDA_KEY === values.name) {
        setOpenNDA(true);
      }
      setIsButtonSet(true);
    },
  });

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-body">
            <div className="bg-blue-300 min-w-screen min-h-screen overflow-x-hidden">
              <div>
                <p>🔒 Moonstone bank </p>
                <p>
                  I’m willing to show you the case and share you the details,
                  but the following project contains sensitive data.
                </p>
                <span> Please, contact me through my </span>
                <Link
                  to="https://www.linkedin.com/in/vladyslav-chyhryn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>{" "}
                <span> or </span>
                <a href="mailto: chyhryn.vlad@gmail.com">E-mail</a>
                <span> to get the magic key 🔑 </span>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="max-w-lg mx-auto bg-white rounded shadow-lg mt-7 p-3"
              >
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`block w-full rounded border py-1 px-2 ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-400"
                        : "border-gray-300"
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="Enter the secret key"
                  />
                  {isButtonSet && !openNDA && (
                    <span>
                      It seems like the password doesn’t match. Just contact me
                      again, we will solve that quickly.
                    </span>
                  )}
                </div>

                <div className="text-center">
                  <button
                    className="bg-blue-500 rounded p-3 text-white"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
