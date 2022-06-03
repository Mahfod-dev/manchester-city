import { withRouter } from "../../HOC/WithRouter";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import { logout } from "../../Utils/Firebase";
import { showToastError } from "../../Utils/Tools";

const AdminNav = (props) => {
  const link = [
    {
      title: "Matches",
      linkTo: "/admin_matches",
    },
    {
      title: "Players",
      linkTo: "/admin_players",
    },
  ];

  const renderLink = link.map((link, index) => {
    return (
      <Link key={index} to={link.linkTo}>
        <ListItem button className="admin_nav_link">
          {link.title}
        </ListItem>
      </Link>
    );
  });

  const logoutNav = () => {
    logout();
    showToastError("Good Bye");
  };

  return (
    <div>
      {renderLink}
      <ListItem onClick={() => logoutNav()} button className="admin_nav_link">
        Log out
      </ListItem>
    </div>
  );
};
export default withRouter(AdminNav);
