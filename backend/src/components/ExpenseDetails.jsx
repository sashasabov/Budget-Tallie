import React from "react";

const ExpenseDetails = ({ expense, deleteEntry }) => {
  return (
    <div>
      <div>
        <h2>{expense.title}</h2>
      </div>

      <div>
        {expense.cost.length === 0 ? (
          <p style={{ color: "lightgrey" }}>No Entries</p>
        ) : (
          <ul style={{ listStyleType: "none" }}>
            {expense.cost.map((e) => {
              return (
                <li key={e._id} style={{ marginBottom: "1rem" }}>
                  {"$" +
                    e.amount +
                    " - " +
                    new Date(e.createdAt).toLocaleDateString() +
                    "   "}
                  <button onClick={() => deleteEntry(expense._id, e._id)}>X</button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <hr />
    </div>
  );
};

export default ExpenseDetails;
