import { View, Picker, Input } from "@tarojs/components";

export default function Filter() {
  return (
    <View className="filter">
      <Picker
        onChange={() => {}}
        mode="selector"
        value={0}
        range={["EP", "GP", "PR"]}
      >
        EP
      </Picker>
      <Picker
        onChange={() => {}}
        mode="selector"
        value={0}
        range={["大于", "等于", "小于"]}
      >
        大于
      </Picker>
      <Input type="number"></Input>

      <View className="cancel">×</View>
    </View>
  );
}
