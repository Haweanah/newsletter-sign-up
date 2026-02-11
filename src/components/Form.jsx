export default function Form (props) {
    return (
        
  <form onSubmit={props.handleSubmit} noValidate>
    <label className="email"
    htmlFor="email">Email address</label>
   
   
    <input
    className="input"
    placeholder='email@company.com'
    type="email" name="email" id="email"
    value={props.email}
    onChange={(e) => props.setEmail(e.target.value)
    }
    />

    {props.error && <p className="error">{props.error}</p>}

    <input type="submit" value="Subscribe to monthly newsletter" />
    {props.success && <p className="success">Subscription successful</p>}
  </form>
    )
}