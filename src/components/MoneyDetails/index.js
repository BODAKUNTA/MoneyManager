// Write your code here
import './index.css'

const MoneyDetails = props => {
  return (
    <div className="balance-container">
      <div className="total-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-img"
        />
        <div className="inside-balance-container">
          <p className="balance-para">Your Balance</p>
          <p className="rupees-para">Rs: 40000</p>
        </div>
      </div>
      <div className="total-balance-container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="balance-img"
        />
        <div className="inside-balance-container">
          <p className="balance-para">Your Income</p>
          <p className="rupees-para">Rs: 40000</p>
        </div>
      </div>
      <div className="total-balance-container2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="balance-img"
        />
        <div className="inside-balance-container">
          <p className="balance-para">Your Expenses</p>
          <p className="rupees-para">Rs: 40000</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
