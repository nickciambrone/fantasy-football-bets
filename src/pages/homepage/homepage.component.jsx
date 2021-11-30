import CustomButton from "../../components/custom-button/custom-button.component";
import { Link } from "react-router-dom";
import "./homepage.styles.scss";
const HomePage = () => {
  return (
    <div className="homepage">
      <div class="jumbotron">
        <h1 class="display-4">WIN MONEY BETTING ON CUSTOM FANTASY MATCHUPS</h1>
        <p class="lead">Sign up, or set your lineup first</p>
        <hr class="my-4" />
        <Link className="set-lineup-link" to="/set-lineup">
          Set lineup and view odds
        </Link>
        <p class="lead">
          <CustomButton>Sign Up</CustomButton>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
