
import Info from './Info'

const ControlledInfo = () => {
    
    const lang=[
        {id:1,name:"java"},
        {id:2,name:"javascript"},
        {id:3,name:"kotlin"},
        {id:4,name:"python"},
        {id:5,name:"c"},
      ];
  return (
    <div>
        <Info lang={lang} />
    </div>
  )
}

export default ControlledInfo