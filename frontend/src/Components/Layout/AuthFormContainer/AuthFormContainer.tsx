import React, { ReactNode } from "react";
import "./AuthFormContainer.scss";
import { MainLoader } from "../../Page/Common";

interface Props {
  title: ReactNode;
  subtitle: string;
  form: ReactNode;
  loading: boolean;
}

export default function AuthFormContainer(props: Props) {
  return (
    <div className="auth__background-container app__flex">
      <div className="auth__main-container app__container-width">
        <div className="form__header-container">
          <div className="form__header-content">
            {props.title}
            <p className="sub-title p-text">{props.subtitle}</p>
          </div>
        </div>
        {props.loading && <MainLoader />}
        <div className="form__container">{props.form}</div>
      </div>
    </div>
  );
}
