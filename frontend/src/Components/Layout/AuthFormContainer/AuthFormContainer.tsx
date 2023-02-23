import React from "react";
import "./AuthFormContainer.scss";
import { MainLoader } from "../../Page/Common";
export default function AuthFormContainer(loading: any , title: any, subTitle: string, form: any) {
  return (
    <div className="login__background-container app__flex">
      <div className="login__main-container app__container-width">
        <div className="form__header-container">
          <div className="form__header-content">
            <h1>{title}</h1>
            <p className="p-text">{subTitle}</p>
          </div>
        </div>
        {loading && <MainLoader />}
        <div className="form__container">{form}</div>
      </div>
    </div>
  );
}
