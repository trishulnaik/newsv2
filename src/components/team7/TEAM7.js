import "./TEAM7.css";
import TEAMDescription from "./TEAMDescription";
const TEAM = () => {
  return (
    <div
      className="teampage"
      style={{
        width: "80%",
        margin: "15px auto",
        border: "1px solid black",
        boxShadow: "10px 5px 5px black",
        borderRadius: "5px",
      }}
    >
      <center>
        <h1>About Us</h1>
        <p>Meet the Team</p>
        <hr style={{ width: "50%" }}></hr>
      </center>
      <div className="TeamPerson">
        <TEAMDescription />
        <TEAMDescription />
        <TEAMDescription />
        <TEAMDescription />
      </div>
    </div>
  );
};
export default TEAM;
