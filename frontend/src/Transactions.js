import React, { useEffect, useState } from 'react';
import { getTransactions } from './api'; // Adjust path if needed

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const data = await getTransactions();
            if (data && data.transactions) {
                setTransactions(data.transactions); // Update state with fetched data
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="container mt-5">
          <h1 className="mb-4">Transactions</h1>
          <ul className="list-group">
            {transactions.map((transaction, index) => (
              <li className="list-group-item" key={index}>
                {transaction.description} - ${transaction.amount}
              </li>
            ))}
          </ul>
        </div>
      );
      
};

export default Transactions;
