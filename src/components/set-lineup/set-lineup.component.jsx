import React from "react";
import { addPlayer } from "./set-lineup.utils";
import Pill from "../pill/pill.component";
import "./set-lineup.styles.scss";
import players from "./playerData";

import Rosters from "../rosters/rosters.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";
import { Form } from "react-bootstrap";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectUserTeam } from "../../redux/lineup/lineup.selectors.js";
import { selectOpponentTeam } from "../../redux/lineup/lineup.selectors.js";
import PlayerOptions from "../player-options/player-options.component";
import { changePosition } from "../../redux/lineup/lineup.actions";
import { changeTeam } from "../../redux/lineup/lineup.actions";
import { setTeamsFull } from "../../redux/lineup/lineup.actions";
import { Link } from "react-router-dom";

class SetLineup extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const {
      userTeam,
      opponentTeam,
      team,
      searchField,
      teamsFull,
      positions,
      positionSelected,
      changeTeam,
      addPlayer,
    } = this.props;
    // let filteredPlayers = players.filter((ele, ind) => positionSelected==='All' ? ele.name.length>1 : ele.position === positionSelected)
    console.log(team);

    let filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    if (positionSelected === "All") {
      filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        && (positions.includes(player.position) || player.position=="DE" && positions.includes('DEF'))

      );
    } else {
      filteredPlayers = players
        .filter((player) =>
          player.name
            .toLowerCase()
            .includes(this.state.searchField.toLowerCase())
            && (positions.includes(player.position) || player.position=="DE" && positions.includes('DEF'))
        )
        .filter(
          (player) =>
            player.position === positionSelected ||
            (player.position == "DE" && positionSelected == "DEF")
        );
    }

    return (
      <div className="set-lineup">
        <div className="chose-team-and-rosters">
          <div className="choose-team">
            <div
              id="my-team"
              className={`${
                team === "user" ? "active" : ""
              } lineup-choice my-team`}
              onClick={(e) => changeTeam(e)}
            >
              My Team
            </div>
            <div
              id="opponent"
              className={`${
                team === "opponent" ? "active" : ""
              } lineup-choice opponent`}
              onClick={(e) => changeTeam(e)}
            >
              Opposing Team
            </div>
          </div>
          <div className="roster">
            <Rosters
              team={team}

              // dropPlayer={dropPlayer}
            />
          </div>
        </div>
<div className = 'player-options-container'>
        <PlayerOptions
          filteredPlayers={filteredPlayers}
          positions={positions}
          positionSelected={positionSelected}
          handleChange={this.handleChange}
        />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userTeam: state.lineup.userTeam,
  opponentTeam: state.lineup.opponentTeam,
  team: state.lineup.team,
  searchField: state.lineup.searchField,
  teamsFull: state.lineup.teamsFull,
  positions: state.lineup.positions,
  positionSelected: state.lineup.positionSelected,
});
const mapDispatchToProps = (dispatch) => ({
  changeTeam: (e) => dispatch(changeTeam(e.target.id)),
  setTeamsFull: (item) => dispatch(setTeamsFull),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetLineup);
