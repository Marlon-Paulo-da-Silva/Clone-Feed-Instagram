import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Feed from "../screens/Feed";

const MainNavigator = createStackNavigator({
  Feed
});

export default createAppContainer(MainNavigator);
