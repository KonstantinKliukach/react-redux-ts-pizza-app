import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPizzaState } from 'context/redux/reducers/pizza';
import { loadPizzas } from 'context/redux/actions/pizza';
import { Flex } from 'rebass';
import Menu from 'components/menu';
import Card from './cards';

const Pizza: React.FC = () => {
  const { pizzas, isLoading } = useSelector(getPizzaState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pizzas) {
      dispatch(loadPizzas());
    }
  }, [dispatch, pizzas]);

  if (isLoading) {
    return <span>loading...</span>;
  }
  return (
    <>
      <Menu />
      <Flex flexWrap='wrap' flex={1}>
        {
          pizzas
            && Object.keys(pizzas).map((pizza) => <Card key={pizza} pizza={pizzas[Number(pizza)]} />)
        }
      </Flex>
    </>
  );
};

export default Pizza;
