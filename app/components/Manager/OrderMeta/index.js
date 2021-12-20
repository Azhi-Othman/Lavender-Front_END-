/**
 *
 * OrderMeta
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import { formatDate } from '../../../helpers/date';
import Button from '../../Common/Button';
import { ArrowBackIcon } from '../../Common/Icon';

const OrderMeta = props => {
  const { order, cancelOrder, onBack } = props;

  const renderMetaAction = () => {
    const isNotDelivered =
      order.products.filter(i => i.status === 'Delivered').length < 1;

    if (isNotDelivered) {
      return <Button size='sm' text='پەشیمانبوونەوە لە داواکاری' onClick={cancelOrder} />;
    }
  };

  return (
    <div className='order-meta'>
      <div className='d-flex align-items-center justify-content-between mb-3 title'>
        <h2 className='mb-0'>وردەکاری داواکارییەکان</h2>
        <Button
          variant='link'
          icon={<ArrowBackIcon />}
          size='sm'
          text='گەڕانەوە بۆ داواکارییەکان'
          onClick={onBack}
        ></Button>
      </div>

      <Row>
        <Col xs='12' md='8'>
          <Row>
            <Col xs='4'>
              <p className='one-line-ellipsis'>پێناسی داواکاری</p>
            </Col>
            <Col xs='8'>
              <span className='order-label one-line-ellipsis'>{` ${order._id}`}</span>
            </Col>
          </Row>
          <Row>
            <Col xs='4'>
              <p className='one-line-ellipsis'>کاتی داواکاری</p>
            </Col>
            <Col xs='8'>
              <span className='order-label one-line-ellipsis'>{` ${formatDate(
                order.created
              )}`}</span>
            </Col>
          </Row>
        </Col>
        <Col xs='12' md='4' className='text-left text-md-right'>
          {renderMetaAction()}
        </Col>
      </Row>
    </div>
  );
};

export default OrderMeta;
