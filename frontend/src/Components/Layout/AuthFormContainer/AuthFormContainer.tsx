import React, { ReactNode } from "react";
import "./AuthFormContainer.scss";
import { MainLoader } from "../../Page/Common";

import { images } from "../../../Assets/Images/index";

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
        <div
          className="form__header-container"
          style={{
            backgroundImage: ` linear-gradient(to bottom, var(--black-color), rgba(253, 200, 253, 0)),
                url(${images.headerImg3})`,
          }}
        >
          <div className="form__header-content">{props.title}</div>
        </div>
        {props.loading && <MainLoader />}
        <div className="form__container">{props.form}</div>
      </div>
    </div>
  );
}
