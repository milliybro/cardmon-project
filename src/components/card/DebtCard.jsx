import React from "react";
import PropTypes from "prop-types"

const DebtCard = ({ id, name, deadline, phone, amount, children }) => {
  return (
    <div className="alert alert-info d-flex justify-content-between align-items-center">
      <div>
        <h3>
          {name} <span className="badge bg-success">{amount} $</span>
        </h3>
        <div>
          <time>{deadline}  </time>
            /  <span>{phone}</span>
        </div>
      </div>
      <p>{children}</p>
      <div>
        <button className="btn btn-primary me-3">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

DebtCard.propTypes = {
   id: PropTypes.string,
   name: PropTypes.string,
   deadline: PropTypes.string,
   phone: PropTypes.string,
   amount: PropTypes.number,
   description: PropTypes.node,
}

export default DebtCard;
