/*
 *
 * Customer
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import SubPage from '../../components/Manager/SubPage';
import OrderList from '../../components/Manager/OrderList';
import OrderSearch from '../../components/Manager/OrderSearch';
import NotFound from '../../components/Common/NotFound';
import LoadingIndicator from '../../components/Common/LoadingIndicator';

class Customer extends React.PureComponent {
  componentDidMount() {
    this.props.fetchOrders();
  }

}

const mapStateToProps = state => {
  return {
    user: state.account.user,
    orders: state.order.searchedOrders,
    isLoading: state.order.isLoading,
    isOrderAddOpen: state.order.isOrderAddOpen
  };
};

export default connect(mapStateToProps, actions)(Customer);
