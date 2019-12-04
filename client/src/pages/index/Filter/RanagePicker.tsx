import { Picker } from "@tarojs/components";
import { useState } from "@tarojs/taro";

export default function RangePicker(props) {
  const [pickerType, setPickerType] = useState(0);

  function onChange(e) {
    const { value } = e.detail;
    setPickerType(value);
    props.onChange(value);
  }

  return (
    <Picker
      onChange={onChange}
      mode="selector"
      value={pickerType}
      range={props.range}
    >
      {props.range[pickerType]}
    </Picker>
  );
}
