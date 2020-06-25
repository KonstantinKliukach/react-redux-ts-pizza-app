import React from 'react';
import { Box } from 'rebass';

import { ReactComponent as EuroPic } from 'assets/icons/currency/euro.svg';
import { ReactComponent as DollarPic } from 'assets/icons/currency/dollar.svg';

import { useSelector, useDispatch } from 'react-redux';

import { getCurrencyState, Currency } from 'context/redux/reducers/currency';
import { setCurrency } from 'context/redux/actions/currency';

const CurrencySwitcher: React.FC = () => {
  const { currency } = useSelector(getCurrencyState);
  const dispatch = useDispatch();

  const handleThemeSwitch = () => {
    const nextTheme = currency === Currency.dollar ? Currency.euro : Currency.dollar;
    dispatch(setCurrency(nextTheme));
  };

  return (
    <Box onClick={handleThemeSwitch} sx={{ cursor: 'pointer' }}>
      {
        currency === Currency.euro
          ? <EuroPic width={'25px'} height='25px' fillOpacity={1} fill={'var(--text-color)'} />
          : <DollarPic width={'25px'} height='25px' fillOpacity={1} fill={'var(--text-color)'} />
      }
    </Box>
  );
};

export default CurrencySwitcher;
