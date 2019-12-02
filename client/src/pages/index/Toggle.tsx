import { View } from "@tarojs/components";

export default function Toggle(props) {
  let symbol = "";

  if (props.type === "down") symbol = "↓";
  if (props.type === "up") symbol = "↑";

  return (
    <View onClick={props.onClick}>
      {props.children} {symbol}
    </View>
  );
}
