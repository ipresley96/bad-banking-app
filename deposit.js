function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [balance, setBalance]     = React.useState('');
  const ctx = React.useContext(UserContext);  



function updateBalance(){
  if (!validate(balance, 'password')) return;
  ctx.users.push({balance:100});
  setShow(false);
}    

  return (
    <Card
      bgcolor="primary"
      header="Balance"
      status={balance}
      body={show ? (  
              <>
              Balance : 
              <br />
              <br />
              Deposit 
              <br />
              <input type="input" className="form-control" id="name" placeholder="Enter value" value={balance} onChange={e => setName(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={updateBalance}>Submit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}
