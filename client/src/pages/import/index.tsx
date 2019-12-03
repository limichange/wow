import { View, Textarea } from "@tarojs/components";
import { useState } from "@tarojs/taro";
import JSON5 from "json5";
import "./index.scss";

export default function ImportPage() {
  const [data, setData] = useState({});
  const [textareaValue, setTextareaValue] = useState("");
  const [textareaValueError, setTextareaValueError] = useState<boolean>(false);

  function onTextareaUpdate(e) {
    const value = e.detail.value.trim();

    setTextareaValue(e.detail.value);
    setTextareaValueError(false);

    try {
      setData(JSON5.parse(value));
    } catch (e) {
      setTextareaValueError(true);
    }
  }

  function saveData() {
    if (textareaValueError) return;

    Taro.cloud
      .database()
      .collection("data")
      .add({
        data: {
          data,
          date: new Date()
        },
        success: function(res) {
          console.log(res);
        }
      });
  }

  return (
    <View>
      <Textarea
        className="textarea"
        placeholder="输入数据格式"
        showConfirmBar={true}
        maxlength={-1}
        value={textareaValue}
        onInput={onTextareaUpdate}
      ></Textarea>
      {textareaValueError && <View className="error">数据格式错误</View>}
    </View>
  );
}
