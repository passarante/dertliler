import { Text } from "react-native";

const TextComponent = (props) => {
  return (
    <Text style={{ color: props.color, fontSize: props.size }}>
      {props.title}
    </Text>
  );
};

export default TextComponent;
