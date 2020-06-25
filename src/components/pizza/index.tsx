import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPizzaState } from 'context/redux/reducers/pizza';
import { loadPizzas } from 'context/redux/actions/pizza';
import { Flex } from 'rebass';
import Card from './cards';

const Pizza: React.FC = () => {
  const { pizzas, isLoading } = useSelector(getPizzaState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pizzas) {
      dispatch(loadPizzas());
    }
  }, []);

  if (isLoading) {
    return <span>loading...</span>;
  }
  return (
    <Flex flexWrap='wrap' flex={1}>
      {
        pizzas && pizzas.map((pizza) => <Card key={pizza.id} pizza={pizza} />)
      }
      {
        pizzas && pizzas.map((pizza) => <Card key={pizza.id} pizza={pizza} />)
      }
    </Flex>
  );
};

export default Pizza;
