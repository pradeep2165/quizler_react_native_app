import { createStackNavigator } from "@react-navigation/stack";
import Home from "../component/Home";
import Quiz from "../component/Quiz";
import Result from "../component/Result";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
      <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
