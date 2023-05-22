import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { ReactComponent as BackArrow } from "../assets/backArrow.svg";

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
        <div
          className={`modal-content ${
            isButtonSet && !openNDA && "modal-content-width"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-body">
            <div className="bg-blue-300 min-w-screen min-h-screen overflow-x-hidden p-16">
              <div>
                <p className="font-font2 text-[20px] leading-[32px] text-dark2 mb-3">
                  🔒 Moonstone bank{" "}
                </p>
                <p className="font-font2 text-[20px] leading-[28px] text-dark2">
                  I’m willing to show you the case and share you the details,
                  but the following project contains sensitive data.
                </p>
                <p className="mt-3 mb-6">
                  <span className="caption15">
                    Please, contact me through my{" "}
                  </span>
                  <Link
                    to="https://www.linkedin.com/in/vladyslav-chyhryn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caption15 !text-dark2 underlineText"
                  >
                    LinkedIn
                  </Link>{" "}
                  <span className="caption15"> or </span>
                  <a
                    href="mailto: chyhryn.vlad@gmail.com"
                    className="caption15 !text-dark2 underlineText"
                  >
                    E-mail
                  </a>
                  <span className="caption15"> to get the magic key 🔑 </span>
                </p>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="max-w-lg mx-auto rounded"
              >
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`block w-full bg-mainLight rounded border border-solid border-[#D5D5D5] py-4 px-6 caption16 ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-400"
                        : "border-gray-300"
                    } ${isButtonSet && !openNDA && "mb-2 border-red1"}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="Enter the secret key"
                  />
                  {isButtonSet && !openNDA && (
                    <span className="mt-2 text-red1">
                      It seems like the password doesn’t match. Just contact me
                      again, we will solve that quickly.
                    </span>
                  )}
                </div>

                <div className="bg-gray h-px opacity-25 mb-4"></div>

                <div className="flex flex-row justify-between items-center">
                  <div
                    onClick={() => props.onClose()}
                    className="flex flex-row hover:cursor-pointer"
                  >
                    <BackArrow />
                    <span className="ml-2 caption17 text-[#7B7B7B]">Back</span>
                  </div>
                  <button
                    className="bg-blue-500 rounded p-3 text-white"
                    type="submit"
                  >
                    <span className="caption17 !text-[#2B2B2B] opacity-50 linkHover">
                      Submit
                    </span>
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
