import React from "react";
import CharacterDetailsNavigator from "../navigation/CharacterDetailsNavigator";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const CharacterDetailsScreen = (props: any) => {
  <CharacterDetailsNavigator />;
};

// CharacterDetailsScreen.navigationOptions = (navigationData: any) => {
//   const name = navigationData.navigation.getParam("characterName");
//   const id = navigationData.navigation.getParam("characterId");
//   return {
//     headerTitle: name,
//     headerRight: () => (
//       <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//         <Item
//           title="Edit"
//           iconName="create"
//           onPress={() => {
//             navigationData.navigation.navigate({
//               routeName: "Edit",
//               params: {
//                 characterId: id,
//                 characterName: name,
//               },
//             });
//           }}
//         />
//       </HeaderButtons>
//     ),
//   };
// };

export default CharacterDetailsScreen;
