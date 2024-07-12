// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyDetails} = props
  const {title, amount, type} = historyDetails
  return (
    <li className="list-container">
      <div className="t-a-t-con">
        <p className="history-para-title">{title}</p>
        <p className="history-para-amount">{amount}</p>
        <p className="history-para-type">{type}</p>
        <button type="button" className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
