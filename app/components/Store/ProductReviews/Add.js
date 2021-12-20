/**
 *
 * Add
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import SelectOption from '../../Common/SelectOption';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

const recommedableSelect = [
  { value: 1, label: 'Yes' },
  { value: 0, label: 'No' }
];

const Add = props => {
  const { reviewFormData, reviewChange, reviewFormErrors, addReview } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addReview();
  };

  return (
    <div className='bg-white p-4 box-shadow-primary add-review'>
      <form onSubmit={handleSubmit} noValidate>
        <h2 className='mb-3'>زیادکردنی هەڵسەنگاندن</h2>
        <Row>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              error={reviewFormErrors['title']}
              label={'سەردێڕ'}
              name={'title'}
              placeholder={'سەردێڕ  بنووسە'}
              value={reviewFormData.title}
              onInputChange={(name, value) => {
                reviewChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'textarea'}
              error={reviewFormErrors['review']}
              label={'تێبینی '}
              name={'review'}
              placeholder={'تێبینی بەجێبێڵە'}
              value={reviewFormData.review}
              onInputChange={(name, value) => {
                reviewChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'stars'}
              error={reviewFormErrors['rating']}
              label={'هەڵسەنگاندن'}
              name={'rating'}
              value={reviewFormData.rating}
              onInputChange={(name, value) => {
                reviewChange(name, value);
              }}
            />
          </Col>
        
        </Row>
        <div className='mt-4'>
          <Button type='submit' text='ناردنی هەڵسەنگاندن' />
        </div>
      </form>
    </div>
  );
};

export default Add;
