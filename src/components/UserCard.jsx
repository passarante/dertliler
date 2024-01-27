import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserCard = (props) => {
  const user = props.user;
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: user.id % 2 === 0 ? "#ec5858" : "#e9e6e6" },
      ]}
    >
      <Text>@{user.username}</Text>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
      <Text>{user.city}</Text>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efefef",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
  },
});
