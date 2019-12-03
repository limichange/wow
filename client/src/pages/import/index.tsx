import { View, Textarea } from "@tarojs/components";
import { useState } from "@tarojs/taro";
import "./index.scss";

export default function ImportPage() {
  const [data, setData] = useState([]);
  const [textareaValue, setTextareaValue] = useState("");
  const [textareaValueError, setTextareaValueError] = useState(false);

  function onTextareaUpdate(e) {
    const value = e.detail.value;

    setTextareaValue(e.detail.value);
    setTextareaValueError(false);

    try {
      JSON.parse(value);
    } catch (e) {
      setTextareaValueError(true);
    }
  }

  return (
    <View>
      <Textarea value={textareaValue} onInput={onTextareaUpdate}></Textarea>
      {textareaValueError && <View className="error">数据格式错误</View>}
    </View>
  );
}
