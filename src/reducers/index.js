import { combineReducers } from 'redux'
import formVisibleReducer from './form-visible-reducer'
import ticketListReducer from './ticket-list-reducer'

const rootReducer = combineReducers(
  {
    formVisibleOnPage: formVisibleReducer,
    masterTicketList: ticketListReducer,
  }
)

export default rootReducer
