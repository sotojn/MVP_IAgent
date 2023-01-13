import '../App.css';

function LeadList({ leadItem }) {


  return (

      <li className="mainList">
      <div style={{paddingTop: '12px'}}>
        <div className="col-1-20">
          <input type="checkbox" id="selectAll" name="allSelect" value="all"></input>
          </div><aside className="col-3-20">
            <h5>{leadItem.date}</h5>
           </aside><aside className="col-3-20">
            <h5>{leadItem.fName}</h5>
           </aside><aside className="col-3-20">
            <h5>{leadItem.lName}</h5>
           </aside><aside className="col-3-20">
            <h5>{leadItem.phone}</h5>
           </aside><aside className="col-1-4" style={{overflow: 'hidden'}}>
            <h5>{leadItem.address}</h5>
           </aside><aside className="col-1-10">
           <h5>{leadItem.recent}</h5>
           </aside>
        </div>
      </li>
  );
}

export default LeadList;