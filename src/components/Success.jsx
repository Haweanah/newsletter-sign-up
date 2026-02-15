import successIcon from "../images/icon-success.svg"

export default function Success({ email, setSuccess }) {
  return (





    <div className="success-page">
        <img src={successIcon} alt="subscribtion success icon" />
      <h1>Thanks for subscribing!</h1>

      <p>
        A confirmation email has been sent to <strong>{email}</strong>.
        Please open it and click the button inside to confirm your subscription.
      </p>

      <button onClick={() => setSuccess(false)}
        className={Success ? "success-button" : ""}
        >
        Dismiss message
      </button>
    </div>
  );
}
 