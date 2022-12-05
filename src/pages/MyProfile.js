import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function MyProfile(props) {
    const navigate=useNavigate()

  const btnLogOut = () => {
    props.dispatch({
      type: "out_login",
    });
    window.location.replace('#/login')
  };
  return (
      <div className="my-3 p-3 bg-body rounded shadow-sm text-center d-flex flex-column justify-content-center align-items-center">
        <h2 className="border-bottom pb-2 mb-0 display-5">Members Settings</h2>
        <div className="d-flex text-muted pt-3">
          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <button className="btn btn-success" onClick={btnLogOut}>
              Stock Book List
            </button>
          </p>
        </div>
        <div className="d-flex text-muted pt-3">

          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <button className="btn btn-success" onClick={btnLogOut}>
              Stock Book List
            </button>
          </p>
        </div>
        <div className="d-flex text-muted pt-3">
           

          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <button className="btn btn-success" onClick={btnLogOut}>
              Members
            </button>
          </p>
        </div>
        <small className="d-block text-end mt-3">
          <button
            className="btn btn-danger d-block text-end mt-3 "
            onClick={btnLogOut}
          >
            Log Out
          </button>
        </small>
      </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(MyProfile);
