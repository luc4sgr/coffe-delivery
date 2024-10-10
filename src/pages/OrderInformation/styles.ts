import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #d28b00;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  width: 320px;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Icon = styled.span<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #555;
`;

export const DeliveryGuyImage = styled.img`
  width: 300px;
  height: auto;
`;
