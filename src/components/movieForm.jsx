import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const MovieForm = () => {
  let params = useParams();
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div>
      <h1>Movie Form {params.id} </h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/" + location.search, { replace: true });
        }}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
