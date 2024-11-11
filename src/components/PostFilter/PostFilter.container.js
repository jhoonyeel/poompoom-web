import React, { useState } from 'react';
import { useNavigatePath } from '../../hooks/useNavigatePath';
import PostFilterUI from './PostFilter.presenter';

const marks = {
  0: '0만원',
  1: '1만원',
  2: '2만원',
  3: '3만원',
  4: '4만원',
  5: '5만원',
  10: '10만원',
  20: '20만원',
  30: '30만원',
  40: '40만원',
  50: '50만원',
  51: '50만원 이상',
};

export default function PostFilter() {
  const [priceRange, setPriceRange] = useState([0, 50]);

  const navigatePath = useNavigatePath();

  return (
    <PostFilterUI marks={marks} priceRange={priceRange} setPriceRange={setPriceRange} navigatePath={navigatePath} />
  );
}
