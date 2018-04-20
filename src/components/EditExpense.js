import React from 'react';

const EditExpense = (props) => {
    console.log(props);
    return (
        <div>
            EditExpensePage {props.match.params.id}
        </div>
    );
};
export default EditExpense;