import { View, Textarea } from "@tarojs/components";
import { useState } from "@tarojs/taro";
import "./index.scss";

export default function ImportPage() {
  const [data, setData] = useState([]);
  const [textareaValue, setTextareaValue] = useState("");
  const [textareaValueError, setTextareaValueError] = useState<boolean>(false);

  function onTextareaUpdate(e) {
    const value = e.detail.value.trim();

    setTextareaValue(e.detail.value);
    setTextareaValueError(false);

    try {
      JSON.parse(value);

      Taro.cloud
        .database()
        .collection("data")
        .add({
          data: {
            value,
            date: new Date()
          },
          success: function(res) {
            console.log(res);
          }
        });
    } catch (e) {
      setTextareaValueError(true);
    }
  }

  return (
    <View>
      <Textarea
        showConfirmBar={true}
        maxlength={-1}
        value={textareaValue}
        onInput={onTextareaUpdate}
      ></Textarea>
      {textareaValueError && <View className="error">数据格式错误</View>}
    </View>
  );
}
