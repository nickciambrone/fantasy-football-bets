import React from "react";
import { connect } from "react-redux";
import "./view-lines.styles.scss";
import { selectUserTotalProjected } from "../../redux/lineup/lineup.selectors.js";
import { selectOpponentTotalProjected } from "../../redux/lineup/lineup.selectors.js";
import { Link } from "react-router-dom";
import BetSlip from '../../components/bet-slip/bet-slip.component'
import {addBet} from '../../redux/action/action.actions'
const ViewLines = ({
  userTeam,
  opponentTeam,
  selectUserTotalProjected,
  selectOpponentTotalProjected,
  difference,
  total,
  addBet
}) => (
  <div className="view-lines">
    <div className="view-lines-content">
      <div className="left">
        <div className="edit-lineup-button-container">
          <Link to="/set-lineup">
            {" "}
            <a class="previous">&laquo; Edit Lineup</a>{" "}
          </Link>
        </div>
        <div className="lineups" style={{ display: "flex" }}>
          <div className="view-lines-user-team">
            <table className="team">
              {Object.keys(userTeam).map((position, i) => (
                <tr className={(i + 1) % 2 === 0 ? "dark" : ""}>
                  <td>
                    {userTeam[position].name} &nbsp; &nbsp;
                    {userTeam[position].position}&nbsp;&nbsp;
                    {userTeam[position].team}
                  </td>
                  <td>
                    {Math.round(100 * userTeam[position].projectedPoints) / 100}
                  </td>
                </tr>
              ))}
              <tr>
                <td>User Projected Total:</td>
                <td> {Math.round(selectUserTotalProjected * 100) / 100}</td>
              </tr>
            </table>
          </div>
          <div className="positions-for-teams-container">
            <table className="positions-for-teams">
              {Object.keys(userTeam).map((position, i) => (
                <tr>
                  <td className="position-view-lines">{position}</td>
                </tr>
              ))}
            </table>
          </div>
          <div className="view-lines-opponent-team">
            <table className="team">
              {Object.keys(opponentTeam).map((position, i) => (
                <tr className={(i + 1) % 2 === 0 ? "dark" : ""}>
                  <td>
                    {opponentTeam[position].name} &nbsp;&nbsp;
                    {opponentTeam[position].position}&nbsp;&nbsp;
                    {opponentTeam[position].team}
                  </td>
                  <td>
                    {Math.round(100 * opponentTeam[position].projectedPoints) /
                      100}
                  </td>
                </tr>
              ))}
              <tr>
                <td>Opponent Projected Total:</td>
                <td classname="total">
                  {" "}
                  {Math.round(selectOpponentTotalProjected * 100) / 100}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="right" style={{ paddingTop: "10px", textAlign: "left" }}>
        <div
          className="view-lines-card"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "4px",
            backgroundColor: "#121212",
            padding: "5px",
            color: "white",
          }}
        >
          <div
            className="header-view-lines"
            style={{ display: "flex", width: "100%" }}
          >
            <div style={{ width: "35%" }}></div>
            <div style={{ width: "60%", display: "flex", textAlign: "center" }}>
              <div style={{ width: "33%" }}>SPREAD</div>
              <div style={{ width: "33%" }}>TOTAL</div>
              <div style={{ width: "33%" }}>MONEYLINE</div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              className="teams-view-lines"
              style={{ display: "flex", flexDirection: "column", width: "35%" }}
            >
              <span
                style={{ padding: "7px", height: "30px", marginBottom: "3px" }}
              >
                User{" "}
              </span>
              <span style={{ padding: "7px", height: "30px" }}>Opponent </span>
            </div>
            <div
              className="lines-view-lines"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "60%",
              }}
            >
              <span
                className="click-lines-button"
                style={{ marginBottom: "3px" }}
                id = 'su'
                onClick = {(e)=>addBet({userId:'',id:e.target.id, type:'straight', amount:''})}
              >
                {difference > 0
                  ? "+" + Math.round(difference * 100) / 100
                  : Math.round(difference * 100) / 100}
              </span>
              <span
                className="click-lines-button"
                style={{ marginBottom: "3px" }}
                id='o'
                onClick = {(e)=>addBet({userId:'',id:e.target.id, type:'straight', amount:''})}

              >
                O {Math.round(total * 100) / 100}
              </span>
              <span
                className="click-lines-button"
                style={{ marginBottom: "3px" }}
                id='mu'
                onClick = {(e)=>addBet({userId:'',id:e.target.id, type:'straight', amount:''})}

              >
              {difference < -20
                ? "-800"
                : difference < -10
                ? "-300"
                : difference < 0
                ? "-170"
                : difference < 10
                ? "+170"
                : difference < 20
                ? "+300"
                : "+1000"}
              </span>
              <span className="click-lines-button" id = 'so' onClick = {(e)=>addBet({userId:'',id:e.target.id, type:'straight', amount:''})}
              >
                {difference > 0
                  ? Math.round(difference * 100) / -100
                  : "+"+Math.round(difference * 100) / -100}
              </span>
              <span id = 'u' className="click-lines-button"
              onClick = {(e)=>addBet({userId:'',id:e.target.id, type:'straight', amount:''})}

              >
                U {Math.round(total * 100) / 100}
              </span>
              <span id = 'mo' className="click-lines-button"
              onClick = {(e)=>addBet({userId:'',id:e.target.id, type:'straight', amount:''})}
              >
              {difference < -20
                ? "+800"
                : difference < -10
                ? "+300"
                : difference < 0
                ? "+170"
                : difference < 10
                ? "-170"
                : difference < 20
                ? "-300"
                : "-1000"}
              </span>
            </div>
          </div>
        </div>
        <BetSlip/>
     
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  userTeam: state.lineup.userTeam,
  opponentTeam: state.lineup.opponentTeam,
  selectUserTotalProjected: selectUserTotalProjected(state),
  selectOpponentTotalProjected: selectOpponentTotalProjected(state),
  difference:
    selectOpponentTotalProjected(state) - selectUserTotalProjected(state),
  total: selectOpponentTotalProjected(state) + selectUserTotalProjected(state),
});
const mapDispatchToProps = (dispatch) => ({
  addBet: (e) => dispatch(addBet(e))
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewLines);
