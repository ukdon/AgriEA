import "./widgetLg.css";

export default function WidgetLg() {

  const Button = ({type}) =>{
     return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
       <h3 className="widgetLgTitle">Latest transactions</h3>
       <table className="widgetLgTable">
         <tr className="widgetLgTr">
           <th className="widgetLgTh">Customer</th>
           <th className="widgetLgTh">Date</th>
           <th className="widgetLgTh">Amount</th>
           <th className="widgetLgTh">Status</th>
         </tr>
         <tr className="widgetLgTr">
           <td className="widgetLgUser">
              <img src="https://ewcd8sqg2xp.exactdn.com/wp-content/uploads/2021/04/about-us-photo-1-scaled.jpg?strip=all&lossy=1&w=639&ssl=1" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Alhaji Falalu</span>
           </td>
           <td className="widgetLgDate">2 Jun 2021</td>
           <td className="widgetLgAmount">$122.22</td>
           <td className="widgetLgStatus"><Button type="Approved"/></td>
         </tr>
         <tr className="widgetLgTr">
           <td className="widgetLgUser">
              <img src="https://ewcd8sqg2xp.exactdn.com/wp-content/uploads/2021/04/about-us-photo-1-scaled.jpg?strip=all&lossy=1&w=639&ssl=1" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Alhaji Falalu</span>
           </td>
           <td className="widgetLgDate">2 Jun 2021</td>
           <td className="widgetLgAmount">$122.22</td>
           <td className="widgetLgStatus"><Button type="Declined"/></td>
         </tr>
         <tr className="widgetLgTr">
           <td className="widgetLgUser">
              <img src="https://ewcd8sqg2xp.exactdn.com/wp-content/uploads/2021/04/about-us-photo-1-scaled.jpg?strip=all&lossy=1&w=639&ssl=1" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Alhaji Falalu</span>
           </td>
           <td className="widgetLgDate">2 Jun 2021</td>
           <td className="widgetLgAmount">$122.22</td>
           <td className="widgetLgStatus"><Button type="Pending"/></td>
         </tr>
         <tr className="widgetLgTr">
           <td className="widgetLgUser">
              <img src="https://ewcd8sqg2xp.exactdn.com/wp-content/uploads/2021/04/about-us-photo-1-scaled.jpg?strip=all&lossy=1&w=639&ssl=1" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Alhaji Falalu</span>
           </td>
           <td className="widgetLgDate">2 Jun 2021</td>
           <td className="widgetLgAmount">$122.22</td>
           <td className="widgetLgStatus"><Button type="Approved"/></td>
         </tr>
       </table>
    </div>
  );
}
