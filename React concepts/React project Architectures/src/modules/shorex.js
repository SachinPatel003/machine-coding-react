import React from 'react';
import { Route } from 'react-router-dom';
import { ShorexDetail } from '../components/shorex/shorex-detail';
import { ShorexListing } from '../components/shorex/shorex-listing';

function ShoreX() {
  return (
    <>
      <Route exact path="/shorex/listing" component={ShorexListing} />
      <Route path="/shorex/details" component={ShorexDetail} />

      {/* <Route path="*">
        <h1>User</h1>
      </Route> */}

      {/* <Redirect to="/shorex/listing" /> */}
    </>
  )
}

export { ShoreX }
