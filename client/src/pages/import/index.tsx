import { View, Textarea } from "@tarojs/components";
import { useState } from "@tarojs/taro";

export default function ImportPage() {
  const [data, setData] = useState([]);
  const [textareaValue, setTextareaValue] = useState('');

  function onTextareaUpdate(e) {
    setTextareaValue(e.detail.value)
  }

  return (
    <View>
      <Textarea value={textareaValue} onInput={onTextareaUpdate}></Textarea>
      import page {textareaValue}
    </View>
  );
}
