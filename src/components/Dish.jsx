import React from "react";
import styled from "styled-components";

// Стилізовані компоненти
const RecipeContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 10px 0;
  background-color: #f9f9f9;
`;

const RecipeTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const MoreInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 8px;
  width: fit-content;
`;

const Difficulty = styled.p`
  font-weight: bold;
  color: #555;
  display: flex;
`;

const ConstOne = styled.div``;

const Dish = ({ arr }) => {
  return (
    <div>
      {arr.map((recipe) => (
        <RecipeContainer key={recipe.dish} className="recipe">
          <ConstOne>
            <RecipeTitle>{recipe.dish}</RecipeTitle>
            <MoreInfo className="moreInf">
              <p>{recipe.prep_time} хв/</p>
              <p>{recipe.calories} кал</p>
            </MoreInfo>
          </ConstOne>
          <div className="contTwo">
            <Difficulty>
              <div className={`${recipe.difficulty.toLowerCase() === 'easy' ? 'active easy' : 'easy'} diffBox`}>easy</div>
              <div className={`${recipe.difficulty.toLowerCase() === 'medium' ? 'active medium' : 'medium'} diffBox`}>medium</div>
              <div className={`${recipe.difficulty.toLowerCase() === 'hard' ? 'active hard' : 'hard'} diffBox`}>hard</div>
            </Difficulty>
          </div>
        </RecipeContainer>
      ))}
    </div>
  );
};

export default Dish;
