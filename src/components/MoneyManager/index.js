import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const selectType = transactionTypeOptions.find(
      eachTran => eachTran.optionId === optionId,
    )
    const {displayText} = selectType
    const newTransactionList = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransactionList],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  addTitle = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  addAmount = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onAddType = event => {
    this.setState({
      optionId: event.target.vlaue,
    })
  }

  render() {
    const {transactionList} = this.state
    const {titleInput, amountInput, optionId} = this.state
    return (
      <div className="bg-container">
        <div className="title-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your <span className="span">MoneyManager</span>
          </p>
        </div>
        <MoneyDetails />
        <div className="bottom-container">
          <div className="transaction-container">
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <form className="form-container" onSubmit={this.addTransaction}>
              <label className="label-title" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                className="title-input"
                placeholder="TITLE"
                onChange={this.addTitle}
                value={titleInput}
              />
              <label className="label-title" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                className="title-input"
                placeholder="AMOUNT"
                onChange={this.addAmount}
                value={amountInput}
              />
              <label className="label-title" htmlFor="type">
                TYPE
              </label>
              <select
                className="title-input"
                id="type"
                onChange={this.onAddType}
                value={optionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="transaction-history-container">
            <h1 className="history-heading">History</h1>
            <ul className="ul-con">
              <li className="t-a-t-container">
                <div className="sample-con">
                  <p className="history-para">Title</p>
                  <p className="history-para1">Amount</p>
                  <p className="history-para2">Type</p>
                </div>
              </li>
              {transactionList.map(eachHistory => (
                <TransactionItem
                  historyDetails={eachHistory}
                  key={eachHistory.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
