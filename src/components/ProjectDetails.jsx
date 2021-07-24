import React from "react";
import "./componentStyle/pDetails.css";
const ProjectDetails = () => {
  return (
    <div className="container p-Details">
      <h1 className="pTitle">Project Title</h1>
      <p className="pro-description">
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged
      </p>
      <div className="CompanyDetails">
        <div className="Pro-Details">
          <h4 className="table-com">Details Of Company</h4>
          <table>
            <tr>
              <td>Company Name</td>
              <td>:</td>
              <td> American Express</td>
            </tr>
            <tr>
              <td>Developer Name</td>
              <td>:</td>
              <td>G.Prasad Raj</td>
            </tr>
            <tr>
              <td>Project value</td>
              <td>:</td>
              <td>1,20,000</td>
            </tr>
            <tr>
              <td>Agreement</td>
              <td>:</td>
              <td>Some text regarding</td>
            </tr>
            <tr>
              <td>Sample Work</td>
              <td>:</td>
              <td>Link Of the Work</td>
            </tr>
          </table>
          <div className="Sign">
            <p>Signature :</p>
            <i> G.prasad raj</i>
          </div>
        </div>
        <div className="AgrimentDetails">
          <h4>
            <i>Agreement</i>
          </h4>
          <table>
            <tr>
              <td>Starting date:</td>
              <td>25/07/2021</td>
            </tr>
            <tr>
              <td>End date:</td>
              <td>5/09/2021</td>
            </tr>
          </table>
          <div className="demo">
            <img
              className="pro-demo"
              src="https://tse4.mm.bing.net/th?id=OIP.25JHGFWeseZYJ0TGArIczAHaEK&pid=Api&P=0&w=294&h=166"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
