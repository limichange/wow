import { View, Picker, Input } from "@tarojs/components";
import { useState } from "@tarojs/taro";

export default function Filter() {
  const [pickerType1, setPickerType1] = useState(0);
  const [pickerType2, setPickerType2] = useState(0);
  const range1 = ["EP", "GP", "PR"];
  const range2 = ["大于", "等于", "小于"];

  return (
    <View className="filter">
      <Picker
        onChange={e => setPickerType1(e.detail.value)}
        mode="selector"
        value={pickerType1}
        range={range1}
      >
        {pickerType1}
      </Picker>
      <Picker
        onChange={e => setPickerType2(e.detail.value)}
        mode="selector"
        value={pickerType2}
        range={range2}
      >
        {pickerType2}
      </Picker>
      <Input type="number"></Input>

      <View className="cancel">×</View>
    </View>
  );
}
