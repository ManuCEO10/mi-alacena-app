import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { api } from '../services/api';

export const CheckoutScreen = ({ route, navigation }: any) => {
  const { cartItems, shippingFee } = route.params;
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const orderRes = await api.post('/withdrawals', { items: cartItems });
      navigation.navigate('TrackingScreen', { orderId: orderRes.data.orderId });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Confirmar Retiro</Text>
      {isLoading ? <ActivityIndicator size="large" /> : (
        <TouchableOpacity onPress={handlePayment} style={{ backgroundColor: '#009EE3', padding: 15, marginTop: 20 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Pagar con Mercado Pago</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
