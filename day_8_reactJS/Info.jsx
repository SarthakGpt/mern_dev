
function Info(props) {
    let {lang}=props;
  return (
    <div>
        <h1>Top Programming Languages</h1>
        {lang.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))}
    </div>
  )
}

export default Info