import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Alert } from "react-native";
import { CartScreen, HomeScreen, ProfileScreen } from "../screens";
import CustomDrawerContent from "../components/CustomDrawerContent";
import { useCartContext } from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";
import CartIcon from "../components/CartIcon";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CartStack = () => {
  const navigation = useNavigation();
  const { cart, clearCart } = useCartContext();
  const handleClearCart = () => {
    Alert.alert("Clear Cart", "Are you sure you want to clear the cart?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "OK",
        onPress: () => {
          clearCart();
        },
      },
    ]);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitle: "My Cart",
          headerLeft: () => (
            <FontAwesome5
              name="arrow-left"
              size={24}
              color="black"
              style={{ marginHorizontal: 20 }}
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () =>
            cart?.length > 0 ? (
              <FontAwesome5
                name="trash"
                size={24}
                color="black"
                style={{ marginRight: 15 }}
                onPress={handleClearCart}
              />
            ) : null,
        }}
      />
    </Stack.Navigator>
  );
};

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      id="drawer"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home",
          headerRight: () => {
            return <CartIcon />;
          },
        })}
      />
      <Drawer.Screen
        name="CartStack"
        component={CartStack}
        options={{ headerShown: false, title: "Cart", unmountOnBlur: true }}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
