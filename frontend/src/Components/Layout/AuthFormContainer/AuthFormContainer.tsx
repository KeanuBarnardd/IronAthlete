import React from "react";
import "./AuthFormContainer.scss";

export default function AuthFormContainer(title: string, subTitle: string, form: any) {
  return (
    <div className="login__background-container app__flex">
      <div className="login__main-container app__container-width">
        <div className="form__header-container">
          <div className="form__header-content">
            <h1>{title}</h1>
            <p className="p-text">{subTitle}</p>
          </div>
        </div>
        <div className="form__container">{form}</div>
      </div>
    </div>
  );
}
