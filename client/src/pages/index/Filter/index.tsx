import { View, Picker, Input } from "@tarojs/components";
import { useState, useEffect } from "@tarojs/taro";
import "./index.scss";
import RangePicker from "./RanagePicker";

export default function Filter() {
  const [pickerType1, setPickerType1] = useState(0);
  const [pickerType2, setPickerType2] = useState(0);
  const [numberString, setNumberString] = useState("");
  const range1 = ["EP", "GP", "PR"];
  const range2 = ["大于", "等于", "小于"];

  useEffect(() => {
    console.log(pickerType1, pickerType2, numberString);

    if (numberString === '') return
  });

  function clear() {
    setNumberString('')
  }

  return (
    <View className="filter">
      <RangePicker range={range1} onChange={setPickerType1}></RangePicker>
      <RangePicker range={range2} onChange={setPickerType2}></RangePicker>

      <Input
        placeholder="输入数值"
        type="number"
        value={numberString}
        onInput={e => setNumberString(e.detail.value)}
      ></Input>

      <View onClick={clear} className="cancel">×</View>
    </View>
  );
}
