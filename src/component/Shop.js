import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function Shop() {
  const dispatch = useDispatch();
//   const { depositMoney, withdrawMoney } = bindActionCreators(
//     actionCreators,
//     dispatch
//   );

  return (
    <>
      <h2 className="d-flex justify-content-center my-2">
        Deposit/Withdraw Money
      </h2>
      <div className="d-flex justify-content-center align-self-center my-2">
        <div className="align-self-center">
          <button
            className="btn mx-2  btn-primary"
            onClick={() => dispatch(actionCreators.withdrawMoney(100))}
          >
            -
          </button>
          Update balance
          <button
            className="btn mx-2  btn-primary"
            onClick={() => dispatch(actionCreators.depositMoney(100))}
          >
            +
          </button>
          {/* <button
            className="btn mx-2  btn-primary"
            onClick={() => dispatch(actionCreators.withdrawMoney(100))}
          >
            -
          </button>
          Update balance
          <button
            className="btn mx-2  btn-primary"
            onClick={() => dispatch(actionCreators.depositMoney(100))}
          >
            +
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Shop;
