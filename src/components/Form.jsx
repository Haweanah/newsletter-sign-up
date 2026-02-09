export default function Form () {
    return (
        <fieldset>
  <form action="">
    <label htmlFor="email">Email address</label>
    <input 
    placeholder='email@company.com'
    type="email" name="email" id="email" />
    <button type="submit">Subscribe to monthly newsletter</button>
  </form>
</fieldset>

    )
}