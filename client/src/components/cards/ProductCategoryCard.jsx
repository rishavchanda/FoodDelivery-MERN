import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease-out;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 170px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 320px;
  border-radius: 6px;
  object-fit: cover;
  transition: all 0.3s ease-out;
  @media (max-width: 600px) {
    height: 230px;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.text_primary};
  }
  &:hover ${Image} {
    opacity: 0.8;
  }
`;
const Menu = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  bottom: 0px;
  left: 50;
  right: 50;
  display: flex;
  gap: 12px;
`;
const Button = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.white};
  padding: 12px 20px;
  background: white;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.black} 30%,
    transparent
  );
  @media (max-width: 600px) {
    padding: 6px 14px;
  }
`;
const Sale = styled.div`
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  top: 10px;
  right: 10px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  background: green;
  padding: 3px 6px;
  border-radius: 4px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const ProductCategoryCard = ({ category }) => {
  return (
    <Card>
      <Top>
        <Image src={category.img} />
        <Menu>
          <Button>{category.name}</Button>
        </Menu>
        <Sale>{category.off}</Sale>
      </Top>
    </Card>
  );
};

export default ProductCategoryCard;
