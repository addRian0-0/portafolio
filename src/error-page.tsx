import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import "./styles/error-page.scss";
import { useTranslation } from "react-i18next";

export default function ErrorPage() {

    const { t } = useTranslation("global");

    const error = useRouteError();
    let errorMessage: string;
    let errorStatus: number = 400;

    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.error?.message || error.statusText;
        errorStatus = error.status;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        errorMessage = 'Unknown error';
    }


    return (
        <>
            <div className="error-page" >
                <h4> {errorStatus}</h4>
                <div className="container">
                    <p className="error-t">
                        <span>Oops!  </span>
                        {t("errors.error-page")}
                    </p>
                    <p className='error-msg'>
                        <i>{errorMessage}</i>
                    </p>
                    <button>
                        <a href="/">Go to homepage</a>
                    </button>
                </div>
            </div>
        </>
    );
}