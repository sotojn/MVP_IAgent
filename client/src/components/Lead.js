import '../App.css';
import LeadList from './LeadList';
import { FaPhone, FaTrashAlt } from "react-icons/fa";

function Lead({ leads }) {

  return (
    <section className="row" style={{paddingTop: '0px'}}>
      <div className="grid">
        <section>
          <div className="col-1-3"><h4>0 Selected</h4></div><aside className="col-2-3" style={{textAlign: 'right'}}>
            <div className="btnAction"><h4>Run Calls <FaPhone style={{fontSize: '.8em'}}/></h4></div>
            <div className="btnAction"><h4>Delete <FaTrashAlt style={{fontSize: '.8em'}}/></h4></div>
          </aside>
        </section>

        <section style={{paddingTop: '10px', paddingBottom: '5px'}}>
          <div className="columnBar col-1-20">
          <input type="checkbox" id="selectAll" name="allSelect" value="all"></input>
          </div><aside className="columnBar col-3-20">
            <h4>Created</h4>
           </aside><aside className="columnBar col-3-20">
            <h4>First Name</h4>
           </aside><aside className="columnBar col-3-20">
            <h4>Last Name</h4>
           </aside><aside className="columnBar col-3-20">
            <h4>Phone #</h4>
           </aside><aside className="columnBar col-1-4">
            <h4>Address</h4>
           </aside><aside className="columnBar col-1-10">
           <h4>Recent Log</h4>
           </aside>
        </section>

        <section>
          <ul className="listContainer">
          {leads.map(lead =>
          <LeadList leadItem={lead}/>
          )}
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Lead;