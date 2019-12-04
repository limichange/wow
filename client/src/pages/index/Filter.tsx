import { View, Picker, Input } from "@tarojs/components";
import { useState } from "@tarojs/taro";

export default function Filter() {
  const [pickerType, setPickerType] = useState(-1);

  return (
    <View className="filter">
      <Picker
        onChange={e => setPickerType(e.detail.value)}
        mode="selector"
        value={pickerType}
        range={["EP", "GP", "PR"]}
      >
        {pickerType}
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
