import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CheckoutScreen } from './src/screens/CheckoutScreen';

export default function App() {
  // Simulamos un carrito para que la pantalla de pago tenga algo que mostrar
  const mockRoute = {
    params: {
      cartItems: [{ id: 1, name: "Producto Prueba", quantity: 2 }],
      shippingFee: 1500
    }
  };

  // Simulamos la navegación
  const mockNavigation = {
    navigate: (screen: string) => console.log(`Simulando viaje a: ${screen}`)
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8FAFC', paddingTop: 40 }}>
      <StatusBar barStyle="dark-content" />
      <CheckoutScreen route={mockRoute} navigation={mockNavigation} />
    </SafeAreaView>
  );
}
