import React, { useEffect } from 'react';
import Delivery from "../../assets/Delivery.svg"
import { usePurchaseDetails } from '../../context/PurchaseDetailsContext';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '../../routes';
import { defaultTheme } from '../../styles/themes/default';
import { Card, Container, DeliveryGuyImage, DetailItem, Icon, InfoContainer, Subtitle, Text, Title } from './styles';

export const OrderInformation: React.FC = () => {
  const { addressUtils: { address }, purchaseDetails } = usePurchaseDetails();
  const navigate = useNavigate();

  useEffect(() => {
    if (address.street === '' || address.number === '' || address.cep === '') {
      navigate(RoutesEnum.HOME)
    }
  }, [address]);
  
  return (
    <Container>
      <InfoContainer>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
        <Card>
          <DetailItem>
            <Icon color={defaultTheme.purple}>
              📍
            </Icon>
            <Text>Entrega em <strong>{address.street}, {address.number}</strong><br />{address.neighborhood} - {address.city}, {address.state}</Text>
          </DetailItem>
          <DetailItem>
            <Icon color="#f2c94c">
              ⏰
            </Icon>
            <Text>Previsão de entrega <strong>20 min - 30 min</strong></Text>
          </DetailItem>
          <DetailItem>
            <Icon color="#6fcf97">
              💳
            </Icon>
            <Text>Pagamento na entrega <strong> no {purchaseDetails.paymentMethod}</strong></Text>
          </DetailItem>
        </Card>
      </InfoContainer>
      <DeliveryGuyImage src={Delivery} alt="Delivery Guy on Scooter" />
    </Container>
  );
};

