export default function Form () {
    return (
        
  <form action="">
    <label className="email"
    htmlFor="email">Email address</label>
    <input
    className="input"
    placeholder='email@company.com'
    type="email" name="email" id="email" />
    <input type="submit" value="Subscribe to monthly newsletter" />
  </form>
    )
}