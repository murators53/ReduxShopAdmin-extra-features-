import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Admin(props) {
    const navigate=useNavigate()

  const btnLogOut = () => {
    props.dispatch({
      type: "out_login",
    });
    navigate('#/login')
  };
  return (
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h2 className="border-bottom pb-2 mb-0 display-5">Members Settings</h2>
        <div className="d-flex text-muted pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff" />
            <text x="50%" y="50%" fill="#007bff" dy=".3em">
              32x32
            </text>
          </svg>

          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <button className="btn btn-success" onClick={btnLogOut}>
              Stock Book List
            </button>
          </p>
        </div>
        <div className="d-flex text-muted pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#e83e8c" />
            <text x="50%" y="50%" fill="#e83e8c" dy=".3em">
              32x32
            </text>
          </svg>

          <p className="pb-3 mb-0 small lh-sm border-bottom">
            <button className="btn btn-success" onClick={btnLogOut}>
              Stock Book List
            </button>
          </p>
        </div>
        <div className="d-flex text-muted pt-3">
          <svg
            className="bd-placeholder-img flex-shrink-0 me-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#6f42c1" />
            <text x="50%" y="50%" fill="#6f42c1" dy=".3em">
              32x32
            </text>
          </svg>

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

export default connect(mapStateToProps)(Admin);
