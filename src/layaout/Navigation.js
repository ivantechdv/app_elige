import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerToggleButton  } from '@react-navigation/drawer';
import { Image, StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import Component from '../pages/Component';
import LogoImage from './../../assets/logo.png';
// Importa tus componentes de pantalla aquí
// Reemplaza 'ComponenteCrearReporte', 'ComponenteReportes', etc., con tus componentes reales

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Lógica para obtener datos de usuario/administrador
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.drawerHeader}>
        <Image source={LogoImage} style={styles.logo} />
        <Text style={styles.versionText}>SERVICIOS</Text>
        <Text style={styles.versionText}>{email}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Comprar un espacio"
          icon={({ focused, color, size }) => (
            <FontAwesome name="check-circle" size={30} color="#000" />
          )}
          onPress={() => props.navigation.navigate('CrearReporte')} // Reemplaza 'CrearReporte' con el nombre real de la pantalla
          labelStyle={styles.drawerItemLabel} 
        />
        <DrawerItem
          label="Edita tu espacio"
          icon={({ focused, color, size }) => (
            <FontAwesome name="check-circle" size={30} color="#000" />
          )}
          onPress={() => props.navigation.navigate('Reportes')} // Reemplaza 'Reportes' con el nombre real de la pantalla
          labelStyle={styles.drawerItemLabel} 
        />
        <DrawerItem
          label="Ayuda y Soporte"
          icon={({ focused, color, size }) => (
            <FontAwesome name="check-circle" size={30} color="#000" />
          )}
          onPress={() => props.navigation.navigate('Reportes')} // Reemplaza 'Reportes' con el nombre real de la pantalla
          labelStyle={styles.drawerItemLabel} 
        />
        <DrawerItem
          label="Quienes Somos"
          icon={({ focused, color, size }) => (
            <FontAwesome name="check-circle" size={30} color="#000" />
          )}
          onPress={() => props.navigation.navigate('Reportes')} // Reemplaza 'Reportes' con el nombre real de la pantalla
          labelStyle={styles.drawerItemLabel} 
        />
        <DrawerItem
          label="Siguenos"
          icon={({ focused, color, size }) => (
            <FontAwesome name="check-circle" size={30} color="#000" />
          )}
          onPress={() => props.navigation.navigate('Reportes')} // Reemplaza 'Reportes' con el nombre real de la pantalla
          labelStyle={styles.drawerItemLabel} 
        />
        <DrawerItem
          label="Tutorial"
          icon={({ focused, color, size }) => (
            <FontAwesome name="check-circle" size={30} color="#000" />
          )}
          onPress={() => props.navigation.navigate('Reportes')} // Reemplaza 'Reportes' con el nombre real de la pantalla
          labelStyle={styles.drawerItemLabel} 
        />
        {/* Agregar otros elementos del Drawer aquí si es necesario */}
      </DrawerContentScrollView>
      <DrawerItem
        label="Cerrar Sesión"
        icon={({ focused, color, size }) => (
          <FontAwesome name="sign-out" size={30} color="#000" />
        )}
        onPress={() => {
          props.onLogout();
        }}
        labelStyle={styles.drawerItemLabel} 
      />
    </View>
  );
};

const Navigation = ({ onLogout }) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="CrearReporte" // Reemplaza 'CrearReporte' con el nombre real de la pantalla
        drawerContent={props => (
          <CustomDrawerContent {...props} onLogout={onLogout} />
        )}
        screenOptions={{
        drawerPosition: 'left',
        headerLeft: false,
        headerRight: () => <DrawerToggleButton />,
        drawerStyle: {
            backgroundColor: '#000',
          },
    }}>       
        <Drawer.Screen
          name="CrearReporte" // Reemplaza 'CrearReporte' con el nombre real de la pantalla
          component={Component} // Reemplaza 'ComponenteCrearReporte' con tu componente real
          options={{
            headerStyle: styles.drawerHeaderStyle,
            headerTintColor: styles.drawerHeaderTintColor,
            headerShadowVisible: false,
            headerTitleAlign: 'left',
            headerTitle: () => (
      <Image
        style={{ width: 80, height: 40 }}
        source={LogoImage} // Asegúrate de que LogoImage sea la ruta de tu imagen
      />
    ),
          }}
        />
        <Drawer.Screen
          name="Reportes" // Reemplaza 'Reportes' con el nombre real de la pantalla
          component={Component} // Reemplaza 'ComponenteReportes' con tu componente real
          options={{
            headerStyle: styles.drawerHeaderStyle,
            headerTintColor: styles.drawerHeaderTintColor,
            headerShadowVisible: false,
            headerTitleAlign: 'center',            
          }}
        />
        {/* Agregar más Drawer.Screen para otras pantallas si es necesario */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    
  },
  versionText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  drawerItemLabel: {
    color: '#fff',
  },
  drawerHeaderStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 1, // Añade un borde inferior
    borderBottomColor: '#000', // Color del borde
  },
  drawerHeaderTintColor: '#000',
});

export default Navigation;
