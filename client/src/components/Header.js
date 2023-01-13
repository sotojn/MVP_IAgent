import '../App.css';
import { RiLogoutBoxRLine, RiAccountCircleLine } from "react-icons/ri";


function Header() {


  return (
    <section className="row" style={{paddingTop: '20px', paddingBottom: '0px'}}>
      <div className="grid">
        <div className="col-1-3">
          <h1>I Agent Pro</h1>
        </div><aside className="col-2-3" style={{textAlign: 'right'}}>
        <div className="welcome"><h2>Welcome Joseph</h2></div>
        <div className="headerBttns"><h2>Account <RiAccountCircleLine style={{verticalAlign: 'middle'}}/></h2></div>
        <div className="headerBttns" style={{marginRight: '0px'}}><h2>Logout <RiLogoutBoxRLine style={{verticalAlign: 'middle'}}/></h2></div>
        </aside>
      </div>
    </section>
  );
}

export default Header;
